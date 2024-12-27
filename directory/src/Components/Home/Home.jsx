import React, { useState } from 'react'
import './home.css'
import HomeEmp from './HomeEmp';
import { useSelector } from 'react-redux';
import AddEmployee from '../AddEmployee/AddEmployee';

function Home() {
  const [tempFilters, setTempFilters] = useState({
    status: '0',
    location: '',
    department: '',
  })

  const [filters,setFilters] = useState({
    status: '0',
    location: '',
    department: '',
  });


  const [alphabet, setAlphabet] = useState("");
  let filterHTML = [];
  const employee = useSelector(state => state.EmployeeReducer.employee || []);

  const handleAlphabetChange = (e) => {
    setAlphabet(e)
  }

  for (let i = 65; i <= 90; i++) {
    let alpha = String.fromCharCode(i);
      filterHTML.push(
          <button 
          key={alpha}
          onClick={() => handleAlphabetChange(alphabet === alpha?'':alpha)} 
          className = {`filter-alpha  ${alphabet === alpha ? 'active-alpha' : ''}`}>{alpha}</button>
      );
  }

  const handleFilterChange = (key, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
  }

  const removeFilters = () => {
    setTempFilters({
      status: '0',
      location: '',
      department: '',
    });

    setFilters({
      status: '0',
      location: '',
      department: '',
    });

    setAlphabet('')
  }

  const filteredEmployee = employee.filter((emp) => {
    return (
      (filters.status === '0' || filters.status === '1' && emp.status || filters.status === '2' && !emp.status) &&
      (filters.location === '' || filters.location === emp.location) &&
      (filters.department === '' || filters.department === emp.department) &&
      (alphabet === '' || emp.name.startsWith(alphabet))
    )
  })

  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5 className='font-header'>Employees</h5>
          <p className='font-p'>Find all of your company's employee accounts and thier associated roles</p>
        </div>

        <div className='d-flex gap-3 align-items-center'>
          <button className='export'>
            <img className='me-1' src="/Interface/Export.svg" alt="" />
            <span className='btn-text'>EXPORT</span>
            </button>
          <AddEmployee />
        </div>

      </div>

      <div>
        <div className='d-flex gap-1 mt-2 flex-wrap'>  
          <button className='filter-btn'><img src="/Vector.png" alt="" /></button>
          {filterHTML}
        </div>
      </div>

      <div className='mt-3 filter-con'>
        <div className='d-flex align-items-center gap-2'>
          <p className='m-0'>Filter</p>
          <img className='h-75' src="Vector.png" alt="" />
          <select value = {tempFilters.status} onChange={(e) => handleFilterChange('status',e.target.value)} 
          className='form-select form-select-sm w-75 ms-2 custom-select' name="" id="">
            <option value="0">Status</option>
            <option value="1">Active</option>
            <option value="2">InActive</option>
          </select>

          <select value={tempFilters.location} onChange={(e) => handleFilterChange('location',e.target.value)} 
          className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>

          <select value={tempFilters.department} onChange={(e) => handleFilterChange('department',e.target.value)} 
          className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Department</option>
            <option value="Product Engg">Product Engg</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className='d-flex gap-3'>
          <button onClick={removeFilters} className='filter-reset px-3'>Reset</button>
          <button onClick={applyFilters} className='filter-apply px-3'>Apply</button>
        </div>
      </div>

      <div className='mt-3 display-con rounded-top-3'>
        <div className='p-3 d-flex justify-content-between'>
            <div className='d-flex gap-2 align-items-center'>
              <img className='cursor-pointer h-75' src="/arrow-turn left -down.png" alt="" />
              <button className='common-btn px-3 py-1' style={{opacity: "0.6"}}>Delete</button>
            </div>

            <div><img className='cursor-pointer me-4' src="/table-add.png" alt="" /></div>
        </div>

        <div className='overflow-hidden'>
          <div className="row header">
            <div className='col-1 d-flex justify-content-center'><input type="checkbox" name="" id="" /></div>
            <div className='col-2 th'>USER <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className='col th'>LOCATION <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className='col th'>DEPARTMENT <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className='col-2 th'>ROLE <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className="col th">EMP NO <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className='col th'>STATUS <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className="col th">JOIN DT <img className='fil-ic' src="/unfold.png" alt="" /></div>
            <div className='col-1 d-flex justify-content-center'>...</div>
          </div>

          <HomeEmp empArray={filteredEmployee}/>
        </div>
      </div>
    </div>
  )
}

export default Home
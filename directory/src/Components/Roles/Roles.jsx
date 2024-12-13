import React, { useState } from 'react'
import './roles.css'
import RoleList from './RoleList'
import { useSelector } from 'react-redux'

function Roles() {
  const [tempFilters, setTempFilters] = useState({
    department: '',
    location: '',
  });

  const [filters, setFilters] = useState({
    department: '',
    location: '',
  });

  const handleFilterChange = (key, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const handleReset = () => {
    setTempFilters({
      department: '',
      location: ''
    });

    setFilters({
      department: '',
      location: ''
    });
  }

  const handleApply = () => {
    setFilters(tempFilters)
  }

  const roles = useSelector(state => state.RoleReducer.role);


  const filterRoles = roles.filter((role) => {
    return(
      (filters.department === '' || filters.department === role.department) &&
      (filters.location === '' || filters.location === role.location)
    )
  })

  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5 className='font-header'>Roles</h5>
          <p className='font-p'>Find all of your company's employee accounts and thier associated roles</p>
        </div>
      </div>

      <div className='mt-3 p-3 filter-con'>
        <div className='d-flex align-items-center gap-2'>
          <p className='m-0'>Filter</p>
          <img className='h-75' src="Vector.png" alt="" />

          <select value={tempFilters.department} onChange={(e) => handleFilterChange('department',e.target.value)} 
          className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Department</option>
            <option value="Product Engg">Product Engg</option>
            <option value="IT">IT</option>
            <option value="UI/UX">UI/UX</option>
          </select>

          <select value={tempFilters.location} onChange={(e) => handleFilterChange('location',e.target.value)} 
          className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>

        <div className='d-flex gap-3'>
          <button onClick={handleReset} className='filter-reset px-3'>Reset</button>
          <button onClick={handleApply} className='filter-apply px-3'>Apply</button>
        </div>
      </div>


      <div className='role-con mt-3'>
        <RoleList roleArr={filterRoles}/>
      </div>
    </div>
  )
}

export default Roles
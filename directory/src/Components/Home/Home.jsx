import React from 'react'
import './home.css'

function Home() {
  let filterHTML = [];

  for (let i = 65; i <= 90; i++) {
      filterHTML.push(
          <button className = "filter-alpha">{String.fromCharCode(i)}</button>
      );
  }

  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5>Employees</h5>
          <p>Find all of your company's employee accounts and thier associated roles</p>
        </div>

        <div className='d-flex gap-3 align-items-center'>
          <button className='export'>
            <img className='me-1' src="/Interface/Export.svg" alt="" />
            EXPORT
            </button>
          <button className='add'>
            <img className='me-2' src="/Interface/Add.svg" alt="" />
            ADD EMPLOYEE
            </button>
        </div>

      </div>

      <div>
        <div className='d-flex gap-1 grow-1'>  
          <button className='filter-btn'><img src="/Vector.png" alt="" /></button>
          {filterHTML}
        </div>
      </div>

      <div className='mt-3 p-3 filter-con'>
        <div className='d-flex align-items-center gap-2'>
          <p className='m-0'>Filter</p>
          <img className='h-75' src="Vector.png" alt="" />
          <select className='form-select form-select-sm w-75 ms-2 custom-select' name="" id="">
            <option value="">Status</option>
          </select>

          <select className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Location</option>
          </select>

          <select className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Department</option>
          </select>
        </div>

        <div className='d-flex gap-3'>
          <button className='filter-reset px-3'>Reset</button>
          <button className='filter-apply px-3'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Home
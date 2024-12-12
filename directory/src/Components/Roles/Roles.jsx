import React from 'react'
import './roles.css'
import RoleList from './RoleList'

function Roles() {
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

          <select className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Department</option>
            <option value="Product Engg">Product Engg</option>
            <option value="Management">Management</option>
          </select>

          <select className='form-select form-select-sm ms-2 custom-select' name="" id="">
            <option value="">Location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>

        <div className='d-flex gap-3'>
          <button className='filter-reset px-3'>Reset</button>
          <button className='filter-apply px-3'>Apply</button>
        </div>
      </div>


      <div className='role-con mt-3'>
        <RoleList />
      </div>
    </div>
  )
}

export default Roles
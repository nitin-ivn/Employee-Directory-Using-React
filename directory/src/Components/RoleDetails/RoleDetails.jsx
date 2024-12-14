import React from 'react'
import { NavLink } from 'react-router'
import './roledetails.css'

function RoleDetails() {
  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5 className='fs-5'>Roles {`>`} Employees</h5>
          <p className='desc'>All the roles are cofigured here</p>
        </div>

        <div className='d-flex gap-3 align-items-center'>
          <button className='add'>
            <img className='me-2' src="/Interface/Add.svg" alt="" />
            <span className='btn-text'>ADD EMPLOYEE</span>
            </button>
        </div>
      </div>

      <div className='description d-flex flex-column gap-1'>
        <h5>Role Description</h5>
        <p className='bg-fore'>Configure the providers that are available to users when they sign in. Configure the providers that are available to users when they sign in. Configure the providers that are available to users when they sign in. Configure the providers that are available to users when they sign in.</p>
      </div>


      <div className='role-con mt-3'>
       <div className='role d-flex flex-column gap-1'>
       <div className='td'>
          <div className='d-flex align-items-center gap-2 h-100'>
          <img className='emp-pic' src='/Employee/1.jpeg' alt="" />
          <div className='text-start'>
              <p className='m-0 font'>Robert Fox</p>
              <p className='m-0 font-email'>Head of Product Design</p>
          </div>
          </div>
      </div>

      <div className='d-flex flex-column mt-2'>
        <div className='role-det'>
          <img src="/Vector (1).svg" alt="" />
          <p className='m-0'>INF122</p>
        </div>

        <div className='role-det mt-1'>
          <img src="/email-1_svgrepo.com.svg" alt="" />
          <p className='m-0'>adamk@yahoo.com</p>
        </div>

        <div className='role-det mt-1'>
          <img src="/team.svg" alt="" />
          <p className='m-0'>Technology</p>
        </div>

        <div className='role-det mt-1'>
          <img src="/location-pin-alt.svg" alt="" />
          <p className='m-0'>Stockton, New Hemisphere</p>
        </div>
      </div>

        <NavLink className='view m-0 mt-3 text-dark text-end'><p>View <img src="/Vector.svg" alt="" /></p></NavLink>
      </div>
      </div>
    </div>
  )
}

export default RoleDetails
import React from 'react'
import { NavLink } from 'react-router'

function RoleList({roleArr}) {
  return (
    <>
      {
        roleArr.map((role, index) => {
          return (
            <div>
              <div className='role d-flex flex-column gap-1'>
                <div className='role-col mb-3'>
                  <p className='fw-bold mb-1 text-dark'>{role.name}</p>
                  <img src="edit.svg" alt="" />         
                </div>

                <div className='role-col'>
                  <div className='d-flex gap-1'>
                    <img src="team.svg" alt="" />
                    <p className='m-0'>Department</p>
                  </div>
                  <p className='m-0'>{role.department}</p>      
                </div>

                <div className='role-col'>
                  <div className='d-flex gap-1'>
                    <img src="location-pin-alt.svg" alt="" />
                    <p className='m-0'>Location</p>
                  </div>
                  <p className='m-0'>Hyderabad</p>      
                </div>

                
                <div className='role-col'>
                  <p className='m-0'>Total Employees</p>
                  <div>
                    <img className='emp-img' src="/Employee/1.jpeg" alt="" />
                    <img className='emp-img' src="/Employee/2.jpg" alt="" />
                    <img className='emp-img' src="/Employee/1.jpeg" alt="" />
                    <img className='emp-img' src="/Employee/3.jpg" alt="" /> 
                    <label className='emp-img-2'>+43</label> 
                  </div>     
                </div>

                <NavLink to= '/role/123' className='view m-0 mt-3 text-dark text-end'><p>View all Employees <img src="/Vector.svg" alt="" /></p></NavLink>
              </div>
          </div>
          )
        })
      }
    </>
  )
}

export default RoleList
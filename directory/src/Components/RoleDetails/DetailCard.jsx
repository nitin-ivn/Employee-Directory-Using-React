import React from 'react'
import { NavLink } from 'react-router'

function DetailCard({roleEmp}) {
    console.log(roleEmp);

    return(
        <>
          {
            roleEmp.map((emp, index) => {
                return (
                    <div key={emp.id} className='role d-flex flex-column gap-1'>
                        <div className='td'>
                            <div className='d-flex align-items-center gap-2 h-100'>
                                <img className='emp-pic' src={emp.img} alt="" />
                                <div className='text-start'>
                                    <p className='m-0 font'>{emp.name}</p>
                                    <p className='m-0 font-email'>{emp.role}</p>
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
                                <p className='m-0'>{emp.email}</p>
                            </div>
                
                            <div className='role-det mt-1'>
                                <img src="/team.svg" alt="" />
                                <p className='m-0'>{emp.department}</p>
                            </div>
                
                            <div className='role-det mt-1'>
                                <img src="/location-pin-alt.svg" alt="" />
                                <p className='m-0'>{emp.location}</p>
                            </div>
                        </div>
                
                        <NavLink className='view m-0 mt-3 text-dark text-end'><p>View <img src="/Vector.svg" alt="" /></p></NavLink>
                    </div>
                )
            })
        }
        </>
    )
}

export default DetailCard
import React from 'react'

function HomeEmp({ id, name, email, location, department, role, status, joinDate,img }) {
    return (
        <div className="row emp">
        <div className='col-1 d-flex justify-content-center'>
            <input type="checkbox" name="" id="" />
        </div>
        <div className='col-2 td'>
            <div className='d-flex align-items-center gap-2 h-100'>
            <img className='emp-pic' src={img} alt="" />
            <div className='text-start'>
                <p className='m-0 font'>{name}</p>
                <p className='m-0 font-email'>{email}</p>
            </div>
            </div>
        </div>
        <div className='col td'>{location}</div>
        <div className='col td'>{department}</div>
        <div className='col-2 td'>{role}</div>
        <div className="col td">TZ00{id}</div>
        <div className='col td'>
            <div className={`status ${status ? "active" : "inactive"}`}>
            {status ? "Active" : "Inactive"}
            </div>
        </div>
        <div className="col td">{joinDate}</div>
        <div className='col-1 d-flex justify-content-center cursor-pointer'>...</div>
        </div>
    );
}
  

export default HomeEmp
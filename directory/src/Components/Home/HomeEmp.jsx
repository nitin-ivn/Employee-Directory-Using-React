import React from 'react'

function HomeEmp({ empArray }) {
    const employees = empArray

    return (
        <>
        {
            employees.map((emp, index) => {
                return(
                <div className="row emp" key={emp.id}>
                    <div className='col-1 d-flex justify-content-center'>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='col-2 td'>
                        <div className='d-flex align-items-center gap-2 h-100'>
                        <img className='emp-pic' src={emp.img} alt="" />
                        <div className='text-start'>
                            <p className='m-0 font'>{emp.name}</p>
                            <p className='m-0 font-email'>{emp.email}</p>
                        </div>
                        </div>
                    </div>
                    <div className='col td'>{emp.location}</div>
                    <div className='col td'>{emp.department}</div>
                    <div className='col-2 td'>{emp.role}</div>
                    <div className="col td">TZ00{emp.id}</div>
                    <div className='col td'>
                        <div className={`status ${emp.status ? "active" : "inactive"}`}>
                        {emp.status ? "Active" : "Inactive"}
                        </div>
                    </div>
                    <div className="col td">{emp.joinDate}</div>
                    <div className='col-1 d-flex justify-content-center cursor-pointer'>...</div>
                </div>

                )
            })
        }
    </>
    );
}

export default HomeEmp;
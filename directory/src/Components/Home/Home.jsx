import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5>Employees</h5>
          <p>Find all of your company's employee accounts and thier associated roles</p>
        </div>

        <div className='h-100 d-flex gap-3 align-items-center'>
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
    </div>
  )
}

export default Home
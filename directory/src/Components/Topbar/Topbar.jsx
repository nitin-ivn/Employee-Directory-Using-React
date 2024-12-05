import React from 'react'
import './topbar.css'

function Topbar({sideWidth}) {
  return (
    <div className='topbar p-2' style={{marginLeft: `${sideWidth}vw`,width: `calc(${98 - sideWidth}vw)`}}>
      <div className='ps-2'>
        <img src="/bx-search.png" alt="" />
      </div>
        <input 
        type="text"
        placeholder='Search'
        className='search-bar p-2'
        />

        <div className='details'>
          <button className='nav-com'><img src="/VerticalNavbar/Language.svg" alt="" /></button>
          <button className='nav-com'><img src="/VerticalNavbar/Categories.svg" alt="" /></button>
          <button className='nav-com'><img src="/VerticalNavbar/Mode.svg" alt="" /></button>
          <button className='nav-com'><img src="/VerticalNavbar/Notifications.svg" alt="" /></button>
        
          <button className='profile-btn d-flex pt-2 gap-2'>
            <div className='d-flex align-items-center h-100'><img className='profile-pic' src="/Employee/1.jpeg" alt="" /></div>
            <div className='text-start'>
              <p className='m-0 font'>John Abrahm</p>
              <p className='m-0 font fw-bold'>Admin</p>
            </div>
            <div className="d-flex align-items-center h-100">
              <img src='/VerticalNavbar/down.svg'alt="" />

            </div>
          </button>
        </div>
    </div>
  )
}

export default Topbar
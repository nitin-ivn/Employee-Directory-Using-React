import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import './sidebar.css'

function Sidebar({widthChange}) {
  const [sidebarWidth,setSideBarWidth] = useState(14);

  const handleSideBar = () => {
    const width = sidebarWidth === 7 ? 14 : 7;
    setSideBarWidth(width);
    widthChange(width);
  }

  return (
    <div>
      <div className='sidebar pt-4 p-4' style={{width: `${sidebarWidth}vw`}}>
          <img className='logo' src="/TezoLogo.png" alt="" />
          <img onClick={handleSideBar} className='close-btn' src="/handle.png" alt="" />

          <div className='all'>
            <p className='title-sidebar'>ALL</p>
            <div className='d-flex flex-column justify-content-center'>
              <button className='sidebar-btn'><img src="/Horizontalnav/Dashboard.svg" alt="" /><p className='res'>Dashboard</p></button>
              <NavLink to='/' className={({isActive}) => `sidebar-btn ${isActive ? 'btn-active':''}`}><img src="/Horizontalnav/Employees.svg" alt="" /><p className='res'>Employees</p></NavLink>
            </div>
          </div>

          <div className='all mt-4'>
            <p className='title-sidebar'>ROLE / USER MANAGEMENT</p>
            <div className='d-flex flex-column justify-content-center'>
              <NavLink to='/roles' className={({isActive}) => `sidebar-btn ${isActive ? 'btn-active':''}`}><img className='svg' src="/Horizontalnav/Roles.svg"/><p className='res'>Roles</p></NavLink>
              <NavLink to = '/access' className={({isActive}) => `sidebar-btn ${isActive ? 'btn-active':''}`}><img src="/Horizontalnav/assign user.svg" alt="" /><p className='res'>Access Rights</p></NavLink>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
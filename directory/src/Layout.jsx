import React, { useState } from 'react'
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  const [sidebarWidth,setSideBarWidth] = useState(14);
  return (
    <div>
        
        <Sidebar widthChange={setSideBarWidth}/>
        <Topbar sideWidth = {sidebarWidth}/>
        <div className='pt-4' style={{marginLeft: `${sidebarWidth}vw`}}>
          <Outlet />
        </div>

    </div>
  )
}

export default Layout
import React from 'react'
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Topbar />
        <Sidebar />
        <Outlet />

    </div>
  )
}

export default Layout
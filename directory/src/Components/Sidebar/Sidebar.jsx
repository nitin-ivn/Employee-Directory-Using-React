import React, { useState } from 'react'
import './sidebar.css'

function Sidebar({widthChange}) {
  const [sidebarWidth,setSideBarWidth] = useState(7);

  const handleSideBar = () => {
    const width = sidebarWidth === 7 ? 14 : 7;
    setSideBarWidth(width);
    widthChange(width);
  }

  return (
    <div>
      <div className='sidebar pt-4 p-2' style={{width: `${sidebarWidth}vw`}}>
          <img src="/TezoLogo.png" alt="" />
      </div>
    </div>
  )
}

export default Sidebar
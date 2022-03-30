import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className="sidebar_top">
            <img src="" alt="" />
            <Avatar className='sidebaar_avatar'/>
            <h2>Robin</h2>
            <h4>Robin</h4>
        </div>

        <div className='sidebar_stats'>
            <div className="sidebar_stat">
                <p>yes</p>
                <p className="sidebar_statNumber">2,5</p>
            </div>
            <div className="sidebar_stat">
                <p>post</p>
                <p className="sidebar_statNumber">2,5</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>recent</p>
            
        </div>
    </div>
  )
}

export default Sidebar
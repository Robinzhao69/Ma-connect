import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='Sidebar'>
        <div className="sidebar_top">
            <img src="https://pbs.twimg.com/media/DlXekIXWsAQ4G35.jpg" alt="" />
            <Avatar className='sidebaar_avatar'/>
            <h2>Robin</h2>
            <h4>Robin</h4>
        </div>

        <div className='sidebar_stats'>
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,5</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,5</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('React.js')}
            {recentItem('Mediacollege')}
            {recentItem('Ma-connect')}
        </div>
    </div>
  )
}

export default Sidebar
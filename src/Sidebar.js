import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='Sidebar'>
        <div className="sidebar_top">
            <img src="https://image.posterlounge.nl/images/l/1898375.jpg" alt="" />
            <Avatar src={user.photoUrl}className='sidebaar_avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
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
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='Header'>
        <div className='header_left'>
            <img src="https://www.ma-web.nl/static/vector/Logo_blok.svg" alt=""/>
            
            <div className="header_search"> 
              <SearchIcon />
              <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className='header_right'>
             <HeaderOption Icon={HomeIcon} Title="Home"/>
             <HeaderOption Icon={SupervisorAccountIcon} Title="My Network"/>
             <HeaderOption Icon={AssignmentIcon} Title="Tasks"/>
             <HeaderOption Icon={ChatIcon} Title="Messaging"/>
             <HeaderOption Icon={NotificationsActiveIcon} Title="Notifications"/>
             <HeaderOption avatar="https://media.istockphoto.com/photos/portrait-of-a-man-picture-id155360935?k=20&m=155360935&s=170667a&w=0&h=QutjQIhQRwxY_sxwYSbYPofZgZXEzTE-8gtuoIjyAzE=" Title="Me"/>
        </div>
    </div>
  )
}

export default Header
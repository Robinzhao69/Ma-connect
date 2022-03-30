import React from 'react'
import './HeaderOption.css'
import { Avatar } from "@material-ui/core"
 
function HeaderOption({ avatar, Icon, Title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className='headerOption_icon' src={avatar}/>}
        <h3 className='headerOption_title'>{Title}</h3>
    </div>
  )
}

export default HeaderOption
import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

const HeaderOption = ({avatar,Icon,title}) => {
  return (
    <div className='headerOption'>
        {Icon && < Icon className='headerOption__icon'/>}
        {avatar &&(
          <Avatar className='headerOption__icon' src={avatar}/>
        )}
        <h2 className='headerOption__title'>{title}</h2>

    </div>
  )
}

export default HeaderOption
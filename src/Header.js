import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
  return (
    <div className='header'>
       
         <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <div className="header__search">
                <SearchIcon/> 
                <input type="text"/>
            </div>

         </div>

         <div className="header__right">
          <HeaderOption Icon={HomeIcon} title= 'Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title= 'My Network'/>
          <HeaderOption Icon={WorkIcon} title= 'Job'/>
          <HeaderOption Icon={MessageIcon} title= 'Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title= 'Notification'/>
          <HeaderOption avatar="https://i.pinimg.com/474x/19/cb/58/19cb5839846c52d78705cb219bc33df2.jpg" title= 'me'/>


         </div>


    </div>
  )
}

export default Header
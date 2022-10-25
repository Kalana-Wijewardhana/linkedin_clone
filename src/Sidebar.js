import { Avatar } from '@material-ui/core';
import React from 'react'
import"./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-56228.jpg?w=360" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>kalana Indula</h2>
            <h4>kalana7wijewardhana@gmail.com</h4>
        </div> 

    <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className='sidebar__statnumber'>2,654</p>
        </div>

        <div className="sidebar__stat">
           <p>View on Post</p>
           <p className='sidebar__statnumber'>2,012</p>
            
            </div>

    </div>
    


    </div>
  )
}

export default Sidebar
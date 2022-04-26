import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import adminPhoto from '../../assets/images/admin.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
          <NotificationsIcon/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <img src={adminPhoto} alt="" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
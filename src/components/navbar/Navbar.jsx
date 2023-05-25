import React from 'react'
import './navbar.css'

import Search from '@mui/icons-material/Search'
import LanguageOutlined from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlined from '@mui/icons-material/FullscreenExitOutlined'
import Notifications from '@mui/icons-material/Notifications'
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline'
import Menu from '@mui/icons-material/Menu'

import avatar from '../../assets/users/srk.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="item">
        <Menu className="icon" id="menu" />
      </div>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <Notifications className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <img src={avatar} alt="profile" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

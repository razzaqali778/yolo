import React from 'react'
import './sidebar.css'

import Dashboard from '@mui/icons-material/Dashboard'
import Casino from '@mui/icons-material/Casino'
import Groups2 from '@mui/icons-material/Groups2'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import BarChartIcon from '@mui/icons-material/BarChart'
import Mail from '@mui/icons-material/Mail'
import CalendarViewDayRounded from '@mui/icons-material/CalendarViewDayRounded'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Admin</span>
        </div>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/*  */}

          <li>
            <Link
              to={'/games'}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Casino className="icon" />
              <span>Casino Games</span>
            </Link>
          </li>

          <li>
            <Link
              to={'/users'}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Groups2 className="icon" />
              <span>Users</span>
            </Link>
          </li>

          <p className="title">ADMIN</p>
          <li>
            <CalendarViewDayRounded className="icon" />
            <span>Calender</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <Mail className="icon" />
            <span>Mail</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span>Cash flow</span>
          </li>
          <li>
            <BarChartIcon className="icon" />
            <span>Volume</span>
          </li>
          <li>
            <ToggleOnIcon className="icon" />
            <span>Mode</span>
          </li>

          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

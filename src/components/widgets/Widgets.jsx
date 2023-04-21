import React from 'react'

import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'

import './widgets.css'
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'

const Widgets = ({ type }) => {
  let data

  const amount = 100
  const diff = 20

  switch (type) {
    case 'User':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlined
            className="i"
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,.2)' }}
          />
        ),
      }
      break
    case 'Games':
      data = {
        title: 'Games',
        isMoney: false,
        link: 'View all Games',
        icon: (
          <ShoppingCartOutlined
            className="i"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,.2)',
            }}
          />
        ),
      }
      break

    case 'Earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlined
            className="i"
            style={{ color: 'green', backgroundColor: 'rgba(0,128,0,.2)' }}
          />
        ),
      }
      break

    case 'Balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlined
            className="i"
            style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,.2)' }}
          />
        ),
      }
      break

    default:
      break
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <p className="counts">
          {data.isMoney && '$'}
          {amount}
        </p>
        <span className="links">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets

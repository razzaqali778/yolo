import React, { useEffect, useState } from 'react'
import './home.css'

import { Navbar, Sidebar, Widgets, Table } from '../../components/index'

import userData from '../../assets/users/profiles'
import gameData from '../../assets/games/games'
import Loading from '../../components/loading/Loading'
const Home = ({ user, games }) => {
  // const [user, setUser] = useState(userData)
  // const [games, setGames] = useState(gameData)

  const [loading, setLoading] = useState(true)

  console.log(user)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) return <Loading />

  return (
    <>
      <div className="widgets">
        <Widgets type="User" />
        <Widgets type="Games" />
        <Widgets type="Earnings" />
        {/* <Widgets type="Balance" /> */}
      </div>

      <div className="listContainer">
        <div className="listTitle">
          <h2>Latest transactions</h2>
        </div>
        <Table user={user.slice(0, 4)} />
        <Table games={games.slice(0, 4)} />
      </div>
    </>
  )
}

export default Home

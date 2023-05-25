import React, { useEffect, useState } from 'react'
import './home.css'

import { Navbar, Sidebar, Widgets, Table } from '../../components/index'

import userData from '../../assets/users/profiles'
import gameData from '../../assets/games/games'
import Loading from '../../components/loading/Loading'
const Home = () => {
  const [user, setUser] = useState(userData)
  const [games, setGames] = useState(gameData)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) return <Loading />

  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <hr />
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
          <Table user={user} />
          <Table games={games} />
        </div>
      </div>
    </div>
  )
}

export default Home

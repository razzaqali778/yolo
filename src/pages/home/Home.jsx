import React, { useEffect, useState } from 'react'
import './home.css'

import { Widgets, UserTable, GameTable, Loading } from '../../components/index'

const Home = ({ user, games, setUser, setGames }) => {
  

  const [loading, setLoading] = useState(true)

  console.log(user)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
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
        {/* <Table user={user.slice(0, 4)} /> */}
        {/* <Table games={games.slice(0, 4)} /> */}
        <UserTable user={user.slice(0, 4)} setUser={setUser} />
        <GameTable games={games.slice(0, 4)} setGames={setGames} />
      </div>
    </>
  )
}

export default Home

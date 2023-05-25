import React, { useEffect, useState } from 'react'
import './newList.css'

import { Sidebar, Navbar } from '../../components/index'

import NewGame from './NewGame'
import Loading from '../../components/loading/Loading'

const Addgame = ({ addGames }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) return <Loading />
  return (
    <div className="list">
      <Sidebar />
      <div className="container-new">
        <Navbar />
        <hr />
        <div className="aTable">
          <NewGame addGames={addGames} />
        </div>
      </div>
    </div>
  )
}

export default Addgame

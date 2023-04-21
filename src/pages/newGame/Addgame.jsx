import React from 'react'
import './newList.css'

import { Sidebar, Navbar } from '../../components/index'

import NewGame from './NewGame'

const Addgame = ({ addGames }) => {
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

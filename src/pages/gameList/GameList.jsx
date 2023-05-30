import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './gameList.css'
import { GameTable, Loading } from '../../components/index'

const GameList = ({ games, setGames }) => {
  const [filteredGames, setFilteredGames] = useState(games)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [loading, setLoading] = useState(true)

  const handleFilterChange = (e) => {
    const { name, value } = e.target

    if (name === 'startDate') {
      setStartDate(value)
    } else if (name === 'endDate') {
      setEndDate(value)
    }
  }

  const filterGames = () => {
    let filtered = games

    if (startDate && endDate) {
      filtered = filtered.filter(
        (game) =>
          new Date(game.creationDate) >= new Date(startDate) &&
          new Date(game.creationDate) <= new Date(endDate)
      )
    }

    setFilteredGames(filtered)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    filterGames()
  }, [startDate, endDate])

  if (loading) return <Loading />
  return (
    <>
      <div className="filter-btn">
        <div className="filterItem">
          <label>
            <span>Filter:</span>
          </label>
          <input type="date" name="startDate" onChange={handleFilterChange} />
          <label>
            <p>-</p>
          </label>
          <input type="date" name="endDate" onChange={handleFilterChange} />
        </div>
        <div className="top">
          <Link to="./new_game">
            <button className="addBtn">Add Games</button>
          </Link>
        </div>
      </div>

      <div className="uTable">
        <GameTable setGames={setGames} games={filteredGames} />
      </div>
    </>
  )
}

export default GameList

import React, { useEffect, useState } from 'react'
import './gameList.css'
import { Sidebar, Navbar, GamesTable } from '../../components/index'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'

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
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <hr />
        <div className="filter-btn">
          <div className="filterItem">
            <label>
              <span>Filter by date:</span>
            </label>
            <input type="date" name="startDate" onChange={handleFilterChange} />
            <label>
              <p>-</p>
            </label>
            <input type="date" name="endDate" onChange={handleFilterChange} />
          </div>
          <div className="top">
            <Link to="./newGame">
              <button className="addBtn">Add Games</button>
            </Link>
          </div>
        </div>

        <div className="uTable">
          <GamesTable setGames={setGames} games={filteredGames} />
        </div>
      </div>
    </div>
  )
}

export default GameList

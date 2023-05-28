import React, { useState } from 'react'

import ReadyOnly from './ReadyOnly'
import Editable from './Editable'

import './gamesTable.css'

const GamesTable = ({ games, setGames, startDate, endDate }) => {
  const [editFormData, setEditFormData] = useState({
    name: '',
    gameCateory: '',
    creationDate: '',
    location: '',
    numberOfGames: '',
    gameconfigurations: '',
    url: '',
  })

  const [editgamesId, setEditgamesId] = useState(null)

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedData = {
      id: editgamesId,
      name: editFormData.name,
      gameCateory: editFormData.gameCateory,
      creationDate: editFormData.creationDate,
      location: editFormData.location,
      numberOfGames: editFormData.numberOfGames,
      gameconfigurations: editFormData.gameconfigurations,
      url: editFormData.url,
    }

    const newData = [...games]
    const index = games.findIndex((u) => u.id === editgamesId)
    newData[index] = editedData
    setGames(newData)
    setEditgamesId(null)
  }

  const handleEditClick = (event, games) => {
    event.preventDefault()
    setEditgamesId(games.id)

    const formValues = {
      name: games.name,
      gameCateory: games.gameCateory,
      creationDate: games.creationDate,
      location: games.location,
      numberOfGames: games.numberOfGames,
      gameconfigurations: games.gameconfigurations,
      url: games.url,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditgamesId(null)
  }

  const handleDeleteClick = (gamesId) => {
    const newData = [...games]
    const index = games.findIndex((u) => u.id === gamesId)
    newData.splice(index, 1)
    setGames(newData)
  }

  return (
    <>
      <div className="board">
        <form onSubmit={handleEditFormSubmit}>
          <table style={{ width: '100vw' }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Date</td>
                <td>Live</td>
                <td>Configuration</td>
              </tr>
            </thead>
            <tbody>
              {games.map((data) => (
                <>
                  {editgamesId === data.id ? (
                    <Editable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                      setEditFormData={setEditFormData}
                    />
                  ) : (
                    <ReadyOnly
                      data={data}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default GamesTable

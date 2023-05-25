import React, { useState } from 'react'

import './newGame.css'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

import { DriveFolderUploadOutlined } from '@mui/icons-material'

const NewGame = ({ addGames }) => {
  const [file, setFile] = useState('')
  const [formValues, setFormValues] = useState({
    name: '',
    url: '',
    gameCateory: '',
    creationDate: '',
    numberOfGames: '',
    gameconfigurations: '',
    location: '',
  })

  const nav = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    setFormValues({
      ...formValues,
      url: URL.createObjectURL(event.target.files[0]),
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      id: nanoid(),
      name: formValues.name,
      gameCateory: formValues.gameCateory,
      numberOfGames: formValues.numberOfGames,
      creationDate: formValues.creationDate,
      gameconfigurations: formValues.gameconfigurations,
      url: formValues.url,
    }
    localStorage.setItem('newGame', JSON.stringify(formData))

    addGames(formData)
    nav('/games')
  }

  return (
    <div className="new">
      <div className="new-container">
        <div className="new-title">Add New Game</div>
        <div className="new-content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Cateory</span>
                <input
                  name="gameCateory"
                  placeholder="Enter your Cateory"
                  required
                  value={formValues.gameCateory}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Creation Date</span>
                <input
                  type="date"
                  name="creationDate"
                  placeholder="Enter the date"
                  required
                  value={formValues.creationDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Live</span>
                <input
                  type="number"
                  name="numberOfGames"
                  placeholder="Enter number of games"
                  required
                  value={formValues.numberOfGames}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Configurations</span>
                <input
                  name="gameconfigurations"
                  placeholder="Enter Configurations"
                  required
                  value={formValues.gameconfigurations}
                  onChange={handleInputChange}
                />
              </div>

              <div className="image">
                <label htmlFor="file">
                  <DriveFolderUploadOutlined className="icon" />
                  <img
                    src={file ? URL.createObjectURL(file) : formValues.url}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default NewGame

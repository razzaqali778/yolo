import React, { useState } from 'react'

import { DriveFolderUploadOutlined } from '@mui/icons-material'
import './gamesTable.css'

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  setEditFormData,
}) => {
  const [file, setFile] = useState('')

  const handleFileChange = (event) => {
    setFile(event.target.files[0])

    setEditFormData({
      ...editFormData,
      url: URL.createObjectURL(event.target.files[0]),
    })
  }
  return (
    <>
      <tr key={editFormData.id}>
        <td className="people">
          <label htmlFor="file">
            <DriveFolderUploadOutlined />
            <input
              type="file"
              name="url"
              accept="image/*"
              src={file ? URL.createObjectURL(file) : editFormData.url}
              onChange={handleFileChange}
              className="file-upload"
              id="file"
            />
          </label>
          <div className="people-de">
            <input
              type="text"
              name="name"
              placeholder="Game Name"
              value={editFormData.name}
              onChange={handleEditFormChange}
            />
          </div>
        </td>
        <td className="people-des">
          <input
            type="text"
            name="gameCateory"
            placeholder="gameCateory"
            value={editFormData.gameCateory}
            onChange={handleEditFormChange}
          />
        </td>

        <td className="people-des">
          <input
            type="date"
            name="creationDate"
            placeholder="creationDate"
            value={editFormData.creationDate}
            onChange={handleEditFormChange}
          />
        </td>

        <td className="people-des">
          <input
            type="text"
            name="numberOfGames"
            placeholder="numberOfGames"
            value={editFormData.numberOfGames}
            onChange={handleEditFormChange}
          />
        </td>
        <td className="people-des">
          <input
            type="text"
            name="gameconfigurations"
            placeholder="gameconfigurations"
            value={editFormData.gameconfigurations}
            onChange={handleEditFormChange}
          />
        </td>

        <td className="edit1">
          <button onClick={handleCancelClick}>Cancel</button>
          <button type="submit">Save</button>
        </td>
      </tr>
    </>
  )
}

export default Editable

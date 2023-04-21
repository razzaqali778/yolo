import React, { useState } from 'react'
import './userTable.css'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

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
              name="fName"
              placeholder="First Name"
              value={editFormData.fName}
              onChange={handleEditFormChange}
            />
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              value={editFormData.lName}
              onChange={handleEditFormChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editFormData.email}
              onChange={handleEditFormChange}
            />
          </div>
        </td>
        <td className="people-des">
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={editFormData.profession}
            onChange={handleEditFormChange}
          />
        </td>
        <td className="people-des">
          <input
            type="text"
            name="Address"
            placeholder="Address"
            value={editFormData.Address}
            onChange={handleEditFormChange}
          />
        </td>
        <td className="role">
          <select
            name="status"
            value={editFormData.status}
            onChange={handleEditFormChange}
          >
            {' '}
            <option value="">Select Status</option>{' '}
            {['Approved', 'Pending'].map((status) => (
              <option
                key={status}
                value={status}
                selected={status === editFormData.status}
              >
                {' '}
                {status}{' '}
              </option>
            ))}{' '}
          </select>
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

import React, { useState } from 'react'
import './userTable.css'

import ReadyOnly from './ReadyOnly'
import Editable from './Editable'

const UserTable = ({ user, setUser }) => {
  const [editFormData, setEditFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    profession: '',
    Address: '',
    status: '',
    url: '',
  })

  const [editUserId, setEditUserId] = useState(null)

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
      id: editUserId,
      fName: editFormData.fName,
      lName: editFormData.lName,
      Address: editFormData.Address,
      email: editFormData.email,
      profession: editFormData.profession,
      status: editFormData.status,
      url: editFormData.url,
    }

    const newData = [...user]
    const index = user.findIndex((user) => user.id === editUserId)
    newData[index] = editedData
    setUser(newData)
    setEditUserId(null)
  }

  const handleEditClick = (event, user) => {
    event.preventDefault()
    setEditUserId(user.id)

    const formValues = {
      fName: user.fName,
      lName: user.lName,
      Address: user.Address,
      email: user.email,
      profession: user.profession,
      status: user.status,
      url: user.url,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditUserId(null)
  }

  const handleDeleteClick = (userId) => {
    const newData = [...user]
    const index = user.findIndex((u) => u.id === userId)
    newData.splice(index, 1)
    setUser(newData)
  }

  return (
    <>
      <div className="board">
        <form onSubmit={handleEditFormSubmit}>
          <table style={{ width: '100vw' }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Profession</td>
                <td>Address</td>
                <td>Account</td>
              </tr>
            </thead>
            <tbody>
              {user.map((data) => (
                <>
                  {editUserId === data.id ? (
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

export default UserTable

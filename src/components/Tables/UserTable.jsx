import React, { useState } from 'react'
import Table from './Table/Table'
const UserTable = ({ user, setUser }) => {
  const [editUserId, setEditUserId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    profession: '',
    address: '',
    status: '',
    url: '',
  })

  return (
    <Table
      data={user}
      setData={setUser}
      editFormData={editFormData}
      setEditFormData={setEditFormData}
      editdataId={editUserId}
      setEditdataId={setEditUserId}
      type="users"
    />
  )
}

export default UserTable

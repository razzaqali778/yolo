import React, { useState } from 'react'
import Table from './Table/Table'
const GameTable = ({ games, setGames }) => {
  const [editgamesId, setEditgamesId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    gameCateory: '',
    creationDate: '',
    location: '',
    numberOfGames: '',
    gameconfigurations: '',
    url: '',
  })
  return (
    <Table
      
      data={games}
      setData={setGames}
      editFormData={editFormData}
      setEditFormData={setEditFormData}
      editdataId={editgamesId}
      setEditdataId={setEditgamesId}
      type="games"
    />
  )
}

export default GameTable

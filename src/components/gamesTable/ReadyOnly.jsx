import React from 'react'
import './gamesTable.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const ReadyOnly = ({ data, handleDeleteClick, handleEditClick }) => {
  console.log(data.id)
  return (
    <>
      <tr key={data.id}>
        <td className="people">
          <img src={data.url} alt="" className="" />
          <div className="people-de">
            <h5>{data.name}</h5>
          </div>
        </td>
        <td className="people-des">
          <h5>{data.gameCateory}</h5>
        </td>
        <td className="people-des">
          <h5>{data.creationDate}</h5>
          {/* <p>{data.profession}</p> */}
        </td>
        {/* <td className="active">
                <p>Active</p>
              </td> */}
        <td className="role">
          <p>{data.numberOfGames}</p>
        </td>
        <td className="role">
          <p>{data.gameconfigurations}</p>
        </td>

        <td className="editD">
          <EditIcon onClick={(e) => handleEditClick(e, data)} />
        </td>
        <td className="editD">
          <DeleteIcon onClick={() => handleDeleteClick(data.id)} />
        </td>
      </tr>
    </>
  )
}

export default ReadyOnly

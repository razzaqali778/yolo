import React from 'react'
import './userTable.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useLocation } from 'react-router-dom'

const ReadOnly = ({ d, handleDeleteClick, handleEditClick, type }) => {
  const { pathname } = useLocation()
  return (
    <>
      <tr key={d.id}>
        <td className="people">
          <img src={d.url} alt="" className="" />
          <div className="people-de">
            {type === 'users' ? (
              <>
                <h5>
                  {d.fName}&nbsp;
                  {d.lName}
                </h5>
                <p>{d.email}</p>
              </>
            ) : (
              <h5>{d.name}</h5>
            )}
          </div>
        </td>
        <td className="people-des">
          {type === 'users' ? (
            <h5>{d.profession}</h5>
          ) : (
            <h5>{d.gameCateory}</h5>
          )}
        </td>
        <td className="people-des">
          {type === 'users' ? <h5>{d.address}</h5> : <h5>{d.creationDate}</h5>}
        </td>

        <td className="role">
          {type === 'users' ? (
            <p className={`status ${d.status}`}>{d.status}</p>
          ) : (
            <h5>{d.numberOfGames}</h5>
          )}
        </td>
        {type === 'games' && (
          <td className="role">
            <p>{d.gameconfigurations}</p>
          </td>
        )}
        {pathname === '/' ? (
          ''
        ) : (
          <>
            <td className="editD">
              <EditIcon onClick={(e) => handleEditClick(e, d)} />
            </td>
            <td className="editD">
              <DeleteIcon onClick={() => handleDeleteClick(d.id)} />
            </td>
          </>
        )}
      </tr>
    </>
  )
}

export default ReadOnly

import React from 'react'
import './userTable.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const ReadyOnly = ({ data, handleDeleteClick, handleEditClick }) => {
  return (
    <>
      <tr key={data.id}>
        <td className="people">
          <img src={data.url} alt="" className="" />
          <div className="people-de">
            <h5>
              {data.fName}&nbsp;
              {data.lName}
            </h5>
            <p>{data.email}</p>
          </div>
        </td>
        <td className="people-des">
          <h5>{data.profession}</h5>
        </td>
        <td className="people-des">
          <h5>{data.Address}</h5>
        </td>

        <td className="role">
          <p className={`status ${data.status}`}>{data.status}</p>
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

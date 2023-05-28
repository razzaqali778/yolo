import React from 'react'
import './table.css'

const Table = ({ user, games }) => {
  return (
    <div className="board">
      {games && (
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Catagory</td>
              <td>Craeted</td>
              <td>Location</td>
              <td>Live</td>
            </tr>
          </thead>
          <tbody>
            {games.map((data) => (
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
                  <p>{data.location}</p>
                </td>
                <td className="role">
                  <p>{data.numberOfGames}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {user && (
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
                  {/* <p>{data.profession}</p> */}
                </td>
                {/* <td className="active">
                <p>Active</p>
              </td> */}
                <td className="role">
                  <p className={`status ${data.status}`}>{data.status}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table

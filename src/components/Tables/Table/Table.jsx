import Editable from './Editable'
import ReadOnly from './ReadOnly'
import './table.css'

const Table = ({
  data,
  setData,
  editFormData,
  setEditFormData,
  editdataId,
  setEditdataId,
  type,
}) => {
  const handleEditFormChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target

    const newFormData = { ...editFormData }
    newFormData[name] = value
    setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedData = {
      id: editdataId,
      ...editFormData,
    }

    const newData = [...data]
    const index = data.findIndex((d) => d.id === editdataId)
    newData[index] = editedData
    setData(newData)
    setEditdataId(null)
  }

  const handleEditClick = (event, data) => {
    event.preventDefault()
    setEditdataId(data.id)

    const formValues = {
      ...data,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditdataId(null)
  }

  const handleDeleteClick = (dataId) => {
    const newData = [...data]
    const index = data.findIndex((d) => d.id === dataId)
    newData.splice(index, 1)
    setData(newData)
  }

  return (
    <>
      <div className="board">
        <form onSubmit={handleEditFormSubmit}>
          <table style={{ width: '100vw' }}>
            <thead>
              {type === 'users' ? (
                <tr>
                  <td>Name</td>
                  <td>Profession</td>
                  <td>Address</td>
                  <td>Account</td>
                </tr>
              ) : (
                <tr>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Date</td>
                  <td>Live</td>
                  <td>Configuration</td>
                </tr>
              )}
            </thead>
            <tbody>
              {data.map((d) => (
                <>
                  {editdataId === d.id ? (
                    <Editable
                      key={d.id}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                      setEditFormData={setEditFormData}
                      type={type}
                    />
                  ) : (
                    <ReadOnly
                      key={d.id}
                      d={d}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      type={type}
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

export default Table

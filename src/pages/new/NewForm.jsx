import React, { useState } from 'react'
import './newForm.css'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const NewForm = ({ formFields, addData, formType }) => {
  const [file, setFile] = useState('')

  const [formValues, setFormValues] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || ''
      return acc
    }, {})
  )

  const nav = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    setFormValues({
      ...formValues,
      url: URL.createObjectURL(event.target.files[0]),
    })
  }
  const handleRadioChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      id: nanoid(),
      ...formValues,
    }
    console.log(formData)
    addData(formData)
    localStorage.setItem(formType, JSON.stringify(formData))
    nav(`/${formType}s`) // Assuming the plural form of the formType is used in the URL
  }

  return (
    <div className="new">
      <div className="new-container">
        <div className="new-title">Add New {formType}</div>
        <div className="new-content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              {formFields.map((field) => (
                <div className="input-box" key={field.name}>
                  <span className="details">{field.label}</span>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formValues[field.name]}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formValues[field.name]}
                      onChange={handleInputChange}
                    />
                  )}

                  {field.type === 'radio' ? (
                    <div className="s-details">
                      <input
                        type="radio"
                        name="status"
                        id="dot-1"
                        value="Approved"
                        checked={formValues.status === 'Approved'}
                        onChange={handleRadioChange}
                      />
                      <input
                        input
                        type="radio"
                        name="status"
                        id="dot-2"
                        value="Pending"
                        checked={formValues.status === 'Pending'}
                        onChange={handleRadioChange}
                      />
                      <span className="s-title">status</span>
                      <div className="category">
                        <label htmlFor="dot-1">
                          <span className="dot one"></span>
                          <span className="s">Approved</span>
                        </label>
                        <label htmlFor="dot-2">
                          <span className="dot two"></span>
                          <span className="s">Pending</span>
                        </label>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}

              <div className="image">
                <label htmlFor="file">
                  <DriveFolderUploadOutlined className="icon" />
                  <img
                    src={file ? URL.createObjectURL(file) : formValues.url}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewForm

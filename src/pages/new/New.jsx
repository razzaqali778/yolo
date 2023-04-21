import React, { useState } from 'react'

import './new.css'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

import { DriveFolderUploadOutlined } from '@mui/icons-material'

const New = ({ addData }) => {
  const [file, setFile] = useState('')
  const [formValues, setFormValues] = useState({
    fName: '',
    lName: '',
    email: '',
    profession: '',
    Address: '',
    status: '',
    url: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
  })

  const nav = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleRadioChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])

    // Set formvalues.url state with the URL of the selected image file
    setFormValues({
      ...formValues,
      url: URL.createObjectURL(event.target.files[0]),
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      id: nanoid(),
      fName: formValues.fName,
      lName: formValues.lName,
      email: formValues.email,
      profession: formValues.profession,
      Address: formValues.Address,
      status: formValues.status,
      url: formValues.url,
    }
    localStorage.setItem('newUser', JSON.stringify(formData))
    // console.log(formData)
    addData(formData)
    nav('/users')
  }

  return (
    <div className="new">
      <div className="new-container">
        <div className="new-title">Add New User</div>
        <div className="new-content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  name="fName"
                  placeholder="Enter your first name"
                  required
                  value={formValues.fName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  name="lName"
                  placeholder="Enter your last name"
                  required
                  value={formValues.lName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">profession</span>
                <input
                  type="text"
                  name="profession"
                  placeholder="Enter your profession"
                  required
                  value={formValues.profession}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <textarea
                  name="Address"
                  placeholder="Enter your Address"
                  required
                  value={formValues.Address}
                  onChange={handleInputChange}
                />
              </div>

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
            <div className="button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default New

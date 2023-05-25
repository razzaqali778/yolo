import React, { useState } from 'react'
import './list.css'

import { Sidebar, Navbar, UserTable } from '../../components/index'
import { Link } from 'react-router-dom'

const List = ({ user, setUser }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCriteria, setSearchCriteria] = useState('')

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value)
    setSearchQuery('')
  }

  const search = () => {
    const filteredUsers = user.filter((item) => {
      switch (searchCriteria) {
        case 'name':
          return (
            item.fName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        case 'email':
          return item.email.toLowerCase().includes(searchQuery.toLowerCase())
        default:
          return item.status.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })

    return filteredUsers
  }

  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <hr />

        <div className="filter-btn">
          <div className="filterItem">
            <span>Filter By</span>
            <select onChange={handleCriteriaChange}>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="status">Status</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              value={searchQuery}
            />
          </div>

          <div className="top">
            <Link to="./New">
              <button className="addBtn">Add Users</button>
            </Link>
          </div>
        </div>
        <div className="uTable">
          <UserTable user={search(user)} setUser={setUser} />
        </div>
      </div>
    </div>
  )
}

export default List

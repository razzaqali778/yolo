import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { UserTable, Loading } from '../../components/index'
import './list.css'

const List = ({ user, setUser }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCriteria, setSearchCriteria] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) return <Loading />

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
        case 'status':
          return item.status.toLowerCase().includes(searchQuery.toLowerCase())
        case 'email':
          return item.email.toLowerCase().includes(searchQuery.toLowerCase())
        default:
          return (
            item.fName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lName.toLowerCase().includes(searchQuery.toLowerCase())
          )
      }
    })

    return filteredUsers
  }

  return (
    <>
      <div className="filter-btn">
        <div className="filterItem">
          <span>Filter</span>
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
          <Link to="./new_user">
            <button className="addBtn">Add Users</button>
          </Link>
        </div>
      </div>
      <div className="uTable">
        <UserTable user={search(user)} setUser={setUser} />
      </div>
    </>
  )
}

export default List

import React from 'react'
import './newList.css'

import { Sidebar, Navbar } from '../../components/index'

import New from './New'

const AddUser = ({ addData }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="container-new">
        <Navbar />
        <hr />
        <div className="aTable">
          <New addData={addData} />
        </div>
      </div>
    </div>
  )
}

export default AddUser

import { useEffect, useState } from 'react'
import NewForm from './NewForm'
import { Loading } from '../../components/index'

const NewUser = ({ addData }) => {
  const [loading, setLoading] = useState(true)
  const formFields = [
    {
      name: 'fName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      required: true,
    },
    {
      name: 'lName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'profession',
      label: 'Profession',
      type: 'text',
      placeholder: 'Enter your profession',
      required: true,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      placeholder: 'Enter your Address',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'radio',
      options: ['Approved', 'Pending'],
      required: true,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) return <Loading />
  return <NewForm formFields={formFields} addData={addData} formType="user" />
}

export default NewUser

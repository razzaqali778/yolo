import NewForm from './NewForm'

const NewUser = ({ addData }) => {
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

  return <NewForm formFields={formFields} addData={addData} formType="user" />
}

export default NewUser

import NewForm from './NewForm'

const NewGame = ({ addGames }) => {
  const formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your Name',
      required: true,
    },
    {
      name: 'gameCateory',
      label: 'Category',
      type: 'text',
      placeholder: 'Enter your Category',
      required: true,
    },
    {
      name: 'creationDate',
      label: 'Creation Date',
      type: 'date',
      placeholder: 'Enter the date',
      required: true,
    },
    {
      name: 'numberOfGames',
      label: 'Number of Games',
      type: 'number',
      placeholder: 'Enter number of games',
      required: true,
    },
    {
      name: 'gameconfigurations',
      label: 'Configurations',
      type: 'text',
      placeholder: 'Enter Configurations',
      required: true,
    },
  ]

  return <NewForm formFields={formFields} addData={addGames} formType="game" />
}

export default NewGame

import { useEffect, useState } from 'react'

import { Home, List, GameList, Addgame, AddUser } from './pages/index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import userData from './assets/users/profiles'
import gameData from './assets/games/games'

function App() {
  const [user, setUser] = useState(userData)
  const [games, setGames] = useState(gameData)

  const addData = (data) => {
    const newUser = [data, ...user]
    setUser(newUser)
  }

  const addGames = (data) => {
    const newg = [data, ...games]
    setGames(newg)
  }
  console.log(games)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home user={user} />,
    },

    {
      path: '/users',
      element: <List user={user} setUser={setUser} />,
    },

    {
      path: 'users/new',
      element: <AddUser addData={addData} />,
    },

    {
      path: '/games',
      element: <GameList games={games} setGames={setGames} />,
    },

    {
      path: 'games/newGame',
      element: <Addgame addGames={addGames} />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

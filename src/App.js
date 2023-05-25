import { useEffect, useState } from 'react'

import { Home, List, GameList, Addgame, AddUser } from './pages/index'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import userData from './assets/users/profiles'
import gameData from './assets/games/games'
import Loading from './components/loading/Loading'

function App() {
  const [user, setUser] = useState(userData)
  const [games, setGames] = useState(gameData)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <Loading />

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

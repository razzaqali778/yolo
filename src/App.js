import { useEffect, useState } from 'react'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import userData from './assets/users/profiles'
import gameData from './assets/games/games'
import Loading from './components/loading/Loading'

import { Home, List, GameList, NewGame, NewUser } from './pages/index'
import { Navbar, Sidebar } from './components'

import './App.css'

function App() {
  const [user, setUser] = useState(userData)
  const [games, setGames] = useState(gameData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  if (loading) return <Loading />

  const addUser = (data) => {
    const newUser = [data, ...user]
    setUser(newUser)
  }
  console.log(user)

  const addGames = (data) => {
    const newg = [data, ...games]
    setGames(newg)
  }
  console.log(games)

  const Layout = () => {
    return (
      <>
        <div className="app">
          <Sidebar />
          <div className="appContainer">
            <Navbar />
            <hr />
            <Outlet />
          </div>
        </div>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',

          element: <Home user={user} games={games} />,
        },

        {
          path: '/users',

          element: <List user={user} setUser={setUser} />,
        },

        {
          path: '/games',
          element: <GameList games={games} setGames={setGames} />,
        },

        {
          path: 'users/new_user',
          element: <NewUser addData={addUser} />,
        },

        {
          path: 'games/new_game',
          element: <NewGame addGames={addGames} />,
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

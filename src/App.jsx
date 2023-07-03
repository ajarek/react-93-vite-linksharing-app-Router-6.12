import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Links from './pages/Links/Links'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import Preview from './pages/Preview/Preview'

import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Links />,
        errorElement: <Error />,
      },
      {
        path: '/profile-details',
        element: <ProfileDetails />,
        errorElement: <Error />,
      },
      {
        path: '/preview',
        element: <Preview />,
        errorElement: <Error />,
      },
    ],
  },
])
function App() {
  const [data, setData] = useState([])
  const [newUser, setNewUser] = useState(null)
  const [counter, setCounter] = useState(0)
  return (
    <div className='App'>
      <AppContext.Provider
        value={{ data, setData, newUser, setNewUser, counter, setCounter }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App

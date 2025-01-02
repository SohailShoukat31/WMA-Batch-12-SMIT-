import './App.css'

import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'




import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/About",
      element: <><Navbar /><About /></>
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/Login",
      element: <><Navbar /><Login/></>
    },
  

    
  
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App

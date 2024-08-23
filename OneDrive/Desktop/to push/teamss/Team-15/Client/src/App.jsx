import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home' ; 
import Login from './Components/Login' ; 
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function App() {
  const  router = createBrowserRouter(
   [ {path: '/', element: <Home />}, 
    {path: '/home', element: <Home />},
    {path: '/login', element: <Login />},
    
  ]
  ) ;

  return (
    <>
    
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App

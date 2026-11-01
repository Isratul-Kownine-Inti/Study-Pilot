import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/homepage/Homepage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Features from './pages/Features/Features'
import MainLayOut from './layout/MainLayOut'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/features",
    element: <Features></Features>
  },
   
  {
    path:"log-in",
    element:<Login></Login>
  },
  {
    path:"sign-up",
    element:<SignUp></SignUp>
  }
      
]
  },

     {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
  


 

 
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

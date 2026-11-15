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
 import { ToastContainer } from 'react-toastify';
import AuthContext from './context/AuthContext'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Private from './pages/Private/Private'


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
  },
  {
    path:"/private",
    element: <PrivateRoute>
        <Private></Private>
    </PrivateRoute>
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
    <AuthContext>
        <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
    </AuthContext>
  
  </StrictMode>,
)

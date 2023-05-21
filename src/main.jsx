import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/LayOut/Main.jsx';
import Home from './components/Home/Home.jsx';
import AllToy from './components/AllToy/AllToy';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import AuthProvider from './components/Providers/AuthProvider';
import Registration from './components/Registration/Registration';
import AddAToy from './components/AddAToy/AddAToy';
import MyToys from './components/MyToys/MyToys';
import PrivateRoute from './components/Route/PrivateRoute';
import Details from './components/Details/Details';
import Update from './components/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'alltoy',
        element:<AllToy></AllToy>
        
      },
    
      {
        path:'addatoy',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'registration',
        element:<Registration></Registration>
      },
      {
        path:'productDetails/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-box-server-topaz.vercel.app/productDetails/${params.id}`)
     
      },
      {
        path:'myToyUpdate/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://toy-box-server-topaz.vercel.app/myToyUpdate/${params.id}`)

      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)

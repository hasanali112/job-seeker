import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Applied from './Component/Applied.jsx';
import Blog from './Component/Blog.jsx';
import Statistic from './Component/Statistic.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'applied',
        element: <Applied></Applied>
      },
      {
        path:'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistic',
        element: <Statistic></Statistic>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

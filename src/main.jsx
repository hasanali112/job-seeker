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
import Jobdetail from './Component/Jobdetail.jsx';
import jobCardLoader from './Loader/gateloader.js';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
       
      },
      {
        path: 'job/:id',
        element:<Jobdetail></Jobdetail>,
        loader: ()=> fetch('/featurejob.json')
      },
      {
        path:'applied',
        element: <Applied></Applied>,
        loader: jobCardLoader
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

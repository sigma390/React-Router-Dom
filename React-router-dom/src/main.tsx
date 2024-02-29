import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import { About } from './Components/About/About.tsx'
import Home from './Components/Home/Home.tsx'
import { Contact } from './Components/Contact/Contact.tsx'


const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>, //parent element
  children:[{
    path:'',
    element:<Home/>

  },{
    path:'about',
    element:<About/>

  },{
    path:'/contact',
    element:<Contact/>
  }]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

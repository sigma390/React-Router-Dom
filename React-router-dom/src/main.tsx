import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router/dist/lib/components'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Outlet } from 'react-router'

export const Layout= () => {
  return (
    <>
        <Header/>
        <Outlet/> //upar aur niche 
        ki do cheeze same rahegi 
        Outlet change hota rahega
        <Footer/>
    </>
  )
}

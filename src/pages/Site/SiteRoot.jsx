import React from 'react'
import Header from '../../layout/Site/Header/Header'
import Foter from '../../layout/Site/Footer/Foter'
import { Outlet } from 'react-router'

function SiteRoot() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Foter/>
      
    </div>
  )
}

export default SiteRoot

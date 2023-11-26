import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <header>
      <div className="header__right">
        <h1>Product</h1>
        
      </div>
      <div className="lefterr">
      <Link  to="/">Home</Link>
      <Link to="favourites">Fav</Link>
      <Link to="admin">Admin</Link>

      </div>

    </header>
    </div>
  )
}

export default Header

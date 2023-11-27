import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
  <header className='header'>
  <div className="righter">
  <Link to="/admin">  <h1>AdminPage</h1></Link>
  </div>
  <div className="lefter">

  <Link to="/">Home</Link>
  <Link to="addproducts">Add Product</Link>
  </div>
  </header>
    </div>
  )
}

export default Header

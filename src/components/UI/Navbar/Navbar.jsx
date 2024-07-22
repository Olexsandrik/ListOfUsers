import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__links">
            <Link to="/about">Про нас</Link>
            <Link to="/posts">Пости</Link>
        </div>
    </div>
  )
}

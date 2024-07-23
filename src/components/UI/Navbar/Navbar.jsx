import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { AuthContext } from '../../../context'
export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login= ()=>{
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
   return (
    <div className="navbar">
          <Button onClick={login}>Ввийти</Button>
        <div className="navbar__links">
          
            <Link to="/about">Про нас</Link>
            <Link to="/posts">Пости</Link>
        </div>
    </div>
  )
}

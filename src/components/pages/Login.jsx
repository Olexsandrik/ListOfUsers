import React, { useContext } from 'react'
import { MyInput } from '../UI/Input/MyInput'
import { Button } from '../UI/Button/Button'
import { AuthContext } from '../../context'

export const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (event) =>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
         
    }
  return (
    <form onSubmit={login}>
        <h1>Меню для ввходу користувача</h1>
        <MyInput type="text" placeholder="Введіть логін"/>
        <MyInput type="password"  placeholder="Введіть пароль"/>
        <Button>Ввійти</Button>
    </form>
  )
}

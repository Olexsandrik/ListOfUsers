import React, { useContext } from 'react';
import { Navbar } from './UI/Navbar/Navbar';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/route';
import { AuthContext } from '../context';

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  
  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <Routes>
        {isAuth
          ? privateRoutes.map(route => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))
          : publicRoutes.map(route => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
  
        <Route path="*" element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from 'react';
import { Navbar } from './UI/Navbar/Navbar';
import { Route,BrowserRouter,Routes} from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';


export const AppRouter = () => {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts/>}/>
                <Route path="*" element={<About/>}/> 
            </Routes>
        </BrowserRouter>
  )
}

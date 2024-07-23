import React from 'react';
import { Navbar } from './UI/Navbar/Navbar';
import { Route,BrowserRouter,Routes} from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { PostIdMain } from './pages/PostIdMain';
import { Error } from './pages/Error';


export const AppRouter = () => {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts/>}/>
                <Route path='/posts/:id' element={<PostIdMain/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
        </BrowserRouter>
  )
}

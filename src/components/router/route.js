
import { About } from "../pages/About"
import { Posts } from "../pages/Posts"
import { PostIdMain } from "../pages/PostIdMain"
import { Error } from "../pages/Error"
import { Login } from "../pages/Login"


export const privateRoutes = [
    { path: '/posts', element: <Posts /> },
    { path: '/about', element: <About /> },
    { path: '/posts/:id', element: <PostIdMain /> },
  
  ];


  
export const publicRoutes=[
    {path: '/login', element: <Login/>}
    
    
]
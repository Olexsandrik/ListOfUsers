import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";
import './css/App.css';
function App() {
  const[isAuth, setIsAuth] = useState(false);


  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  },[])
  return (
    <AuthContext.Provider
    value={{
      isAuth,
      setIsAuth
    }}
    >
       <AppRouter/>
    </AuthContext.Provider>
    
   

        

 
  );
}

export default App;

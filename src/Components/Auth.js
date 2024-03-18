import React from 'react'
import { useState,useContext } from 'react';



const AuthContext = React.createContext()

const Auth = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const login = (token) => {
        setIsLoggedIn(true);
        setToken(token);
        sessionStorage.setItem('isLoggedIn', true);
        localStorage.setItem('token', token);
  }
  const logout = () => {
    setIsLoggedIn(false);
    setToken('');
    sessionStorage.removeItem('isLoggedIn', false);
    localStorage.removeItem('token');
  }
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout,token}}>
        {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
export default Auth;

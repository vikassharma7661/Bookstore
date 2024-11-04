import React, { useContext, useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const initialAuth = localStorage.getItem("user")  
    const [authUser,setAuthUser]= useState(
        initialAuth ? JSON.parse(initialAuth) : undefined
    )    
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth =()=> useContext(AuthContext)

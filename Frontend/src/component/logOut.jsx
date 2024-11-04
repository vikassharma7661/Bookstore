import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function LogOut() {
    const [ authUser,setAuthUser]=useAuth()
    const handleLogout =()=>{
       try {
        setAuthUser({
            ...authUser,
            user : null
       })
       localStorage.removeItem('user')
       toast.success("Logout Successfully Done!")
       setTimeout(() => {
        window.location.reload()

      }, 2000);
       } catch (error) {
        toast.error("Error:", error)
       } 
    }
  return (
    <div>
    <button className='px-2 py-2 bg-red-500 rounded-md text-white cursor-pointer' onClick={handleLogout}>logOut</button>
    </div>
  )
}

export default LogOut
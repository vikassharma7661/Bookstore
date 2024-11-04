import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Courses from './Courses/Courses';
import Signup from './component/Signup';
import Contect from './Contectus/Contect';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './About/About';

function App() {
  const [authUser,setAuthUser]=useAuth()
console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white  ">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={authUser?<Courses/>: <Navigate to={'/signup'}/>}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/contectus' element={ <Contect/>}/>
          <Route path='/about' element={ <About/>}/>

        </Routes>
        <Toaster />
        </div>
    </>
  );
}

export default App;

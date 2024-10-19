import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Courses from './Courses/Courses';
import Signup from './component/Signup';
import Contect from './Contectus/Contect';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={<Courses/>}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/contectus' element={ <Contect/>}/>

        </Routes>
   
    </>
  );
}

export default App;

import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/Footer';

function Contect() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gray-50">
        {/* Adjusted width and height */}
        <div className='border border-gray-200 shadow-lg duration-200 rounded-lg w-full max-w-lg h-auto p-8 bg-white'>
          <h1 className='text-4xl font-bold text-blue-600 mb-6 text-center'>Contact Us</h1>

          
          <div className='flex flex-col mb-4'>
            <label className='text-lg font-semibold mb-1'>Name</label>
            <input 
              type="text" 
              placeholder='Enter your name'  
              className='bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full'
            />
          </div>

         
          <div className='flex flex-col mb-4'>
            <label className='text-lg font-semibold mb-1'>Email</label>
            <input 
              type="email" 
              placeholder='Enter your email'  
              className='bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full'
            />
          </div>

         
          <div className='flex flex-col mb-6'>
            <label className='text-lg font-semibold mb-1'>Message</label>
            <textarea 
              placeholder='Enter your message'  
              className='bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full h-32 resize-none'
            ></textarea>
          </div>

        
          <div className="flex justify-center">
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-md transition duration-200'>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contect;

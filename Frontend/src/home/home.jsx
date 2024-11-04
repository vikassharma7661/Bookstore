import React from 'react'
import Navbar from '../component/navbar'
import Banner from '../component/banner'
import FreeBooks from '../component/FreeBooks'
import Footer from '../component/Footer'

function Home() {
  return (
   <>
     <div className="dark:bg-slate-900 dark:text-white  ">
    <Navbar/>
  <Banner/>
  <FreeBooks/>
  <Footer/>
   </div>
   
   </>
  )
}

export default Home
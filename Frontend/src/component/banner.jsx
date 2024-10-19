import React from 'react'
import bannerimg from '../../public/banner.png'
function Banner() {
  return (
<>
          <div className='w-full mx-auto  flex flex-col md:flex-row px-4 my-10'>
         <div className=" md:px-16 md:mt-40 mt-12 md:left md:w-1/2 w-1/1  md:order-1 order-2">
         <div className='space-y-11'> 
          <h1 className='text-5xl font-bold '>Hello, welcome here to learn something <span className='text-pink-500'> new everyday</span></h1>
          <p className='text-2xl'>A bookstore offers fiction, non-fiction, novels, poetry, journals, and magazines, providing readers endless knowledge and storytelling adventures.</p>
          
          <label className="input input-bordered flex items-center gap-2 bg-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 dark:bg-slate-900">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow   dark:text-black" placeholder="Email your email" />
</label>
<button className='btn btn-secondary text-lg text-white '>Submit</button>
         </div>
        
         
         </div>
          <div className=" md:px-16 md:right md:w-1/2 md:order-2 px-5">
          <img src={bannerimg} className='w-full' alt="bananer not found" />
          
          </div>
          </div>
          
</>
  )
}

export default Banner;
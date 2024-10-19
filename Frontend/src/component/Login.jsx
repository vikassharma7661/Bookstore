import React from 'react'
import { Link } from 'react-router-dom'
 import {useForm} from 'react-hook-form'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
        <dialog id="my_modal_3" className="modal bg-transparent">
  <div className="modal-box bg-white">

    <form  onSubmit={handleSubmit(onSubmit)}>

    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> 
    <h3 className="flex justify-start">Login</h3>
    <div className='flex justify-start flex-col text-left pt-3 py-3'>
    <span>
   Email
   </span>
   <br />
   <input type="email" placeholder='Enter Your Email' className='bg-white p-2 outline-none' 
{...register("email", { required: true })}   />
 {errors.email && <span className='text-red-600' >Email is required</span>}
    </div>
    <div className='flex justify-start flex-col text-left pt-3 py-3 '>
    <span>
   Password
   </span>
   <br />
   <input type="password" placeholder='Enter Your Password' className='bg-white p-2 outline-none' 
{...register("password", { required: true })}
   />
    {errors.password && <span  className='text-red-600' >Password is required</span>}
    </div>
    <div className='flex justify-around  pt-3 py-3'>
      <button className=' bg-pink-500 hover:bg-pink-800 btn  rounded text-white '>Login</button>   
      <p className='pt-3'>If Not register <Link to='/signup' className='underline text-blue-500 cursor-pointer '>Sign up</Link></p>
    </div>
    </form >
  </div>
</dialog>

  )
}

export default Login
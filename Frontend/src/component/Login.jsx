import React from 'react'
import { Link } from 'react-router-dom'
 import {useForm} from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    await axios
      .post('http://localhost:4001/user/login', userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data.user)); 
          toast.success("Login successfully");
          document.getElementById("my_modal_3").close()
          setTimeout(() => {
            window.location.reload()

          }, 1000);
        } 
      })

      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          toast.error("error: " + err.response.data.message);
        } else {
          alert("An unknown error occurred");
        }
      });
  };
    return (
        <dialog id="my_modal_3" className="modal bg-transparent">
  <div className="modal-box bg-white">
    <form  onSubmit={handleSubmit(onSubmit)}>
    <Link 
    to='/' 
    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
     onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link> 
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
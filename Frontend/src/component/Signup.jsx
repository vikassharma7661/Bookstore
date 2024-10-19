import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
      <div className="modal modal-open flex justify-center items-center">
        <div className="modal-box bg-white relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="flex justify-start text-2xl font-bold">Signup</h3>

            <div className="flex justify-start flex-col text-left pt-3 py-3">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-white p-2 outline-none w-full border border-gray-300 rounded-md mt-1"
                {...register("name", { required: true })}   
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>

            <div className="flex justify-start flex-col text-left pt-3 py-3">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white p-2 outline-none w-full border border-gray-300 rounded-md mt-1"
                {...register("email", { required: true })}   
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>

            {/* Password input */}
            <div className="flex justify-start flex-col text-left pt-3 py-3">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="bg-white p-2 outline-none w-full border border-gray-300 rounded-md mt-1"
                {...register("password", { required: true })}   
              />
              {errors.password && <span className="text-red-600">Password is required</span>}
            </div>

            {/* Signup Button */}
            <div className="flex justify-between items-center pt-3 py-3">
              <button type="submit" className="bg-pink-500 hover:bg-pink-800 btn rounded text-white">
                Signup
              </button>

              {/* Login Link and Modal Trigger */}
              <div className="pt-3">
                Already registered?{' '}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

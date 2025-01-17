import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className = "w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className='lable p-2'>
                        <span className='text-base label-text text-gray-400'>Full Name</span>
                    </label>
                    <input type="text" placeholder="Aiman Rasool" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-400'>Username</span>
                    </label>
                    <input type="text" placeholder="aiman" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text  text-gray-400'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text  text-gray-400'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
                </div>

                <GenderCheckbox/>
                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2  inline-block'>
                    Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                </div>
            </form>

            </div>
    </div>
  )
}

export default SignUp
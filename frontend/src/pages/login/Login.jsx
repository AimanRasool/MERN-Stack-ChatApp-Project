import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className = "w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className='lable p-2'>
                        <span className='text-base label-text text-gray-400'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-400'>Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                </div>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>

        </div>
    </div>
  );
};

export default Login;
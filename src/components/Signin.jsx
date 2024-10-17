import React from 'react'
import emailIcon from '../assets/email.svg'
import lockIcon from '../assets/lock.svg'
import openEyeIcon from '../assets/openEye.svg'

const Signin = () => {


  return (
    <div className="mx-4 md:container md:w-[600px] md:mx-auto my-6 rounded-xl  bg-violet-200 min-h-[60vh] max-w-xl border-1 shadow-md">
      <div className='flex flex-row '>
        <aside className='p-4 m-4  flex flex-col justify-center items-center md:w-[400px] min-h-[60vh] max-w-xl'>
          <h2 className='font-bold'>Hello!</h2>
          <p>Sign in to your account</p>

          {/* E-mail Input */}
          <div className="w-80 flex items-center my-2 p-2 space-x-4 bg-white border-2 rounded-2xl shadow-sm">
            <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
            <input
              type="email"
              placeholder="E-mail"
              className="text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          <div className='w-80 flex items-center justify-between my-2 p-2 space-x-4 bg-white border-2 rounded-2xl shadow-sm'>
            <div className='flex space-x-4'>
              <img src={lockIcon} alt="Lock Icon" className='w-6 h-6' />
              <input
                type="password"
                placeholder='Password'
                className='text-gray-700 placeholder-gray-400 bg-transparent outline-none'
              />
            </div>
            <img src={openEyeIcon} alt="open Eye Icon" />
          </div>

          <div className='flex justify-between gap-16 '>
            <div>
              <input type="checkbox" name="" id="" />
              Remember me
            </div>
            <a href="#" className="text-purple-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button type="submit" className='rounded-3xl bg-violet-500 px-4 py-1 m-2 w-[92px] text-center'>Sign In</button>
          <div>Don't have an account? <a href="#" className="text-purple-500 hover:underline">Create</a></div>
        </aside>

        <aside className='p-2 flex flex-col justify-center items-center rounded-xl border-1 shadow-sm bg-violet-500 md:w-[200px] min-h-[60vh] max-w-xl'>
          <h2 className='p-2 font-bold'>Hello</h2>
          <div className='p-2'>Lorem ipsum dolor sit amet consectetur ad ipisicing elit.</div>
        </aside>
      </div>
    </div>
  )
}

export default Signin



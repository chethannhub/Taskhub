import React from 'react'
import Signin from './Signin'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className='p-2 bg-indigo-700 flex justify-around text-white'>
                <div className='logo'>
                    <span className='font-bold'>iTask</span>
                </div>
                <ul className='flex gap-8'>
                    <NavLink className='cursor-pointer hover:font-semibold' to="/"><li>Home</li></NavLink>
                    <NavLink className='cursor-pointer hover:font-semibold' to="/tasks"><li>Your Tasks</li></NavLink>
                    <NavLink className='cursor-pointer hover:font-semibold' to="/signin"><li>SignIn</li></NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
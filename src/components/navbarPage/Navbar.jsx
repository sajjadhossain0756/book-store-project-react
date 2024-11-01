import React from 'react'
import { NavLink } from 'react-router-dom'


const navbarItem =
    <>
    <NavLink to='/' className="mr-4"><li ><a >Home</a></li></NavLink>
    <NavLink to='listed-book' className="mr-4"><li><a>Listed Book</a></li></NavLink>
    <NavLink to='pages-to-read' className=""><li><a>Pages To Read</a></li></NavLink>
    </>
    


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navbarItem}
      </ul>
    </div>
    <a className=" text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navbarItem}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className='btn bg-[#59C6D2] text-white'>Sign Up</a>
  </div>
</div>
  )
}

export default Navbar
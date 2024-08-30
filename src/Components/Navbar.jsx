import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-28 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl h-20 hover:bg-transparent p-0">
          <img src="/Asset 2-100.png" className="h-full" />
          <h2 className="font-[forum] text-[#03045E]">SILICON OVERSEAS LTD.</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]"
              to="/"
              duration={2000}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]"
              to="about"
              duration={2000}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]"
              to="services"
              duration={2000}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <a className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]">
              OUR CLIENTS
            </a>
          </li>
          <li>
            <a className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]">
              GALLERY
            </a>
          </li>
          <li>
            <a className="font-[lato] hover:bg-transparent hover:text-[#90E0EF] transition-colors duration-200 text-[#03045E] text-[15px]">
              GET IN TOUCH
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar

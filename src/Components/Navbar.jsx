import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-20 px-5">
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
          <img src="/Asset 2-100.png" className="h-10" />
          <h2 className="font-[lato] text-2xl font-semibold text-[#03045E]">
            SILICON OVERSEAS LTD.
          </h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 font-bold">
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <a
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              OUR CLIENTS
            </a>
          </li>
          <li>
            <a
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] no-underline text-[15px] decoration-[3px] "
              to="/"
              duration={2000}
            >
              GET IN TOUCH
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

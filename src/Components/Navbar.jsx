import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeNavbar = () => {
    if (scrollY >= 300) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  addEventListener("scroll", changeNavbar)
  return (
    <div
      className={
        navbar
          ? "navbar bg-base-100 md:h-20 h-26 md:px-5 fixed top-0 z-50 animate-gorgeous shadow-lg p-2 w-screen"
          : "navbar bg-base-100 md:h-20 h-26 md:px-5 p-2"
      }
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl h-20 hover:bg-transparent p-0">
          <img src="/Asset 2-100.png" className="h-16 md:h-10" />
          <h2 className="font-[lato] text-lg md:text-2xl font-semibold text-[#03045E]">
            SILICON OVERSEAS LTD.
          </h2>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown order-2 relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars text-3xl text-[#0077b6]"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 space-y-5 py-5 border-2 shadow-lg rounded-box z-[1] mt-3 w-52 p-2 absolute right-0"
          >
            <li>
              <Link
                className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
                to="/"
                onClick={() => scrollTo(0)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
                to="/"
                onClick={() =>
                  setTimeout(
                    () =>
                      document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" }),
                    200
                  )
                }
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
                to="/"
                onClick={() =>
                  setTimeout(
                    () =>
                      document
                        .getElementById("services")
                        .scrollIntoView({ behavior: "smooth" }),
                    200
                  )
                }
              >
                OUR SERVICES
              </Link>
            </li>
            <li>
              <Link
                className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
                to="/"
                onClick={() =>
                  setTimeout(
                    () =>
                      document
                        .getElementById("clients")
                        .scrollIntoView({ behavior: "smooth" }),
                    200
                  )
                }
              >
                OUR CLIENTS
              </Link>
            </li>
            <li>
              <Link
                className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
                to="/"
                onClick={() =>
                  setTimeout(
                    () =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" }),
                    200
                  )
                }
              >
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 font-bold">
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px]"
              to="/"
              onClick={() => scrollTo(0)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
              to="/"
              onClick={() =>
                setTimeout(
                  () =>
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" }),
                  200
                )
              }
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
              to="/"
              onClick={() =>
                setTimeout(
                  () =>
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" }),
                  200
                )
              }
            >
              OUR SERVICES
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
              to="/"
              onClick={() =>
                setTimeout(
                  () =>
                    document
                      .getElementById("clients")
                      .scrollIntoView({ behavior: "smooth" }),
                  200
                )
              }
            >
              OUR CLIENTS
            </Link>
          </li>
          <li>
            <Link
              className="font-[lato] hover:bg-transparent hover:underline underline-offset-4 transition-[text-decoration-line] duration-1000 text-[#03045E] active:bg-[transparent!important] active:text-[#03045E!important] focus:bg-[transparent!important] no-underline text-[15px] decoration-[3px] "
              to="/"
              onClick={() =>
                setTimeout(
                  () =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" }),
                  200
                )
              }
            >
              GET IN TOUCH
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

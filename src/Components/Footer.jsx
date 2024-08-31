import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#0077b6] px-5 py-10 flex">
      <div className="basis-1/2 h-[4  00px] flex justify-center relative">
        <div className="rounded-full h-[300px] w-[300px] bg-[#90e0ef] absolute animate-real-pulse z-10"></div>
        <a className="btn btn-ghost text-xl h-30 hover:bg-transparent p-0 ml-auto mr-auto w-96 absolute top-20 z-20">
          <img src="/Asset 2-100.png" className="h-4/6" />
          <h2 className="font-[forum] text-[#03045E] z-20">SILICON OVERSEAS LTD.</h2>
        </a>
        <p className="text-[#0077b6] z-20 w-[360px] top-32 absolute text-right right-[12.5rem] text-lg">
          {" "}
          Bringing Skills From <br /> Bangladesh To Global Markets For <br />{" "}
          More Than A Decade
        </p>
        <img
          src="/tower3.png"
          className="absolute h-4/6 -rotate-[20deg] bottom-20 left-24 z-0 animate-bounce"
        />
        <div className="flex justify-center">
          <NavLink
            className="bg-[#F27521] hover:bg-[#f25e21] transition-colors duration-200 absolute py-3 px-12 rounded-xl font-[lato] font-bold text-white text-2xl h-fit bottom-0 z-20"
            to="/details"
          >
            What We Do
          </NavLink>
        </div>
      </div>
      <div className="basis-1/2 flex my-16 justify-center">
        <div className="basis-1/2 flex justify-center">
          <ul className="text-[#f3f6f7] text-xl space-y-5">
            MENU
            <li className="mt-5">
              {" "}
              <a href="#">HOME</a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#about">ABOUT</a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#services">SERVICES</a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#">OUR CLIENTS</a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#">GALLERY</a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#">GET IN TOUCH</a>{" "}
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex justify-center">
          <ul className="text-[#f3f6f7] text-xl space-y-5">
            FIND US
            <li className="mt-5">
              {" "}
              <a href="#">
                <i className="fa-brands fa-square-facebook text-5xl"></i>
              </a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#">
                <i className="fa-brands fa-square-twitter text-5xl"></i>
              </a>{" "}
            </li>
            <li className="mt-5">
              {" "}
              <a href="#">
                <i className="fa-brands fa-linkedin text-5xl"></i>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Countries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-24 py-16 bg-[#0077b6] font-[lato] text-white " id="countries">
      <h6 className="text-lg">
        <i className="fa-solid fa-flag-usa me-2 "></i>
        Our Countries
      </h6>
      <h1 className="text-5xl font-extrabold">
        Turning Global Journeys Into <br /> Lasting Experiences
      </h1>
      <div data-aos="fade-right" className="flex mt-16 space-x-5 justify-around">
        <div className="h-[450px] duration-500 hover:w-96 group transition-[width] w-52 rounded-[50px] bg-[url('/Bangladesh.jpg')] bg-cover">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/Bangla.png"
                className="group-hover:animate-spin animate-nonenon3"
              />
            </div>
          </div>
        </div>
        <div className="h-[450px] hover:w-96 transition-[width] w-52 duration-500 rounded-[50px] bg-[url('/Malaysia.jpg')] bg-cover group">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/Malay.png"
                className="group-hover:animate-nonenon2 animate-nonenon3"
              />
            </div>
          </div>
        </div>
        <div className="h-[450px] hover:w-96 transition-[width] w-52 duration-500 rounded-[50px] bg-[url('/Singapore.jpg')] bg-cover group">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/Sing.png"
                className="group-hover:animate-nonenon2 animate-nonenon3"
              />
            </div>
          </div>
        </div>
        <div className="h-[450px] hover:w-96 transition-[width] w-52 duration-500 rounded-[50px] bg-[url('/Saudi.jpg')] bg-cover group">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/Sau.png"
                className="group-hover:animate-nonenon2 animate-nonenon3"
              />
            </div>
          </div>
        </div>
        <div className="h-[450px] hover:w-96 transition-[width] w-52 duration-500 rounded-[50px] bg-[url('/Baby-Dubai.jpg')] bg-cover group">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/UAE.png"
                className="group-hover:animate-nonenon2 animate-nonenon3"
              />
            </div>
          </div>
        </div>
        <div className="h-[450px] hover:w-96 transition-[width] w-52 duration-500 rounded-[50px] bg-[url('/Libya.jpg')] bg-cover group">
          <div className="avatar flex justify-end mt-5 me-5">
            <div className="w-14 border-[#0fbae8] border-4 rounded-full">
              <img
                src="/Libya.svg"
                className="group-hover:animate-nonenon2 animate-nonenon3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;

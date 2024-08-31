import React from "react";

const Home = () => {
  return (
    <div className="bg-[#0077B6] min-h-[100vh] rounded-[50px] flex p-14 pb-0 mb-20 mx-5">
      <div className="basis-[44%] pr-[1%] relative">
        <img
          src="/Asset_4-100-removebg-preview.png"
          className="absolute bottom-0 animate-real-pulse"
        />
        <img
          src="/tower3.png"
          className="absolute h-5/6 -rotate-[20deg] bottom-0 left-10 animate-bounce"
        />
        <img
          src="/constructor-100-removebg-preview.png"
          className="absolute bottom-0 left-20 h-full animate-wiggle"
        />
      </div>
      <div className="basis-[54%] pl-[1%] relative">
        <h1 className="text-white text-6xl font-[lato] font-black pt-20 leading-12 text-right leading-snug">
          Bringing Skills <br /> From Bangladesh <br /> To Global Markets
        </h1>
        <div className="flex justify-end mt-10">
          <a
            className="bg-[#F27521] hover:bg-[#f25e21] transition-colors duration-200 py-3 px-12 rounded-xl font-[lato] font-bold text-white text-2xl"
            href="#"
          >
            GET STARTED
          </a>
        </div>
        {/* <img src="/tower3.png" className="animate-bounce2  absolute top-[160px] h-80 right-5" /> */}
      </div>
    </div>
  );
};

export default Home;

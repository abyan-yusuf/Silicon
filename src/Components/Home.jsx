import React from "react";

const Home = () => {
  return (
    <div
      className="bg-[#0077B6] min-h-[200vh] md:min-h-[100vh] rounded-[50px] flex md:flex-row flex-col p-14 pb-0 mb-20 mx-5"
      id="home"
    >
      <div className="md:basis-[44%] basis-full order-2 md:order-1 pr-[1%] relative">
        <img
          src="/Asset_4-100-removebg-preview.png"
          className="absolute -bottom-80 md:bottom-0 animate-real-pulse"
        />
        <img
          src="/tower3.png"
          className="absolute h-60 md:h-5/6 -rotate-[20deg] -bottom-80 md:bottom-0 md:left-10 -left-8 animate-bounce"
        />
        <img
          src="/constructor-100-removebg-preview.png"
          className="absolute md:bottom-0 -bottom-80 md:left-20 left-10 md:h-full animate-wiggle"
        />
      </div>
      <div className="md:basis-[54%] basis-full pl-[1%] relative md:order-2 order-1">
        <h1 className="text-white text-6xl font-[lato] font-black pt-20 leading-12 text-right leading-snug">
          Bringing Skills <br /> From Bangladesh <br /> To Global Markets
        </h1>
        <div className="flex justify-end mt-10">
          <a
            className="bg-[#F27521] hover:bg-[#f25e21] transition-colors duration-200 py-3 px-12 rounded-xl font-[lato] font-bold text-white text-2xl"
            href="#"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

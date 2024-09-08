import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useSpring, animated} from "react-spring"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const {number} = useSpring({
    from: {number:0},
    number: 10,
    delay: 1000,
    config: {duration: 800}
  })
  return (
    <div className="mx-20 py-28" id="about">
      <div className="flex justify-between">
        <div className="basis-[48%] flex justify-between">
          <div className="basis-[47%] flex flex-col items-center space-y-5">
            <img
              src="/passport.jpg"
              className="border-8 border-[#90E0EF] rounded-2xl"
              data-aos="fade-down-right"
            />
            <img
              src="/Nonenon.png"
              className="rounded-full animate-nonenon"
              data-aos="fade-up-right"
            />
          </div>
          <div className="basis-[46%] space-y-10">
            <div
              className="bg-[#90E0EF] px-2 py-8 flex font-[lato] font-black justify-center space-x-2 text-white rounded-3xl"
              data-aos="zoom-in"
            >
              <h1 className="text-6xl"><animated.div>{number.to(n => n.toFixed(0))}</animated.div></h1>
              <h3 className="text-2xl">
                Years of <br /> Experience
              </h3>
            </div>
            <img
              src="/pexels-wanderer-731217.jpg"
              className="border-8 border-[#90E0EF] rounded-2xl"
              data-aos="zoom-in"
            />
          </div>
        </div>
        <div className="basis-[46%] pt-3 relative">
          <h1 className="font-[lato] border-2 border-[#F27521] text-xl text-[#03045E] inline rounded-xl p-3 ">
            ABOUT US
          </h1>
          <blockquote className="leading-loose font-[forum] text-[#03045E] mt-10 text-lg w-3/4">
            Let us take the opportunity to introduce our selves as one the most
            professional, bonfire, leading government authorized manpower agency
            in Bangladesh and have already deployed over 6000 skilled,
            semi-skilled and unskilled workers including high ranking personal
            in different parts of the world. The objective of Silicon
            Overseas Ltd is to introduce the latest techniques to provide
            efficient and correct labors on construction, cleaning, and
            municipality side. Our main aim is to create overseas job for young
            man of allover the country by export manpower and earn foreign
            currency.
          </blockquote>
          <div className="h-[3.25rem] w-32 rounded-xl absolute top-[0.5rem] left-2 border-[1px] border-[#F27521] -z-10" />
        </div>
      </div>
    </div>
  );
};

export default About;

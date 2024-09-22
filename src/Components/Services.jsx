import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="md:px-24 px-6 py-20 my-6 font-[lato]" id="services">
      <h1 className="text-center text-3xl mb-10 text-[#03045e]">
        OUR SERVICES
      </h1>
      <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 md:space-x-5 justify-between">
        <div
          data-aos="zoom-in"
          className="basis-[48%] border-2 rounded-badge border-[#00b4d8] p-8"
        >
          <div className="bg-[#90e0ef] w-16 p-3 rounded-full">
            <img src="/Asset 7.svg" />
          </div>
          <blockquote className="text-[#0077b6] text-lg pt-5 leading-relaxed">
            Looking for skilled manpower for your construction projects? <br />{" "}
            Our company specializes in providing experienced <br />{" "}
            Professionals who excel in diverse construction roles. (e.g.Mason,
            Plumber, Electrician, Rod binder, Shuttering carpenter etc.) Let us
            supply the expertise you need to drive your project to success.{" "}
          </blockquote>
          <div className="mt-5">
            <Link
              to="/details"
              className="btn bg-[#00b4d8] hover:bg-[#0080d6] rounded-full text-xl font-light text-white"
            >
              Read More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="basis-[48%] border-2 rounded-badge border-[#00b4d8] p-8"
        >
          <div className="bg-[#90e0ef] w-16 p-3 rounded-full">
            <i className="fa-solid fa-graduation-cap text-[#00b4d8] text-4xl"></i>
          </div>
          <blockquote className="text-[#0077b6] text-lg pt-5 leading-relaxed">
            Are you seeking higher earnings and new opportunities? Our company
            connects both skilled and unskilled workers with lucrative positions
            abroad. Whether you're looking to leverage your expertise or gain
            new skills, we have the pathways to help you succeed. Join us to
            elevate your career and income potential.
          </blockquote>
          <div className="mt-5">
            <div className="mt-5">
              <Link
                to="/details"
                className="btn bg-[#00b4d8] hover:bg-[#0080d6] rounded-full text-xl font-light text-white"
              >
                Read More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

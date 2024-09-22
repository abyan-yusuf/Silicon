import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-32 px-5 space-x-0 md:space-x-20 py-10 md:py-5 flex justify-between md:flex-row flex-col items-center">
      <div className="md:basis-1/2 basis-[100%] flex justify-center flex-col items-center md:items-end md:mb-0 mb-20">
        <a className="btn btn-ghost text-xl h-20 hover:bg-transparent p-0 me-auto ms-auto">
          <img src="/Asset 2-100.png" className="md:h-20 h-12 inline-block" />
          <h2 className="font-[lato] text-lg md:text-3xl font-semibold text-[#03045E] inline-block">
            SILICON OVERSEAS LTD.
          </h2>
        </a>
        <p className="text-center md:text-end text-[#0077b6] text-2xl font-medium my-5">
          Bringing Skills From <br /> Bangladesh To Global Markets For <br />{" "}
          More Than A Decade
        </p>
        <a
          className="bg-[#F27521] hover:bg-[#f25e21] transition-colors duration-200 py-2 mt-2 px-20 rounded-xl font-[lato] font-bold text-white text-xl"
          href="#"
        >
          What We Do
        </a>
      </div>
      <div className="basis-1/2 relative">
        <div className="md:w-[75vh] rounded-full bg-[#90e0ef] md:h-[75vh] h-[90vw] w-[90vw] me-auto ms-auto"></div>
        <div className="basis-1/2 absolute top-20 md:top-28 left-20 space-y-3 flex flex-col">
          <h2 className="text-2xl font-semibold text-[#0077b6] ">MENU</h2>
          <Link
            className="text-xl text-[#0077b6] hover:bg-transparent"
            to="/"
            onClick={() => scrollTo(0)}
          >
            HOME
          </Link>
          <Link
            className="text-xl text-[#0077b6] hover:bg-transparent"
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
          <Link
            className="text-xl text-[#0077b6] hover:bg-transparent"
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
          <Link
            className="text-xl text-[#0077b6] hover:bg-transparent"
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
          <Link
            className="text-xl text-[#0077b6] hover:bg-transparent"
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
        </div>
        <div className="basis-1/2 absolute top-20 md:top-28 md:right-36 right-16 space-y-4">
          <h2 className="text-2xl font-semibold text-[#0077b6] ">FIND US</h2>
          <h2 className="text-5xl text-[#0077b6] ">
            <i class="fa-brands fa-square-facebook"></i>
          </h2>
          <h2 className="text-5xl text-[#0077b6]  ">
            <i class="fa-brands fa-square-twitter"></i>
          </h2>
          <h2 className="text-5xl text-[#0077b6] ">
            <i class="fa-brands fa-linkedin"></i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import AgentsCard from "./AgentsCard";

const Contact = () => {
  return (
    <>
      <div className="md:px-24 px-6 py-20 my-6 font-[lato]" id="contact">
        <h1 className="text-center font-semibold text-3xl mb-10 text-[#03045e]">
          GET IN TOUCH
        </h1>
        <div className="md:flex-row flex-col flex space-y-5">
          <div className="md:basis-1/2 basis-full">
            <h2 className="text-5xl font-black text-[#03045e] leading-relaxed">
              We're here to <br />
              support you along <br />
              the way.
            </h2>
          </div>
          <div className="md:basis-1/2 basis-full">
            <form className="shadow py-10 px-10 rounded-[50px] space-y-5 shadow-[#91c9e2] flex flex-col items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-md rounded-3xl w-full border-2 border-[#bee4f4]  placeholder:text-lg placeholder:text-[#0077b6] "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-md rounded-3xl w-full border-2 border-[#bee4f4]  placeholder:text-lg placeholder:text-[#0077b6] "
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-lg h-[150px!important] rounded-3xl w-full border-2 border-[#bee4f4]  placeholder:text-lg placeholder:text-[#0077b6] resize-none"
              />
              <input
                type="submit"
                value="Send Message"
                className="text-white text-xl font-semibold bg-[#f27521] py-2 px-5 rounded-full "
              />
            </form>
          </div>
        </div>
        <h1 className="text-center mt-20 font-semibold text-3xl mb-10 text-[#03045e]">
          TALK TO REAL PEOPLE
        </h1>
        <div className="mt-10 md:flex-row flex flex-col space-y-10 md:space-y-0 justify-between">
          <AgentsCard
            img={8}
            name={"Mohammad Alamgir Hossain"}
            phone={"01726756647"}
          />
          <AgentsCard img={9} name={"Shah Alam"} phone={"01619820988"} />
          <AgentsCard
            img={10}
            name={"Md Iqbal Hossain"}
            phone={"01913614044"}
          />
        </div>
      </div>
      <div className="md:px-24 px-6 py-16 font-[lato] md:space-x-10 bg-[#0077b6] space-y-10 md:space-y-0 flex md:flex-row flex-col">
        <div className="basis-1/2">
          <h1 className="text-3xl font-semibold text-white">Our Head Office</h1>
          <div className="h-10 flex items-center space-x-2 my-10">
            <div>
              <i className="fa-solid fa-phone bg-[#90e0ef] py-2 px-3 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-white">Telephone</h1>
              <p className="text-white">+88 02 223380518</p>
            </div>
          </div>
          <div className="h-10 flex  items-center space-x-2 my-10">
            <div>
              <i className="fa-regular fa-envelope bg-[#90e0ef] py-2 px-3 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-white">Email</h1>
              <p className="text-white">siliconmanpowerint@gmail.com</p>
            </div>
          </div>
          <div className="h-10 flex items-center space-x-2 my-10">
            <div>
              <i className="fa-solid fa-location-dot bg-[#90e0ef] py-2 px-4 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-16">
              <h1 className="text-2xl font-semibold text-white">
                Location of our office
              </h1>
              <p className="text-white md:w-auto w-72">
                9th Floor, Suite 11, 28/1/C Toyenbee Circular <br />
                Raod , Rahmania International Complex, <br />
                Motijheel, Dhaka -1000 , Bangladesh.
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.39695179392!2d90.41628937402606!3d23.733220089438202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9004edad747%3A0xea2784c95887adb0!2sSilicon%20Overseas%20Ltd!5e0!3m2!1sen!2sbd!4v1725780866841!5m2!1sen!2sbd"
            height="300"
            className="mt-24 rounded-[50px] w-full md:w-96"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="basis-1/2">
          <h1 className="text-3xl font-semibold text-white">
            Our Saudi Arabia Contact
          </h1>
          <div className="h-10 flex items-center space-x-2 my-10">
            <div>
              <i className="fa-solid fa-phone bg-[#90e0ef] py-2 px-3 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-white">Telephone</h1>
              <p className="text-white">+966503861381</p>
            </div>
          </div>
          <div className="h-10 flex items-center space-x-2 my-10">
            <div>
              <i className="fa-regular fa-envelope bg-[#90e0ef] py-2 px-3 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-white">Email</h1>
              <p className="text-white">rahman.h2010@gmail.com</p>
            </div>
          </div>
          <div className="h-10 flex items-center space-x-2 my-10">
            <div>
              <i className="fa-solid fa-location-dot bg-[#90e0ef] py-2 px-4 rounded-xl mt-5 text-3xl"></i>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-semibold text-white">
                Location of our office
              </h1>
              <p className="text-white">P.Box - 3657, Allhobar - 31952</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229115.4462559883!2d49.86967517759776!3d26.198992765227544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e839e8ef58d9%3A0xef778812d8b6aad1!2sAl%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1725779637189!5m2!1sen!2sbd"
            height="300"
            className="mt-24 rounded-[50px] md:w-96 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

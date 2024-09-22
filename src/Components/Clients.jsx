import ClientsCard from "./ClientsCard";

const Clients = () => {
  return (
    <div className="px-24 py-20 font-[lato] bg-[#0077b6] " id="clients">
      <h1 className="text-center text-3xl mb-10 text-[#FFF] font-bold">
        {" "}
        OUR CLIENTS
      </h1>
      <div className="mt-10 flex md:flex-row flex-col space-y-10 md:space-y-0 md:space-x-10">
        <div className="basis-1/3 space-y-7 flex justify-center">
          <ClientsCard
            img={"bfco"}
            name={"Business Facilities"}
            url={"https://bfco.sa/"}
          />
        </div>
        <div className="basis-1/3 space-y-7 flex justify-center">
          <ClientsCard
            img={"alsalomi"}
            name={"AL SALOMI"}
            url={"https://alsalomi.com/"}
          />
        </div>
        <div className="basis-1/3 space-y-7 flex justify-center">
          <ClientsCard
            img={"fidak"}
            name={"Fidak Company"}
            url={"https://fidakco.com/en/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

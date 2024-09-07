import ClientsCard from "./ClientsCard";

const Clients = () => {
  return (
    <div className="px-24 py-16 font-[lato] bg-[#0077b6] ">
      <h1 className="text-center text-3xl mb-10 text-[#FFF] font-bold">
        {" "}
        OUR CLIENTS
      </h1>
      <div className="mt-10 flex space-x-10">
        <div className="basis-1/3 space-y-7">
          <ClientsCard
            img={"FI"}
            name={"Ferretti International SRL"}
            location={"Libya Branch"}
          />
          <ClientsCard
            img={"AR"}
            name={"Ar-Rahmania Laundry"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"SC"}
            name={"Simar Clothes Factory"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AO"}
            name={"Abdullah Office Manpower"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AA"}
            name={"Al Anabis Trading & Import"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"YM"}
            name={"Yahya Masha Mohammed                  Sharahill"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"NFS"}
            name={"Nasir F. AI-Sabehe "}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AJ"}
            name={"Ahmed Jabran Kabee Est"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AM"}
            name={"Al Motrode Est"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"PI"}
            name={"Persatuan Industrial Kecil Dan sederhana"}
            location={"Sekngor, Malaysia."}
          />
        </div>
        <div className="basis-1/3 space-y-7">
          <ClientsCard
            img={"IO"}
            name={"The International Office"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"JR"}
            name={"Jawa Recruiting Office"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"ARR"}
            name={"Al-Reem Recreation Centre"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"SS"}
            name={"Saudi Shaimah Co."}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"NF"}
            name={"National Furniture Factory"}
            location={"Dammam, KSA"}
          />
          <ClientsCard
            img={"MQ"}
            name={"Mahsen Al-Qahtani Est"}
            location={"KSA"}
          />
          <ClientsCard
            img={"SM"}
            name={"Suode M. Al-Qahatani Est"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"MAQ"}
            name={"Masber Al-Qahtani Est"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"PP"}
            name={"Perimac Precision Industrics SDN BHD "}
            location={"Jhor Bahru, Malaysia"}
          />
          <ClientsCard
            img={"NG"}
            name={"N.G, Floral company"}
            location={"Malaysia"}
          />
        </div>
        <div className="basis-1/3 space-y-7">
          <ClientsCard
            img={"OT"}
            name={"Owna Trading Co Ltd"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AD"}
            name={"Al-Doher Office "}
            location={"Riyadh, KSA"}
          />
          <ClientsCard img={"AE"} name={"Awkad EST"} location={"Riyadh, KSA"} />
          <ClientsCard
            img={"AAR"}
            name={"Al Agher Recruiting Office"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"NU"}
            name={"Noeasy Al Ualil"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"AAE"}
            name={"Aien Azary Est"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"MR"}
            name={"M-Rasheed Company"}
            location={"Jeddah, KSA"}
          />
          <ClientsCard
            img={"AOM"}
            name={"Abdullah Office Manpower"}
            location={"Riyadh, KSA"}
          />
          <ClientsCard
            img={"DG"}
            name={"D & G Resources SDN, BHD"}
            location={"Selangor, Malaysia"}
          />
          <ClientsCard
            img={"NM"}
            name={"Niat Murni SDN BHD"}
            location={"Penang, Malaysia"}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

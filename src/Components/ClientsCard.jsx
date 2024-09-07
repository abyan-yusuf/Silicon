const ClientsCard = ({img, name, location}) => {
  return (
    <div className="h-[4.5rem] p-[0.425rem] rounded-full bg-[#00b4d8] flex">
      <img src={`/${img}.svg`} className="h-full" />
      <div className="me-auto ms-auto">
        <h3 className={`font-semibold text-${name.length >= 30 ? "sm":"xl"} w-64 ${name.length >= 35 ?"leading-tight":"leading-relaxed"} text-white text-center`}>
          {name}
        </h3>
        <h3 className="font-semibold text-base text-white text-center">
          {location}
        </h3>
      </div>
    </div>
  );
};

export default ClientsCard;

import React from "react";

const AgentsCard = ({img, name, phone}) => {
  return (
    <div className="rounded-[60px] bg-[#0077b6] p-5 basis-60">
          <img src={`Asset ${img}.svg`} />
          <div className="h-20 flex items-center justify-center">   
      <p className="text-white text-xl font-semibold text-center py-5">
        {name}
      </p></div>       
      <p className="text-white text-xl text-center">
        Phone: <br />
        {phone}
      </p>
    </div>
  );
};

export default AgentsCard;

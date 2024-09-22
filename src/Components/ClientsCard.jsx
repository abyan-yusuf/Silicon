import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ClientsCard = ({ img, name, url }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flip = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        onMouseEnter={flip}
        className="w-80 h-80 rounded-full bg-[#00b4d8] p-10"
      >
        <img src={`/${img}.png`} className="h-full w-full" />
      </div>
      <div
        onMouseLeave={flip}
        className="w-80 h-80 rounded-full flex flex-col justify-center bg-[#00b4d8] space-y-5 items-center"
      >
        <h1 className="text-5xl text-center text-white font-bold">
          {name}
        </h1>
        <h1 className="text-5xl text-center text-white font-light">Riyadh</h1>
        <a
          href={url}
          target="_blank"
          className="text-white italic bg-[#0077b6] w-fit px-3 py-1 rounded-full"
        >
          Visit Website
        </a>
      </div>
    </ReactCardFlip>
  );
};

export default ClientsCard;

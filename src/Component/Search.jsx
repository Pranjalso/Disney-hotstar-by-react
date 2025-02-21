import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import show1 from "../assets/yeh rista.webp";
import show2 from "../assets/laufterchef.avif";
import show3 from "../assets/anupma.avif";
import show4 from "../assets/roadies.avif";
import show5 from "../assets/anupma.avif";
import show6 from "../assets/ghumh.avif";
import show7 from "../assets/laxmi.webp";
import show8 from "../assets/mannat.avif";
import show9 from "../assets/jadu.avif";
import show10 from "../assets/thukra.webp";
import show11 from "../assets/engaged.avif";
import show12 from "../assets/power of.avif";
import show13 from "../assets/jhanak.webp";
import show14 from "../assets/mm.webp";
import show15 from "../assets/sanam.avif";
import show16 from "../assets/parineeti.webp";
import show17 from "../assets/doreamon.webp";
import show18 from "../assets/mahabahrat.webp";
import show19 from "../assets/game.avif";
import show20 from "../assets/tanah.webp";

const HoverCard = ({ image, detail, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[11rem] h-[15rem] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="Show Poster" className="w-full h-full object-cover rounded-lg" />

      {isHovered && (
        <div className="absolute inset-0 bg-black/80  rounded-lg text-white flex flex-col justify-end transition-all duration-300 scale-x-150 z-20 ">
          <div className=""><img src={image} alt="" className="w-full h-full object-cover"/></div> 
          <button className="mt-3 bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center justify-center">
            <VscTriangleRight /> Watch Now
          </button>
          <div className=" bg-black/80">
          <p className="text-sm">{detail}</p>
          <p className="text-xs mt-2">{description}</p>
          </div>
          </div>
      )}
    </div>
  );
};

const Search = () => {
  const shows = [
      {
        image: show1,  // 
        detail: "2025 • Hindi • StarPlus • U/A 13+",
        description: "A thrilling journey of love and ambition...",
      },
    {
      image:show2,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show3,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show4,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show5,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show6,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show7,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show8,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show9,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show10,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show11,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show12,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show13,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show14,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show15,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show16,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show17,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show18,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show19,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:show20,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#252833] rounded-2xl p-6 mt-2 flex">
        <span className="text-2xl text-[#95A3AF]">
          <IoIosSearch />
        </span>
        <div className="pl-4">
          <input
            type="text"
            className="bg-[#252833] w-full border-none outline-none font-bold text-xl"
            placeholder="Movies, Shows and more"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-xl text-[#E1E6F0] mb-4">Trending in India</p>
        <div className="flex flex-wrap gap-4">
          {shows.map((show, index) => (
            <HoverCard key={index} {...show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import image1 from "../assets/mmm.webp";

const HoverCard = ({ image, detail, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-60 h-80 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="Show Poster" className="w-full h-full object-cover rounded-lg" />

      {isHovered && (
        <div className="absolute inset-0 bg-black/80 rounded-lg p-4 text-white flex flex-col justify-end transition-all">
          <img src={image} alt="" className="w-full h-full object-cover"/>
          <button className="mt-3 bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center justify-center">
            <VscTriangleRight /> Watch Now
          </button>
          <p className="text-sm">{detail}</p>
          <p className="text-xs mt-2">{description}</p>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const shows = [
      {
        image: image1,  // Use imported image
        detail: "2025 • Hindi • StarPlus • U/A 13+",
        description: "A thrilling journey of love and ambition...",
      },
    {
      image: image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      image:image1,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
  ];

  return (
    <div className="m-4">
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

export default Search;

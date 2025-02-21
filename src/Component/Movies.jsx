import React from "react";
// import bannerVideo from "../assets/banner.mp4"; // Add your video file in the assets folder

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center md:text-left">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src='' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional: To make text more visible) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col md:flex-row md:items-start gap-4 p-4">
        {/* Image Section */}
        <div className="w-full md:w-[400px] flex-shrink-0 overflow-hidden">
          <img
            src="https://via.placeholder.com/400" // Replace with your image
            className="w-full rounded-lg shadow-lg shadow-gray-800/50"
            alt="banner"
          />
        </div>

        {/* Text Content */}
        <div className="bg-[#16181F] bg-opacity-80 p-6 rounded-lg w-full text-white">
          <h3 className="text-blue-400 font-bold text-xl md:text-2xl">TATA WPL</h3>
          <p className="text-gray-300 text-lg md:text-xl">Starts Feb 14</p>
          <p className="text-gray-200 text-base md:text-lg mt-2">
            Catch the women in action as they take on the best!
          </p>

          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-md transition-all duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

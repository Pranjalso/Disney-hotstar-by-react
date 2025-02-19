import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Fun = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/path-to-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay (Gradient for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent"></div>

      {/* Movie Details */}
      <div className="absolute top-1/4 left-10 text-white max-w-xl">
        <h1 className="text-4xl font-bold">KISHKINDHA KAANDAM</h1>
        <p className="text-lg mt-2">A tale of three wise monkeys</p>
        <p className="text-sm mt-4">
          Near a forest overrun by monkeys, newlyweds' life turns uncanny when Aparna unravels her father-in-law's secrets...
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 rounded-lg">Watch Now</button>
      </div>

      {/* Bottom-Right Slider */}
      <div className="absolute bottom-5 right-5 w-[400px]">
        <Swiper spaceBetween={10} slidesPerView={3} loop>
          <SwiperSlide>
            <img src="/img1.jpg" alt="Movie" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img2.jpg" alt="Movie" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img3.jpg" alt="Movie" className="rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Fun;

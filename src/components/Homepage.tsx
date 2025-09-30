"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
const images = ["/ulkatvi.png", "/allchanneslulkatv.png", "/slider1updated.png", "/png.png", "/mansports.png", ]; // add more images

const HomePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, []);

  const staticImages = [
    { src: "/patone.png", alt: "SDC Logo" },
    { src: "/ptatwo.png", alt: "SDC1 Logo" },
    { src: "/pta3.png", alt: "SDC2 Logo" },
    { src: "/fastnet.png", alt: "SDC3 Logo" },
    { src: "/gnet.png", alt: "SDC4 Logo" },
    { src: "/onetfiber.png", alt: "SDC5 Logo" },
    { src: "/ulkaone.png", alt: "Ulka One" },
    { src: "/ulkatwo.png", alt: "Ulka Two" },
    { src: "/ulkathree.png", alt: "Ulka Three" },
    { src: "/ulkafour.png", alt: "Ulka four" },
    { src: "/ulkafive.png", alt: "Ulka five" },
    { src: "/ulkasix.png", alt: "Ulkasix" },
    { src: "/ulkaseven.png", alt: "ulkaseven" },
    { src: "/ulka8.png", alt: "ulka8" },
    { src: "/ulkanine.png", alt: "ulkanine" },
    { src: "/ulkaten.png", alt: "ulkaten" },
    { src: "/ulka11.png", alt: "ulka11" },
    { src: "/ulka12.jpg", alt: "ulka12" },
    { src: "/ulka13.png", alt: "ulka13" },
  ];

  return (
    <div className="mb-8 min-h-screen  mx-auto">
      <div className="relative h-auto min-h-[95vh] bg-gradient-to-r from-[#FF4E55] to-[#FC913A] flex flex-col items-center justify-center px-4 py-10 overflow-hidden z-0 pt-32">
        {/* Dotted edges only */}

        {/* <div
        className="relative h-auto min-h-[95vh] bg-[radial-gradient(circle_at_center,_#ff0000,_#a6a6a6,_#ffffff)] 
                  flex flex-col items-center justify-center px-4 py-10 overflow-hidden z-0 pt-32"
      > */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_black_1px,transparent_1px)] [background-size:20px_20px] opacity-40 
                        pointer-events-none z-0 
                        mask-[radial-gradient(circle_at_center,transparent_60%,black_100%)]">
        </div>

        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full px-2 sm:px-6">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-lg sm:text-2xl md:text-4xl text-black font-extrabold leading-normal sm:leading-snug">
              <span className="block mt-10 sm:mt-8 mb-4 sm:mb-6">
                WELCOME TO THE FUTURE OF ENTERTAINMENT!
              </span>
            </p>

            <h3 className="text-black text-sm sm:text-base md:text-2xl font-extrabold my-3 sm:my-4 max-w-lg leading-relaxed">
              <span className="block mt-2 sm:mt-4">
                ULKA TV is a leading IPTV subscription provider across India.
              </span>
              <span className="block mt-2 sm:mt-4">
                WE ARE INDIA'S NO 1 IPTV Solution Provider with MPEG-DASH and HEVC codec with unicast technology
              </span>
             <button
                className="relative mt-4 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 
                          rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                          text-black font-bold text-sm sm:text-base md:text-lg 
                          shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-gray-700 
                          hover:text-white transition-all duration-500 overflow-hidden group"
              >
                <span className="relative z-10">One Point Source of Entertainment</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>


            </h3>

            {/* BUTTONS */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 w-full">
              <Link href="/smarttv" className="px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-lg text-center">
                Smart TV
              </Link>
              <Link href="/smartmobile" className="px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-lg text-center">
                Smart Mobile
              </Link>
              <Link href="/stb" className="px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-lg text-center">
                STB
              </Link>
              <Link href="/stick" className="px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-lg text-center">
                Stick
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center items-center mt-6 md:mt-0">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt="ULKA TV"
              className="w-4/9 sm:w-full h-auto object-contain transition-opacity duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>



    <section className="bg-whiSmartTvte mb-8 mt-[4rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-16 space-y-12 lg:space-y-0">
          <div className="w-full relative">
            <div
              className="w-full lg:w-[52rem] lg:h-[34rem] bg-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
            >
              <div className="w-full flex justify-center">
                <div
                  className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl aspect-w-16 aspect-h-9 transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden border-[10px] sm:border-[15px] border-gray-400 rounded-lg shadow-xl"
                >
                  <video
                    className="w-full h-full object-cover"
                    src="/intro.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 right-0 w-[10rem] sm:w-[16rem] h-[15rem] sm:h-[25rem] bg-cover mt-[10rem] sm:mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 mb-8"
              style={{ backgroundImage: "url('/nm.png')" }}
            ></div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left ">
            <div className="mb-6 sm:mb-8">
              <span className="block mb-4 border-t-4 border-gray-500 w-10 mx-auto lg:mx-0"></span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-4 sm:mb-6">
                TOTALY FEASIBLE!
              </h3>
              <h4 className="text-lg sm:text-xl font-thin text-gray-600 leading-relaxed">
                Take control of your account with ease using the MyULKA Customer App. Download now for a secure, scalable, and smarter experience.
              </h4>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md mb-6 sm:mb-8 border-2 w-full sm:w-[20rem] xl:w-[35rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
              <blockquote className="text-gray-800 text-sm sm:text-base">
                With the MyULKA TV Customer app, we have enabled one-click login for our customers. They also have the option to purchase pre-built Ulka bundles or customize a-la-carte options, making it affordable to watch Indian Live TV channels.
              </blockquote>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
                target="_blank"
                className="bg-red-500 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-black"
                title="Download myULKA TV App Now"
              >
                Download MyULKA TV App Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-red-600 text-white flex flex-col md:flex-row items-center mt-[8rem] relative mb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative mt-[5rem] mb-14">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
            <div className="bg-white hover:bg-black text-red-600 hover:text-white font-bold rounded-full w-12 h-12 flex justify-center items-center">
              WHY
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold">ULKA IS SPECIAL?</h2>
          </div>
          <hr className="border-white my-4" />
          <p className="mb-6">We provide the most stable IPTV service across India – designed for hassle-free entertainment.</p>
          <hr className="border-white my-4" />
          <ul className="list-none space-y-3 text-sm md:text-base">
            <li>- 🚫 No Weather Disruptions </li>
            <li>- 🛠️ No Construction Fittings</li>
            <li>- 📡 No Physical Dish</li>
            <li>- 💰 No Extra Expenses</li>
            <li>- 🔌 No Wire Clutter</li>
          </ul>
          <hr className="border-white my-4" />
          <div className="flex justify-center md:justify-start">
            <button
              className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black"
              onClick={() => window.open('https://store.ulka.tv/', '_blank')}
            >
              ORDER NOW
            </button>
          </div>
          <hr className="border-white my-8 mb-8" />
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full flex justify-center md:absolute md:top-0 md:right-0 md:w-auto mb-8">
        <Image
          src="/mainulkaimage.png"
          alt="Ulka TV"
          width={800}
          height={900}
          className="w-full md:w-auto object-cover"
        />
      </div>
    </div>

    <div className="bg-white max-w-[70rem] items-center justify-center mx-auto  mb-8 rounded-xl">
        <div className="text-[#2B1C50] text-[16px] sm:text-[20px] xl:text-[32px] text-center font-semibold mt-8">
          <div className="font-bold text-black my-6">Our Partners</div>
        </div>
        <div className="flex justify-center items-center overflow-hidden xl:max-w-[1160px] max-w-full mb-8 space-x-4 sm:space-x-8 lg:space-x-16">
          <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
            {staticImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                height={128}
                width={200}
                className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
              />
            ))}
          </div>

          <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
            {staticImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                height={128}
                width={200}
                className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-loop-scroll {
          display: flex;
          animation: loop-scroll 50s linear infinite;
        }
      `}</style>
  </div>
  );
};

export default HomePage;

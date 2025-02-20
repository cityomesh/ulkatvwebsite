"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

const HomePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);

  return (
    <div className="mb-8 min-h-screen  mx-auto">
    <div
        className="h-[95vh] bg-gradient-to-r from-[#FF4E55] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4"
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl w-full px-4 sm:px-6 py-10 sm:py-16 ">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-lg sm:text-2xl md:text-4xl text-white font-extrabold leading-normal sm:leading-snug">
            <span className="block mt-4 mb-4 sm:mb-6">WELCOME TO FUTURE!</span>
          </p>
          <h3 className="text-black text-base sm:text-lg md:text-2xl font-extrabold my-3 sm:my-4 max-w-full leading-relaxed">
            <span className="block mt-3 sm:mt-4">
              ULKA TV is a leading IPTV subscription provider across India.
            </span>
            <span className="block mt-3 sm:mt-4">
              India's 1st Solution with MPEG-DASH and HEVC codec with unicast
              technology
            </span>
            <span className="block mt-3 sm:mt-4">which provides 800+ Indian channels.</span>
          </h3>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-5 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-base sm:text-lg">
              Channel List
            </button>
            <button className="bg-black border border-orange-500 text-white py-3 px-5 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg">
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full h-auto">
            <img
              className="w-full h-auto object-cover mt-6 sm:mt-8"
              src="/ulkatvi.png"
              alt="New"
            />
          </div>
        </div>
      </div>
    </div>


    <section className="bg-white mb-8 mt-[4rem]">
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

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 sm:mb-8">
              <span className="block mb-4 border-t-4 border-gray-500 w-10 mx-auto lg:mx-0"></span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-4 sm:mb-6">
                TOTALLY FEASIBLE!
              </h3>
              <h4 className="text-lg sm:text-xl font-thin text-gray-600 leading-relaxed">
                Manage your account seamlessly with myULKA Customer App. Download myULKA app for a secure, scalable, and smart experience.
              </h4>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md mb-6 sm:mb-8 border-2 w-full sm:w-[20rem] xl:w-[35rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
              <blockquote className="text-gray-800 text-sm sm:text-base">
                With myULKA TV Customer app, we have enabled one-click login for our customers. Customers also have the option to purchase one of our 
                pre-built Ulka bundles or customize the a-la-carte options that make watching Indian Live TV Channels affordable.
              </blockquote>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
                target="_blank"
                className="bg-red-500 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-black"
                title="Download myULKA TV App Now"
              >
                Download myULKA TV App Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* 
        <div className="bg-red-600 text-white flex items-center mt-[8rem] relative mb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative mt-[5rem] mb-14">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white hover:bg-black text-red-600  hover:text-white font-bold rounded-full w-12 h-12 flex justify-center items-center">
              WHY
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold">ULKA IS SPECIAL?</h2>
          </div>
          <hr className="border-white my-4" />
          <p className="mb-6">
            We offer the Most stable IPTV Service across India to Watch LIVE TV.
          </p>
          <hr className="border-white my-4" />
          <ul className="list-none space-y-3">
            <li className="hover:bg-transparent">- NO weather disruptions</li>
            <li className="hover:bg-transparent">- NO construction fittings required</li>
            <li className="hover:bg-transparent">- NO physical dish to be installed</li>
            <li className="hover:bg-transparent">- NO extra fitting expenses</li>
            <li className="hover:bg-transparent">- NO wire fittings needed</li>
          </ul>
          <hr className="border-white my-4" />
          <button
            className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black"
            onClick={() => window.open('https://store.ulka.tv/', '_blank')}
          >
            ORDER NOW
          </button>

          <hr className="border-white my-8 mb-8" />
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full mb-8">
        <Image
          src="/mainulkaimage.png"
          alt="Ulka TV"
          width={800}
          height={900}
          className="h-full object-cover mb-8"
        />
      </div>
    </div>         */}

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
      <p className="mb-6">We offer the Most stable IPTV Service across India to Watch LIVE TV.</p>
      <hr className="border-white my-4" />
      <ul className="list-none space-y-3 text-sm md:text-base">
        <li>- NO weather disruptions</li>
        <li>- NO construction fittings required</li>
        <li>- NO physical dish to be installed</li>
        <li>- NO extra fitting expenses</li>
        <li>- NO wire fittings needed</li>
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

  </div>

  );
};

export default HomePage;

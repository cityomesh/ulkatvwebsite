
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
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const states = [
    "Andhra Pradesh", "Telangana",  "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
     "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const statePartners: Record<string, string[]> = {
    "Andhra Pradesh": ["ISP1 Andhra", "ISP2 Andhra", "ISP3 Andhra"],
    Telangana: ["ISP1 Telangana", "ISP2 Telangana"],
    Karnataka: ["ISP1 Karnataka", "ISP2 Karnataka", "ISP3 Karnataka"],
    "Tamil Nadu": ["ISP1 Tamil Nadu", "ISP2 Tamil Nadu"],
    Maharashtra: ["ISP1 Maharashtra", "ISP2 Maharashtra", "ISP3 Maharashtra"],
    "West Bengal": ["ISP1 West Bengal", "ISP2 West Bengal"],
    "Uttar Pradesh": ["ISP1 UP", "ISP2 UP"],
    "Madhya Pradesh": ["ISP1 MP", "ISP2 MP"],
    Rajasthan: ["ISP1 Rajasthan", "ISP2 Rajasthan"],
    Kerala: ["ISP1 Kerala", "ISP2 Kerala"],
    Gujarat: ["ISP1 Gujarat", "ISP2 Gujarat"],
  };
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

  const testimonials = [
    {
      name: 'Enhanced Connectivity:',
      feedback:
        "Bundled packages provide rural residents with both internet connectivity and IPTV services in a single offering. This ensures that individuals have access to information, entertainment, and services through a reliable and convenient connection.",
    },
    {
      name: 'Digital Literacy and Skill Development:',
      feedback:
        'Bundled packages encourage residents to engage with technology, leading to improved digital literacy and skills that are increasingly relevant in today s world.',
    },
    {
      name: 'Technology Adoption:',
      feedback:
        'Bundled packages introduce technology to rural communities, encouraging the use of Smartphones, Smart TVs, and other devices. This can have long-term benefits in terms of technology adoption and adaptation.',
    },
  ];
  
  return (
    <div className="mb-8 min-h-screen  mx-auto mt-[7rem]">
      <div className="bg-white max-w-[70rem] items-center justify-center mx-auto  mb-8 rounded-xl">
          <div className="text-[#2B1C50] text-[16px] sm:text-[20px] xl:text-[32px] text-center font-semibold mt-8">
            <div className="font-bold text-black py-8">Our Partners</div>
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

    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
              target="_blank"
              className="block w-full h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
              ></div>
              <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold">Major PSUs BSNL and Railtel are our Network
                Partners for IPTV Services.</h3>
              </div>
            </Link>
          </div>

          <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
              target="_blank"
              className="block w-full h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
              ></div>
              <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold">More than 20 National and Regional ISPs are
                  engaged in promoting and distributing our IPTV
                  Services covering entire India.</h3>
              </div>
            </Link>
          </div>

          <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
              target="_blank"
              className="block w-full h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
              ></div>
              <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold">Some enthusiastic LCOs also are participating in
                  IPTV distribution hosting Mini CDNs integrated to
                  their FTTH equipment using IPTV VLAN.</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <div className="mb-8 mx-auto">
      <div className="max-w-[95rem] mx-auto bg-white p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#2B1C50]">
          ULKATV Partners by State
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center my-8">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className="bg-red-400 hover:bg-black text-white py-2 px-4 rounded transition w-full"
            >
              {state}
            </button>
          ))}
        </div>

        {selectedState && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-center text-[#2B1C50]">
              {selectedState} - UlkaTV Partners
            </h3>
            <ul className="mt-2 text-center">
              {statePartners[selectedState]?.map((partner, index) => (
                <li key={index} className="text-xl text-gray-700 font-bold">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

  </div>
  );
};

export default HomePage;

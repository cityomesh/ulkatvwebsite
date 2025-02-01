"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const target = document.querySelector("#animate-section");

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const cards = [
    {
      img: "/ulkatvdata.png",
      title: "Our IPTV Infrastructure is Audited by TRAI empaneled Auditors for Regulatory Compliance",
    },
    {
      img: "/ulkatvdata.png",
      title: "Compliance and Subscription Audits were conducted by multiple Auditors including BECIL, KPMG, Delloite, and others",
    },
    {
      img: "/ulkatvdata.png",
      title: "Our Smart Apps, ULKA Lite and ULKA Mini were also Audited for Regulatory Compliance along with our Smart STBs.",
    },
  ];
  return (
    <div className="bg-white w-full p-10">
      <div className="mt-[5rem] flex justify-center">
        <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg group duration-300">
          Technology
        </h2>
      </div>

      <section className="text-center container mx-auto mt-[2rem] flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
          <motion.div
            className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-3 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
              ULKA distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network.
            </h3>
          </motion.div>

          <motion.div
            className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-3 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
              ULKA has developed its own CDN system and is not dependent on third-party vendors. It offers regional advertisements to save trunk line capacity.
            </h3>
          </motion.div>

          <motion.div
            className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-5 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
              Rcast has developed its own CDN system with a minimum trunk line requirement, offering cost-effective connectivity.
            </h3>
          </motion.div>

          <motion.div
            className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-5 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
              150-300 Mbps for 250 SD+16 HD Channels and 500-1000 Mbps for all 700 Channels.
            </h3>
          </motion.div>
        </div>
      </section>

      <div>
      <div className="flex justify-center mt-8">
        <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-6">
         Regulatory Compliance
        </h2>
      </div>

      <div
        className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mb-8 xl:gap-[10rem] md:gap-[1rem] md:space-x-6 space-y-6 md:space-y-0"
        id="animate-section"
      >
        <div
          className={`md:w-2/5 w-full h-full flex items-center justify-center ${
            isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
          }`}
        >
          <Image
            src="/ottp.png"
            alt="Team Meeting"
            width={1200}
            height={400}
            className="object-contain xl:max-w-[830px] md:max-w-[830px] h-auto transition-opacity duration-1000 ease-in-out"
          />
        </div>

        <div
          className={`md:w-3/2 w-full p-6 md:p-8 h-full ${
            isVisible ? "opacity-100 animate-slide-right" : "opacity-0"
          }`}
        >
          <h2 className="font-bold leading-8 text-black text-lg md:text-xl space-y-4">
            <p>
              •  IPTV is licensed by M.I.B and is exempted from AGR using existing local broadband networks. AGR is payable for OTT applications.
            </p>
            <p>
              • All OTT applications use global streaming servers like Amazon and Akamai, consuming internet bandwidth, making it expensive.
            </p>
            <p>
              • Distribution of licensed satellite channels is permitted only through licensed operators (IPTV, DTH, etc.).
            </p>
            <p>
              • M.I.B is in the process of withdrawing live satellite channels from OTT platforms like Disney Hotstar and Sony LIV.
            </p>
          </h2>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-left {
          animation: slide-left 2s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 2s ease-out forwards;
        }
      `}</style>
    </div>

      <div className="bg-white text-black flex items-center mt-[5rem] mb-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black hover:bg-red-600 text-white font-bold rounded-full w-4 h-4 flex justify-center items-center"></div>
              <h2 className="text-2xl md:text-3xl font-semibold">IPTV vs Cable TV</h2>
            </div>
            <hr className="border-black my-4" />
            <p className="mb-2 font-bold text-xl">
              Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for ULKA TV.
            </p>
            <hr className="border-black my-4" />
            <p className="mb-2 text-lg font-bold">
              Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k against ULKA TV
              CDN (Streaming Server) at Rs.15k-50k.
            </p>
            <hr className="border-black my-4" />
            <p className="mb-2 font-bold text-xl">
              Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.
            </p>
            <hr className="border-black my-4" />
            <p className="mb-2 text-lg font-bold">
              ULKA TV distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.
            </p>
            <hr className="border-black my-4" />
            <button className="mt-2 px-6 py-3 bg-black text-red-600 font-bold rounded hover:bg-red-600 hover:text-white">
              ORDER NOW
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src="/cabletv.png"
              alt="Ulka TV"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="flex justify-center">
          <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-6">
            Regulatory Compliance
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[500px] md:w-[600px] lg:w-[500px] group hover:bg-[#333333] hover:text-white transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold p-2">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TechnologyPage;

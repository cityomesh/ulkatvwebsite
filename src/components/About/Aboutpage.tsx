"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

const Aboutpage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);


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

  const contentSections = [
    { src: "/old.png", alt: "SMART TV" },
    { src: "/old2.png", alt: "SMART TV" },
    { src: "/old3.png", alt: "Smart TV" },
  ];

  
  return (
    <div className="mb-8 min-h-screen  mx-auto">
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">

      <div className="flex justify-center mt-8">
        <h2
          className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-8"
        >
          ABOUT US
        </h2>
      </div>

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
                <h3 className="text-xl font-semibold">ULKA TV is a leading IPTV subscription provider across India. India's 1st Solution with MPEG-DASH and HEVC codec with unicast technology which provides all Indian channels.</h3>
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
                <h3 className="text-xl font-semibold">ULKA Lite Smart TV App enhances the way you watch television with an internet-connection. Smart STB or Sticks can be connected using WiFi network for the Old traditional TVs.</h3>
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
                <h3 className="text-xl font-semibold"> ULKA Mini Smart Mobile App gets all the news channels in a single App, OUR Smart Apps brings a new experience in homes with 4k UHD visual experience.</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>


    <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mt-[5rem] mb-8">
          Future of Television in India
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
          {contentSections.map((section, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={section.src}
                  alt={section.alt}
                  width={index === 2 ? 480 : 120}
                  height={index === 2 ? 488 : 120}
                  className={`rounded-[1.5rem] ${
                    index === 2 ? "w-[24rem] h-[16rem]" : "w-[20rem] h-[14rem]"
                  }`}
                />
              </div>
              {index < contentSections.length - 1 && (
                <div className="hidden lg:block text-[60px] font-bold text-blue-900">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5 px-4 mb-8">
          {[
            "The Television sets are being upgraded at a very fast pace.",
            "4K Smart TVs are common today and the traditional Set-top-Boxes are unable to upgrade to the standards of 4K Televisions.",
            "Smart TV share of new Television sales is more then 95%.",
            "ULKA TV 4K compatible distribution system has TRAI approved Virtual STB Application for Smart TVs and Smart Phones..",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 50,
                delay: index * 0.3,
              }}
              className={`p-5 rounded-lg shadow-md w-full max-w-2xl hover:scale-105 transition-transform ${
                text ===
                ""
                  ? "bg-gradient-to-r from-gray-500 to-red-400"
                  : "bg-blue text-black hover:bg-gray-100 hover:text-black"
              }`}
            >
              <h2 className="text-xl font-bold">{text}</h2>
            </motion.div>
          ))}
        </div>
      </div>


        <div className="bg-red-600 text-white flex items-center mt-[2rem] relative mb-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative mt-[5rem] mb-14">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white hover:bg-black text-red-600  hover:text-white font-bold rounded-full w-4 h-4 flex justify-center items-center">
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">ULKA TV for Internet Service Providers</h2>
              </div>
              <hr className="border-white my-4" />
              <p className=" mb-2 font-bold text-xl ">
                TELEVISION VIEWERSHIP
              </p>
              <p className="mb-2 text-lg">
               Television is the largest source of media in India by reaching approximately reaching over 500M households.
              </p>
              <hr className="border-white my-4" />
              <p className="mb-2 font-bold text-xl">
               DIGITAL INCLUSION
              </p>
              <p className="mb-2 text-lg">
              Expanding internet connectivity through IPTV can bridge the digital divide between urban and rural areas. Rural residents can access information, entertainment, and services that were previously unavailable to them, leading to a more inclusive society.
              </p>
              <hr className="border-white my-4" />
              <p className="mb-2 font-bold text-xl">
                BUNDLE PACKAGES TO PROMOTE INTERNET CONNECTIONS
              </p>
              <p className="mb-2 text-lg">
                Offering bundled packages that include both internet connectivity and IPTV services at reasonable rates, making it more attractive for urban or rural customers since they don't have to pay separately for Television connections.
              </p>
              <hr className="border-white my-4" />
              <button
                className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black"
                onClick={() => window.open('https://store.ulka.tv/', '_blank')}
              >
                ORDER NOW
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full mb-8">
            <Image
              src="/mainulkaimage.png"
              alt="Ulka TV"
              width={1000}
              height={900}
              className="h-full object-cover mb-8"
            />
          </div>
        </div>


        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Bundling IPTV and INTERNET Packages Help Internet Service Providers ?
            </h2>
            <div className="grid gap-8 md:grid-cols-3 mt-[5rem]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 relative text-gray-900 hover:bg-black hover:text-white flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute -top-5 flex items-center justify-center w-12 h-12 bg-red-900 text-white rounded-full transition-colors duration-300">
                    <span className="text-2xl">&ldquo;</span>
                  </div>

                  <h3 className="text-xl font-bold mt-8">{testimonial.name}</h3>

                  <p className="text-lg mt-4">{testimonial.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white flex items-center justify-center">
          <div className="bg-white max-w-7xl w-full px-4">
            <div className="flex justify-center mt-2">
              <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-8">
                For ISPs
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-8 items-center mb-8">
              <div className="md:col-span-4 space-y-6 w-full">
                {[
                  {
                    imgSrc: "/image1.png",
                    text: "No wastage of time for building technology, approvals, Licenses, and high-cost maintenance",
                  },
                  {
                    imgSrc: "/click1.png",
                    text: "Instant and quick television service for existing customers",
                  },
                  {
                    imgSrc: "/click2.png",
                    text: "Increase in ARPU without Investment",
                  },
                  {
                    imgSrc: "/click3.png",
                    text: "Scalable Migration of Traditional STBs since ULKA TV does not use existing Cable TV Network",
                  },
                  {
                    imgSrc: "/click5.png",
                    text: "No additional or specific Last Mile Network investments or Modifications for TV services, including Wi-Fi Networks",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                      <img
                        src={item.imgSrc}
                        alt="Icon"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="md:col-span-1 flex justify-center">
                <Image
                  src="/slider1updated.png"
                  alt="ULKA TV Logo"
                  width={800}
                  height={600}
                  className="max-w-[212%] sm:w-[80%] md:w-[212%] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 gap-4">
          <div className="grid grid-cols-1 gap-4 w-full md:w-[43%]">
            <div className="relative h-40 w-[72%] sm:h-64 sm:w-full md:h-[32rem] md:w-[50rem] mx-auto">
              <Image
                src="/tvweb.png"
                alt="Family watching TV"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>


          <div className="w-full md:w-[43%] text-center md:text-left mt-4 md:mt-0">
            <div className="max-w-[700px] mx-auto">
              <p className="text-gray-700 mb-4">
                All services licensed by M.I.B which includes ULKA TV are exempt from AGR License Fee as per Amendment No.20-271/2010 AS-I(Vol2.-V) Dated 25/10/2021 of DOT.
              </p>
              <p className="text-gray-700 mb-4">
                ISP can save AGR License Fee by giving discount in Internet service instead of discount in ULKA TV.
              </p>
              <p className="text-gray-700 mb-4">
                ULKA TV bundled packages helps ISP to reach smaller towns, rural villages and take over DTH clients also.
              </p>
              <p className="text-gray-700 mb-4">
                Bundled Packages of Internet and ULKA TV extends Internet customer base to Television-only houses also.
              </p>
              <p className="text-gray-700 mb-4">
                ULKA TV Bundled Packages can be offered at lower rates compared to individual packs for Internet and Television.
              </p>
              <p className="text-gray-700 mb-4">
                New connections will be easier without STB. Multiple connections in each house is easy from a single WiFi Router using ULKA Lite App in Smart TVs.
              </p>
              <p className="text-gray-700 mb-4">
                Ready to start mobile TV service with pay channels using ULKA Mini in Smart Phones.
              </p>
              <p className="text-gray-700 mb-4">
                Existing Hybrid STBs of DTH and Cable TV can be used with ULKA Lite from Google TV Playstore.
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Aboutpage;

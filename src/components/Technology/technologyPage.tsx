// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from 'framer-motion';

// const TechnologyPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const observerOptions: IntersectionObserverInit = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.2,
//     };

//     const observerCallback: IntersectionObserverCallback = (entries) => {
//       entries.forEach((entry: IntersectionObserverEntry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     const target = document.querySelector("#animate-section");

//     if (target) observer.observe(target);

//     return () => {
//       if (target) observer.unobserve(target);
//     };
//   }, []);

//   const cards = [
//     {
//       img: "/2.png",
//       title: "Our IPTV Infrastructure is Audited by TRAI empaneled Auditors for Regulatory Compliance",
//     },
//     {
//       img: "/5.png",
//       title: "Compliance and Subscription Audits were conducted by multiple Auditors including BECIL, KPMG, Delloite, and others",
//     },
//     {
//       img: "/ulka-1.png",
//       title: "Our Smart Apps, ULKA Lite and ULKA Mini were also Audited for Regulatory Compliance along with our Smart STBs.",
//     },
//   ];

//     const testimonials = [
//     {
//       name: 'Enhanced Connectivity:',
//       feedback:
//         "Bundled packages provide rural residents with both internet connectivity and IPTV services in a single offering. This ensures that individuals have access to information, entertainment, and services through a reliable and convenient connection.",
//     },
//     {
//       name: 'Digital Literacy and Skill Development:',
//       feedback:
//         'Bundled packages encourage residents to engage with technology, leading to improved digital literacy and skills that are increasingly relevant in today s world.',
//     },
//     {
//       name: 'Technology Adoption:',
//       feedback:
//         'Bundled packages introduce technology to rural communities, encouraging the use of Smartphones, Smart TVs, and other devices. This can have long-term benefits in terms of technology adoption and adaptation.',
//     },
//   ];
  
//   return (
//     <div className="bg-white w-full p-10">
//       <div className="mt-[5rem] flex justify-center">
//         <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] my-8 py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg group duration-300">
//           Technology
//         </h2>
//       </div>

//       <section className="text-center container mx-auto mt-[2rem] flex justify-center items-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
//           <motion.div
//             className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-3 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
//               ULKA distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network.
//             </h3>
//           </motion.div>

//           <motion.div
//             className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-3 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
//               ULKA has developed its own CDN system and is not dependent on third-party vendors. It offers regional advertisements to save trunk line capacity.
//             </h3>
//           </motion.div>

//           <motion.div
//             className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-5 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
//               Rcast has developed its own CDN system with a minimum trunk line requirement, offering cost-effective connectivity.
//             </h3>
//           </motion.div>

//           <motion.div
//             className="bg-gray-300 shadow-lg border-gray-100 rounded-[20px] p-5 md:p-8 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-red-300 hover:border-pink-500"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-[20px] mt-4 text-[#032963] hover:text-white">
//               150-300 Mbps for 250 SD+16 HD Channels and 500-1000 Mbps for all 700 Channels.
//             </h3>
//           </motion.div>
//         </div>
//       </section>

//       <div>
//       <div className="flex justify-center mt-8">
//         <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-6">
//          Regulatory Compliance
//         </h2>
//       </div>

//       <div
//         className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mb-8 xl:gap-[10rem] md:gap-[1rem] md:space-x-6 space-y-6 md:space-y-0"
//         id="animate-section"
//       >
//         <div
//           className={`md:w-2/5 w-full h-full flex items-center justify-center ${
//             isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
//           }`}
//         >
//           <Image
//             src="/ottp.png"
//             alt="Team Meeting"
//             width={1200}
//             height={400}
//             className="object-contain xl:max-w-[830px] md:max-w-[830px] h-auto transition-opacity duration-1000 ease-in-out"
//           />
//         </div>

//         <div
//           className={`md:w-3/2 w-full p-6 md:p-8 h-full ${
//             isVisible ? "opacity-100 animate-slide-right" : "opacity-0"
//           }`}
//         >
//           <h2 className="font-bold leading-8 text-black text-lg md:text-xl space-y-4">
//             <p>
//               •  IPTV is licensed by M.I.B and is exempted from AGR using existing local broadband networks. AGR is payable for OTT applications.
//             </p>
//             <p>
//               • All OTT applications use global streaming servers like Amazon and Akamai, consuming internet bandwidth, making it expensive.
//             </p>
//             <p>
//               • Distribution of licensed satellite channels is permitted only through licensed operators (IPTV, DTH, etc.).
//             </p>
//             <p>
//               • M.I.B is in the process of withdrawing live satellite channels from OTT platforms like Disney Hotstar and Sony LIV.
//             </p>
//           </h2>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-left {
//           0% {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slide-right {
//           0% {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         .animate-slide-left {
//           animation: slide-left 2s ease-out forwards;
//         }

//         .animate-slide-right {
//           animation: slide-right 2s ease-out forwards;
//         }
//       `}</style>
//     </div>


//             <div className="bg-white py-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
//               Bundling IPTV and INTERNET Packages Help Internet Service Providers ?
//             </h2>
//             <div className="grid gap-8 md:grid-cols-3 mt-[5rem]">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-white shadow-lg rounded-lg p-6 relative text-gray-900 hover:bg-black hover:text-white flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   <div className="absolute -top-5 flex items-center justify-center w-12 h-12 bg-red-900 text-white rounded-full transition-colors duration-300">
//                     <span className="text-2xl">&ldquo;</span>
//                   </div>

//                   <h3 className="text-xl font-bold mt-8">{testimonial.name}</h3>

//                   <p className="text-lg mt-4">{testimonial.feedback}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       <div className="bg-white text-black flex items-center mt-[5rem] mb-8">
//         <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
//           <div className="md:w-1/2">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="bg-black hover:bg-red-600 text-white font-bold rounded-full w-4 h-4 flex justify-center items-center"></div>
//               <h2 className="text-2xl md:text-3xl font-semibold">IPTV vs Cable TV</h2>
//             </div>
//             <hr className="border-black my-4" />
//             <p className="mb-2 font-bold text-xl">
//               Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for ULKA TV.
//             </p>
//             <hr className="border-black my-4" />
//             <p className="mb-2 text-lg font-bold">
//               Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k against ULKA TV
//               CDN (Streaming Server) at Rs.15k-50k.
//             </p>
//             <hr className="border-black my-4" />
//             <p className="mb-2 font-bold text-xl">
//               Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.
//             </p>
//             <hr className="border-black my-4" />
//             <p className="mb-2 text-lg font-bold">
//               ULKA TV distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.
//             </p>
//             <hr className="border-black my-4" />
//             <button className="mt-2 px-6 py-3 bg-black text-red-600 font-bold rounded hover:bg-red-600 hover:text-white">
//               ORDER NOW
//             </button>
//           </div>

//           <div className="md:w-1/2 flex justify-center items-center">
//             <Image
//               src="/cabletv.png"
//               alt="Ulka TV"
//               width={500}
//               height={400}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="p-6 bg-white">
//         <div className="flex justify-center">
//           <h2 className="font-bold text-lg sm:text-lg md:text-xl text-white bg-[#0a0f2c] py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg border-2 border-transparent group duration-300 mb-6">
//             Regulatory Compliance
//           </h2>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6">
//   {cards.map((card, index) => (
//     <div
//       key={index}
//       className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[400px] md:w-[450px] lg:w-[400px] group hover:bg-[#333333] hover:text-white transition-all duration-300"
//     >
//       <div className="relative w-full" style={{ height: "250px" }}>
//         <Image
//           src={card.img}
//           alt={card.title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-t-lg"
//         />
//       </div>

//       <div className="p-3">
//         <h3 className="text-base font-semibold">{card.title}</h3>
//       </div>
//     </div>
//   ))}
// </div>

//       </div>

//     </div>
//   );
// };

// export default TechnologyPage;



"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = document.querySelector("#animate-section");

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const cards = [
    {
      img: "/2.png",
      title:
        "Our IPTV Infrastructure is Audited by TRAI empaneled Auditors for Regulatory Compliance",
    },
    {
      img: "/5.png",
      title:
        "Compliance and Subscription Audits were conducted by multiple Auditors including BECIL, KPMG, Delloite, and others",
    },
    {
      img: "/ulka-1.png",
      title:
        "Our Smart Apps, ULKA Lite and ULKA Mini were also Audited for Regulatory Compliance along with our Smart STBs.",
    },
  ];

  const testimonials = [
    {
      name: "Enhanced Connectivity:",
      feedback:
        "Bundled packages provide rural residents with both internet connectivity and IPTV services in a single offering. This ensures that individuals have access to information, entertainment, and services through a reliable and convenient connection.",
    },
    {
      name: "Digital Literacy and Skill Development:",
      feedback:
        "Bundled packages encourage residents to engage with technology, leading to improved digital literacy and skills that are increasingly relevant in today s world.",
    },
    {
      name: "Technology Adoption:",
      feedback:
        "Bundled packages introduce technology to rural communities, encouraging the use of Smartphones, Smart TVs, and other devices. This can have long-term benefits in terms of technology adoption and adaptation.",
    },
  ];

  return (
    <div className="bg-white w-full p-6 sm:p-10">
      {/* Section Title */}
      <div className="mt-[5rem] flex justify-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white bg-[#0a0f2c] my-8 py-2 px-6 rounded-lg shadow-lg">
          Technology
        </h2>
      </div>

      {/* Technology Cards */}
      <section className="text-center container mx-auto mt-[2rem] flex justify-center items-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            "ULKA distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network.",
            "ULKA has developed its own CDN system and is not dependent on third-party vendors. It offers regional advertisements to save trunk line capacity.",
            "Rcast has developed its own CDN system with a minimum trunk line requirement, offering cost-effective connectivity.",
            "150-300 Mbps for 250 SD+16 HD Channels and 500-1000 Mbps for all 700 Channels.",
          ].map((text, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shadow-lg p-6 md:p-8 text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-red-600 hover:via-black hover:to-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#032963] hover:text-white leading-relaxed">
                {text}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <div
  className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-16 mt-[4rem]"
  id="animate-section"
>
  {/* Image Section */}
  <div
    className={`md:w-1/2 w-full flex items-center justify-center ${
      isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
    }`}
  >
    <Image
      src="/ottp.png"
      alt="Team Meeting"
      width={750}   // 🔼 width penchanu
      height={500}  // 🔼 height penchanu
      className="object-contain h-auto transition-opacity duration-1000 ease-in-out"
    />
  </div>

  {/* Text Section */}
  <div
    className={`md:w-1/2 w-full p-6 md:p-8 ${
      isVisible ? "opacity-100 animate-slide-right" : "opacity-0"
    }`}
  >
    <h2 className="font-bold leading-8 text-black text-lg md:text-xl space-y-4">
      <p>
        • IPTV is licensed by M.I.B and is exempted from AGR using existing
        local broadband networks. AGR is payable for OTT applications.
      </p>
      <p>
        • All OTT applications use global streaming servers like Amazon and
        Akamai, consuming internet bandwidth, making it expensive.
      </p>
      <p>
        • Distribution of licensed satellite channels is permitted only through
        licensed operators (IPTV, DTH, etc.).
      </p>
      <p>
        • M.I.B is in the process of withdrawing live satellite channels from
        OTT platforms like Disney Hotstar and Sony LIV.
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


      {/* Testimonials */}
      <div className="bg-white my-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Bundling IPTV and INTERNET Packages Help Internet Service Providers?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-[3rem]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl p-6 relative text-gray-900 hover:from-black hover:to-red-600 hover:text-white flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute -top-5 flex items-center justify-center w-12 h-12 bg-red-900 text-white rounded-full">
                  <span className="text-2xl">&ldquo;</span>
                </div>
                <h3 className="text-xl font-bold mt-8">{testimonial.name}</h3>
                <p className="text-lg mt-4">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IPTV vs Cable TV */}
<div className="bg-white text-black flex items-center mt-[5rem] mb-8">
  <div className="container mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row items-center gap-8">
    {/* Left Section */}
    <div className="md:w-1/2">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-black text-white font-bold rounded-full w-4 h-4"></div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          IPTV vs Cable TV
        </h2>
      </div>
      <hr className="border-black my-4" />
      <p className="mb-2 font-bold text-lg">
        Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line
        against 310mbps to 1Gbps BW for ULKA TV.
      </p>
      <hr className="border-black my-4" />
      <p className="mb-2 font-bold text-lg">
        Cable TV requires Edge QAM modulator and EDFA at each Distribution
        Location costing Rs.300k-400k against ULKA TV CDN (Streaming
        Server) at Rs.15k-50k.
      </p>
      <hr className="border-black my-4" />
      <p className="mb-2 font-bold text-lg">
        Distribution of Digital Cable TV requires dedicated Dark fiber
        Network and WDM couplers and Decouplers which adds to the CAPEX of
        distribution.
      </p>
      <hr className="border-black my-4" />
      <p className="mb-2 font-bold text-lg">
        ULKA TV distributes the IPTV signal in existing local broadband
        Networks and cost of dedicated high power laser network can be
        avoided.
      </p>
      <hr className="border-black my-4" />
      <button className="mt-2 px-6 py-3 bg-black text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
        ORDER NOW
      </button>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 flex justify-center items-center">
      <Image
        src="/cabletv.png"
        alt="Ulka TV"
        width={500}   // ✅ Width penchanu
        height={150}  // ✅ Height penchanu
        className="object-contain"
      />
    </div>
  </div>
</div>

{/* Final Compliance Cards */}
<div className="p-6 bg-white">
  <div className="container mx-auto max-w-screen-xl">
    <div className="flex justify-center">
      <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white bg-[#0a0f2c] py-2 px-6 rounded-lg shadow-lg mb-6">
        Regulatory Compliance
      </h2>
    </div>

    <div className="flex flex-wrap justify-center gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-xl shadow-lg overflow-hidden w-full sm:w-[350px] md:w-[400px] transition-all duration-500 hover:from-red-600 hover:to-black hover:text-white hover:scale-105"
        >
          <div className="relative w-full h-[250px]">
            <Image
              src={card.img}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base md:text-lg font-semibold leading-relaxed">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default TechnologyPage;

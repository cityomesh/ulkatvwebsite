// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { FaStar } from "react-icons/fa";

// const SmartTvPage: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);

//   const images = [
//     { src: "/slider6.png", alt: "Smart TV" },
//     { src: "/slider5.png", alt: "Smart TV" },
//     { src: "/tvweb.png", alt: "tvweb.png" },

//     { src: "/slide2.png", alt: "Smart TV" },
//     { src: "/slider1updated.png", alt: "Smart TV" },
//     { src: "/png.png", alt: "Smart TV" },
//     { src: "/slide1.png", alt: "Smart TV" },

//   ];

//   const staticImages = [
//     { src: "/bsnl.png", alt: "SDC Logo" },
//     { src: "/partner-slider2.png", alt: "SDC1 Logo" },
//     { src: "/cityonline.png", alt: "SDC2 Logo" },
//     { src: "/fastnet.png", alt: "SDC3 Logo" },
//     { src: "/gnet.png", alt: "SDC4 Logo" },
//     { src: "/onetfiber.png", alt: "SDC5 Logo" },
//   ];
//   const handleCardClick = (index: number) => {
//     setHighlightedCards(prev => {
//       const updatedCards = [...prev];
//       updatedCards[index] = !updatedCards[index];
//       return updatedCards;
//     });
//   };


//   const texts = [
//     {
//       title: "PARTNERED WITH RAILTEL.",
//       description:
//         "We are currently operational in Andhra Pradesh, Telangana, Karnataka, Kerala, Odisha, Chhattisgarh, West Bengal, Bihar, Jharkhand, East U.P, Assam, Meghalaya, Tripura, Nagaland, Mizoram, Arunachal Pradesh, Manipur.",
//       buttonTexts: ["Contact Us"],
//     },
//     {
//       title: "PARTNERED WITH BSNL.",
//       description:
//         "We are fully operational in Andhra Pradesh & about to launch in Karnataka.",
//       buttonTexts: ["Contact Us"],
//     },
//     {
//       title: "WELCOME TO FUTURE!.",
//       description:
//         "ULKA TV is a leading IPTV subscription provider across India. India's 1st Solution with MPEG-DASH and HEVC codec with unicast technology which provides 800+ Indian channels.",
//       buttonTexts: ["Channel List", "Contact Us"],
//     },
//     {
//       title: "ENJOY 4K UHD STREAMING.",
//       description:
//         "With our ULKA TV Smart Box, your HDTV now becomes an efficient interactive Home PC that can be enjoyed by the whole family.",
//       buttonTexts: ["Request Demo", "Contact Us"],
//     },
//     {
//       title: "ALL MAJOR BROADCASTERS.",
//       description:
//         "Watch LIVE TV with Over 1000+ exclusive Indian licensed channels with all major broadcasters like Star, Sony, ETV, Turner, Times Now, Discovery, Sun Network, TVTN etc.",
//       buttonTexts: ["View Packages"],
//     },
//   ];

//   return (
//     <>
//     <div
//       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//       style={{ backgroundImage: `url('/Screenshot from 2025-01-19 15-30-26.png')` }}
//     >
//       {/* <div className="flex flex-col items-center justify-center px-4 mt-[22rem]">
//         <h1 className="text-4xl text-center text-black font-semibold leading-tight sm:mt-0">
//           We’re India's Leading IPTV Solution Provider
//         </h1>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mt-[4rem] sm:mt-[2rem] md:mt-[6rem]">
//           <div className="p-3 mb-2 transition-all">
//             <p className="text-2xl font-bold text-black">
//               {texts[activeIndex]?.title}
//             </p>
//           </div>
//           <div className="p-3 mb-2 transition-all">
//             <p className="text-lg font-bold text-black">
//               {texts[activeIndex]?.description}
//             </p>
//           </div>
//           <div className="p-3">
//             {activeIndex === 0 || activeIndex === 1 ? (
//               <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
//                 Contact Us
//               </button>
//             ) : activeIndex === 2 ? (
//               <>
//                 <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all mr-2">
//                   Channel List
//                 </button>
//                 <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
//                   Contact Us
//                 </button>
//               </>
//             ) : activeIndex === 3 ? (
//               <>
//                 <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all mr-2">
//                   Request Demo
//                 </button>
//                 <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
//                   Contact Us
//                 </button>
//               </>
//             ) : (
//               <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all">
//                 View Packages
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="flex">
//           <Carousel
//             showThumbs={true}
//             autoPlay
//             infiniteLoop
//             interval={1000}
//             onChange={(index) => setActiveIndex(index)}
//           >
//             {images.map((image, index) => (
//               <div key={index} className="flex justify-center items-center mt-8">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   width={500}
//                   height={500}
//                   className="rounded-2xl mt-4"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div> */}
//       <div className="bg-white mt-[70rem]">
//         <p className="text-[#2B1C50] text-[16px] sm:text-[20px] xl:text-[32px] text-center font-semibold mt-8 mb-4">
//           <span className="font-bold text-black">Our Partners</span>
//         </p>
//         <div className="flex overflow-hidden xl:max-w-[1160px] max-w-full mb-8 space-x-4 sm:space-x-8 lg:space-x-16">
//           <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//             {staticImages.map((image, index) => (
//               <Image
//                 key={index}
//                 src={image.src}
//                 alt={image.alt}
//                 height={128}
//                 width={200}
//                 className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//               />
//             ))}
//           </div>
//           <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//             {staticImages.map((image, index) => (
//               <Image
//                 key={index}
//                 src={image.src}
//                 alt={image.alt}
//                 height={128}
//                 width={200}
//                 className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//               />
//             ))}
//           </div></div>
//         </div>
//         <style jsx>{`
//           @keyframes loop-scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-loop-scroll {
//             display: flex;
//             animation: loop-scroll 20s linear infinite;
//           }
//         `}</style>
//       </div>

//         <div className="bg-white mt-[14rem] mb-8">
//           <p className="text-[#2B1C50] text-[16px] xl:text-[28px] text-center font-semibold mt-6 mb-8">
//             <span className="font-bold text-black">Convert any TV into a Smart TV with ULKA TV STB</span>
//           </p>
//           <p className="text-[#2B1C50] text-[16px] text-center mb-8">
//             <span className="font-bold text-gray-500">With ULKA TV, you can watch your favorite channels LIVE in Ultra High Definition! Highly stable and reliable IPTV solution in India!
//             </span>
//           </p>
//           <div className="flex justify-center mt-6">
//             <a
//               href="https://store.ulka.tv"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-red-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-black transition"
//               title="ORDER NOW"
//             >
//               <span>ORDER NOW</span>
//             </a>
//           </div>
//         </div>

//         <section className="bg-white mb-8 mt-[3rem]">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-16 space-y-12 lg:space-y-0">
//             {/* <div className="w-full relative">
//                 <div
//                   className="w-[54rem] h-[32rem] bg-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
//                   style={{ backgroundImage: `url('/tvulka.png')` }}
//                 ></div>
                
//                 <div
//                   className="absolute top-0 right-0 w-[16rem] h-[25rem] bg-cover mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
//                   style={{ backgroundImage: "url('/nm.png')" }}
//                 ></div>
//               </div> */}
              
//               <div className="w-full relative">
//               <div
//                 className="w-[54rem] h-[32rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 overflow-hidden"
//               >
//                 <video
//                   className="w-full h-full object-cover"
//                   src="/intro.mp4"
//                   autoPlay
//                   loop
//                   muted
//                 ></video>
//               </div>
//                 <div
//                   className="absolute top-0 right-0 w-[16rem] h-[25rem] bg-cover mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
//                   style={{ backgroundImage: "url('/nm.png')" }}
//                 ></div>
//               </div>
//                 <div className="w-full lg:w-1/2">
//                   <div className="mb-8">
//                     <span className="block mb-4 border-t-4 border-gray-500 w-10"></span>
//                     <h3 className="text-4xl font-bold text-red-500 mb-6">TOTALLY FEASIBLE!</h3>
//                     <h4 className="text-xl font-thin text-gray-600 leading-relaxed">
//                       Manage your account seamlessly with myULKA Customer App. Download myULKA app for secure, scalable, and smart experience.
//                     </h4>
//                   </div>

//                   <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-2 w-[20rem]transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
//                   <blockquote className="text-gray-800">
//                     With myULKA TV Customer app, we have enabled one-click login for our customers. Customers also have the option to purchase one of our 
//                     pre-built Ulka bundles or customize the a-la-carte options that make watching Indian Live TV Channels affordable.
//                   </blockquote>
//                 </div>
//                 <div className="flex justify-start">
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//                     target="_blank"
//                     className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-black"
//                     title="Download myULKA TV App Now"
//                   >
//                     Download myULKA TV App Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//     <div className="bg-red-600 text-white flex items-center mt-[8rem] relative mb-8">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10 mt-[5rem] mb-14">
//         {/* Left Section */}
//         <div className="md:w-1/2">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="bg-white hover:bg-black text-red-600  hover:text-white font-bold rounded-full w-12 h-12 flex justify-center items-center">
//               WHY
//             </div>
//             <h2 className="text-2xl md:text-4xl font-semibold">ULKA IS SPECIAL?</h2>
//           </div>
//           <hr className="border-white my-4" />
//           <p className="mb-6">
//             We offer the Most stable IPTV Service across India to Watch LIVE TV.
//           </p>
//           <hr className="border-white my-4" />
//           <ul className="list-none space-y-3">
//             <li className="hover:bg-transparent">- NO weather disruptions</li>
//             <li className="hover:bg-transparent">- NO construction fittings required</li>
//             <li className="hover:bg-transparent">- NO physical dish to be installed</li>
//             <li className="hover:bg-transparent">- NO extra fitting expenses</li>
//             <li className="hover:bg-transparent">- NO wire fittings needed</li>
//           </ul>
//           <hr className="border-white my-4" />
//           <button className="mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black">
//             ORDER NOW
//           </button>
//           <hr className="border-white my-8 mb-8" />
//         </div>
//       </div>
//       <div className="absolute top-0 right-0 h-full mb-8">
//         <Image
//           src="/mainulkaimage.png"
//           alt="Ulka TV"
//           width={800}
//           height={900}
//           className="h-full object-cover mb-8"
//         />
//       </div>
//     </div>


//     <section className="pt-24 pb-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition overflow-hidden">
//             <Link
//               href="https://ulka.tv/partner-registration"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10">
//                 <Image
//                   src="/quote1.png"
//                   width={100}
//                   height={100}
//                   alt="watch ulka tv"
//                   className="absolute top-0 right-0 mt-8"
//                 />
//                 <h3 className="text-xl font-semibold">Want ULKA TV Android Box for test?</h3>
//                 <p className="mt-4 text-sm leading-relaxed">
//                   Share your details to us via mail and <br />
//                   let’s serve <br />LIVE TV across India!
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Second Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition overflow-hidden">
//             <Link
//               href="https://ulka.tv/contact-us"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10">
//                 <Image
//                   src="/hb-hiring.png"
//                   width={200}
//                   height={200}
//                   alt="developers hiring"
//                   className="absolute top-0 right-0"
//                 />
//                 <h3 className="text-xl font-semibold">Developers hiring: ON</h3>
//                 <h4 className="text-lg mt-2">Skilled Developers wanted!</h4>
//                 <p className="mt-4 text-sm leading-relaxed">
//                   Send your kickass resume<br /> on partners@ulka.tv
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Third Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">Download MyULKA TV Customer App</h3>
//                 <p className="mt-4 text-sm leading-relaxed">
//                   Enable One-Click QR Login, Manage your packs / subscriptions, Customer Care Portal - all in one place.
//                 </p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>

//       <section className="bg-red-700 py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-white text-2xl font-bold mb-6">Channel Partners</h3>
//             <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
//           <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
//           <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
//           <Image src="/timesnowlogo.png" alt="Times Now" width={200} height={200} />
//           <Image src="/news18.png" alt="News 18" width={200} height={200} />
//           <Image src="/etvcut.png" alt="ETV" width={200} height={200} />
//           <Image src="/timesnowlogo.png" alt="Another Logo" width={200} height={200} />
//           <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
//           <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
//         </div>
//           </div>

//           {/* Right Column: Testimonials */}
//           <div>
//             <div className="space-y-10">
//               <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
//                 <p className="italic mb-4">
//                   “Without question ULKA TV is the best IPTV Solution you will ever need. This product is truly a work of art. Support has also been exceptional.”
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-white rounded-full">
//                    <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>
//                    </div>
//                   <div>
//                     <h4 className="font-bold">Surekha S</h4>
//                     <p className="text-sm mb-4">GENERAL MANAGER</p>
//                       <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                       </div>
//                     </div>

//                 </div>
//               </div>

//               <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
//                 <p className="italic mb-4">
//                   “Best IPTV Solution to watch LIVE TV with almost all channels.. Amazing Simply best and minimalistic Android TV Box. Cheers ULKA Team.”
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-white rounded-full">
//                   <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>

//                   </div>
//                   <div>
//                     <h4 className="font-bold">Shankar Gupta</h4>
//                     <p className="text-sm mb-4">CFO, NewaveDigital247</p>
//                     <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


//       <div className="mt-16 text-center mb-8">
//         <h3 className="text-2xl font-bold mb-2">ARE YOU ULKA TV PARTNER?</h3>
//         <p className="text-gray-300 mb-4">Easily manage your ULKA TV Subscribers</p>
//         <button className="border-2 border-red-600 text-black px-6 py-2 rounded hover:bg-white hover:text-red-600">
//           PARTNER LOGIN
//         </button>
//       </div>
//       </>
//       );
//     };

// export default SmartTvPage;





// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { FaStar } from "react-icons/fa";

// const SmartTvPage: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
//   const staticImages = [
//     { src: "/patone.png", alt: "SDC Logo" },
//     { src: "/ptatwo.png", alt: "SDC1 Logo" },
//     { src: "/pta3.png", alt: "SDC2 Logo" },
//     { src: "/fastnet.png", alt: "SDC3 Logo" },
//     { src: "/gnet.png", alt: "SDC4 Logo" },
//     { src: "/onetfiber.png", alt: "SDC5 Logo" },
//     { src: "/ulkaone.png", alt: "Ulka One" },
//     { src: "/ulkatwo.png", alt: "Ulka Two" },
//     { src: "/ulkathree.png", alt: "Ulka Three" },
//     { src: "/ulkafour.png", alt: "Ulka four" },
//     { src: "/ulkafive.png", alt: "Ulka five" },
//     { src: "/ulkasix.png", alt: "Ulkasix" },
//     { src: "/ulkaseven.png", alt: "ulkaseven" },
//     { src: "/ulka8.png", alt: "ulka8" },
//     { src: "/ulkanine.png", alt: "ulkanine" },
//     { src: "/ulkaten.png", alt: "ulkaten" },
//     { src: "/ulka11.png", alt: "ulka11" },
//     { src: "/ulka12.jpg", alt: "ulka12" },
//     { src: "/ulka13.png", alt: "ulka13" },
//   ];
  
//   return (
//     <div className="mb-8">
//     {/* <div
//       className="min-h-screen bg-gradient-to-r from-[#FF4E50] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//       // style={{ backgroundImage: `url('/qe.jpeg ')` }}
//     > */}
//       {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/onepn.png')` }}
//     > */}
//     <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/testo.webp')` }}
//     >
//     {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/we.webp')` }}
//     > */}
//      {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/ter.jpg')` }}
//     > */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl">
//         {/* Left Section */}
//         <div className="text-center md:text-left">
//         <p className="text-2xl text-white sm:text-4xl md:text-5xl font-extrabold leading-relaxed sm:leading-snug">
//             <span className="block mt-4 mb-6">WELCOME TO FUTURE!
//             </span>
//           </p>
//           <h3 className="text-white uppercase text-xl sm:text-xl md:text-xl tracking-wide font-bold mb-4 leading-snug">
//             <span className="block mt-4">ULKA TV is a leading IPTV subscription provider across India.
//             </span>
//             <span className="block mt-4"> India's 1st Solution with MPEG-DASH and HEVC codec with unicast technology</span>
//             <span className="block mt-4">which provides 800+ Indian channels.</span>
//           </h3>
//           <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-base">
//               Channel List
//             </button>
//             <button className="bg-black border border-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right Section with TV-like Video */}
//         <div className="w-full flex justify-center">
//           <div
//             className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-w-16 aspect-h-9"
//           >
//             <img
//               className="w-full h-full object-cover"
//               src="/new.png"
//               alt="New"
//             />
//           </div>
//         </div>

//       </div>
//       </div>


//       <div className="bg-white max-w-[70rem] items-center justify-center mx-auto mt-[-11rem] mb-8">
//           <p className="text-[#2B1C50] text-[16px] sm:text-[20px] xl:text-[32px] text-center font-semibold mt-8">
//             <p className="font-bold text-black py-8">Our Partners</p>
//           </p>
//           <div className="flex justify-center items-center overflow-hidden xl:max-w-[1160px] max-w-full mb-8 space-x-4 sm:space-x-8 lg:space-x-16">
//             <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//               {staticImages.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image.src}
//                   alt={image.alt}
//                   height={128}
//                   width={200}
//                   className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//                 />
//               ))}
//             </div>

//             <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//               {staticImages.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image.src}
//                   alt={image.alt}
//                   height={128}
//                   width={200}
//                   className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes loop-scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-loop-scroll {
//             display: flex;
//             animation: loop-scroll 20s linear infinite;
//           }
//         `}</style>





//     <section className="pt-24 pb-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">Major PSUs BSNL and Railtel are our Network
//                 Partners for IPTV Services.</h3>
//               </div>
//             </Link>
//           </div>

//           {/* Second Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">More than 20 National and Regional ISPs are
//                   engaged in promoting and distributing our IPTV
//                   Services covering entire India.</h3>
//               </div>
//             </Link>
//           </div>

//           {/* Third Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">Some enthusiastic LCOs also are participating in
//                   IPTV distribution hosting Mini CDNs integrated to
//                   their FTTH equipment using IPTV VLAN.</h3>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>


//       <section className="bg-white mb-8 mt-[4rem]">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-16 space-y-12 lg:space-y-0">
//             <div className="w-full relative">
//                 <div
//                   className="w-[52rem] h-[34rem] bg-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
                  
//                 >
//                 <div className="w-full flex justify-center">
//                     <div
//                       className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-w-16 aspect-h-9 transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden border-[15px] border-gray-400 rounded-lg shadow-xl"
//                     >
//                       <video
//                         className="w-full h-full object-cover"
//                         src="/intro.mp4"
//                         autoPlay
//                         loop
//                         muted
//                       ></video>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div
//                   className="absolute top-0 right-0 w-[16rem] h-[25rem] bg-cover mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 mb-8"
//                   style={{ backgroundImage: "url('/nm.png')" }}
//                 ></div>
//               </div>
//                 <div className="w-full lg:w-1/2">
//                   <div className="mb-8">
//                     <span className="block mb-4 border-t-4 border-gray-500 w-10"></span>
//                     <h3 className="text-4xl font-bold text-red-500 mb-6">TOTALLY FEASIBLE!</h3>
//                     <h4 className="text-xl font-thin text-gray-600 leading-relaxed">
//                       Manage your account seamlessly with myULKA Customer App. Download myULKA app for secure, scalable, and smart experience.
//                     </h4>
//                   </div>

//                   <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-2 w-[20rem]transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
//                   <blockquote className="text-gray-800">
//                     With myULKA TV Customer app, we have enabled one-click login for our customers. Customers also have the option to purchase one of our 
//                     pre-built Ulka bundles or customize the a-la-carte options that make watching Indian Live TV Channels affordable.
//                   </blockquote>
//                 </div>
//                 <div className="flex justify-start">
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//                     target="_blank"
//                     className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-black"
//                     title="Download myULKA TV App Now"
//                   >
//                     Download myULKA TV App Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>



//         <div className="bg-red-600 text-white flex items-center mt-[8rem] relative mb-8">
//           <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10 mt-[5rem] mb-14">
//             {/* Left Section */}
//             <div className="md:w-1/2">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="bg-white hover:bg-black text-red-600  hover:text-white font-bold rounded-full w-4 h-4 flex justify-center items-center">
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-semibold">ULKA TV for Internet Service Providers</h2>
//               </div>
//               <hr className="border-white my-4" />
//               <p className="mb-2 font-bold text-xl">
//                 TELEVISION VIEWERSHIP
//               </p>
//               <p className="mb-2 text-lg">
//                Television is the largest source of media in India by reaching approximately reaching over 500M households.
//               </p>
//               <hr className="border-white my-4" />
//               <p className="mb-2 font-bold text-xl">
//                DIGITAL INCLUSION
//               </p>
//               <p className="mb-2 text-lg">
//               Expanding internet connectivity through IPTV can bridge the digital divide between urban and rural areas. Rural residents can access information, entertainment, and services that were previously unavailable to them, leading to a more inclusive society.
//               </p>
//               <hr className="border-white my-4" />
//               <p className="mb-2 font-bold text-xl">
//                 BUNDLE PACKAGES TO PROMOTE INTERNET CONNECTIONS
//               </p>
//               <p className="mb-2 text-lg">
//                 Offering bundled packages that include both internet connectivity and IPTV services at reasonable rates, making it more attractive for urban or rural customers since they don't have to pay separately for Television connections.
//               </p>
//               <hr className="border-white my-4" />
//               <button className="mt-2 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black">
//                 ORDER NOW
//               </button>
//             </div>
//           </div>
//           <div className="absolute top-0 right-0 h-full mb-8">
//             <Image
//               src="/mainulkaimage.png"
//               alt="Ulka TV"
//               width={1100}
//               height={900}
//               className="h-full object-cover mb-8"
//             />
//           </div>
//         </div>

//       </div>

//   );
// };

// export default SmartTvPage;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { FaStar } from "react-icons/fa";

// const SmartTvPage: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
//   const staticImages = [
//     { src: "/patone.png", alt: "SDC Logo" },
//     { src: "/ptatwo.png", alt: "SDC1 Logo" },
//     { src: "/pta3.png", alt: "SDC2 Logo" },
//     { src: "/fastnet.png", alt: "SDC3 Logo" },
//     { src: "/gnet.png", alt: "SDC4 Logo" },
//     { src: "/onetfiber.png", alt: "SDC5 Logo" },
//     { src: "/ulkaone.png", alt: "Ulka One" },
//     { src: "/ulkatwo.png", alt: "Ulka Two" },
//     { src: "/ulkathree.png", alt: "Ulka Three" },
//     { src: "/ulkafour.png", alt: "Ulka four" },
//     { src: "/ulkafive.png", alt: "Ulka five" },
//     { src: "/ulkasix.png", alt: "Ulkasix" },
//     { src: "/ulkaseven.png", alt: "ulkaseven" },
//     { src: "/ulka8.png", alt: "ulka8" },
//     { src: "/ulkanine.png", alt: "ulkanine" },
//     { src: "/ulkaten.png", alt: "ulkaten" },
//     { src: "/ulka11.png", alt: "ulka11" },
//     { src: "/ulka12.jpg", alt: "ulka12" },
//     { src: "/ulka13.png", alt: "ulka13" },
//   ];

//   const testimonials = [
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
//     <div className="mb-8 min-h-screen  mx-auto">
//     <div
//         className="h-[93vh] bg-gradient-to-r from-[#FF4E50] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4"
//       >

//     {/* <div
//       className="min-h-screen bg-gradient-to-r from-[#FF4E50] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//       // style={{ backgroundImage: `url('/qe.jpeg ')` }}
//     > */}
//       {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/onepn.png')` }}
//     > */}
//     {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/testo.webp')` }}
//     > */}
//     {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/we.webp')` }}
//     > */}
//      {/* <div
//        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
//        style={{ backgroundImage: `url('/ter.jpg')` }}
//     > */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl">
//         {/* Left Section */}
//         <div className="text-center md:text-left">
//         <p className="text-2xl text-white sm:text-4xl md:text-5xl font-extrabold leading-relaxed sm:leading-snug">
//             <span className="block mt-4 mb-6">WELCOME TO FUTURE!
//             </span>
//           </p>
//           <h3 className="text-black  text-3xl sm:text-xl md:text-2xl tracking-wide font-extrabold mb-4 leading-snug">
//             <span className="block mt-4">ULKA TV is a leading IPTV subscription provider across India.
//             </span>
//             <span className="block mt-4"> India's 1st Solution with MPEG-DASH and HEVC codec with unicast technology</span>
//             <span className="block mt-4">which provides 800+ Indian channels.</span>
//           </h3>
//           <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-base">
//               Channel List
//             </button>
//             <button className="bg-black border border-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right Section with TV-like Video */}
//         <div className="w-full flex justify-center">
//           <div
//             className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-w-16 aspect-h-9"
//           >
//             <img
//               className="w-full h-full object-cover"
//               src="/new.png"
//               alt="New"
//             />
//           </div>
//         </div>

//       </div>
//       </div>


//       <div className="bg-white max-w-[70rem] items-center justify-center mx-auto  mb-8 rounded-xl">
//           <div className="text-[#2B1C50] text-[16px] sm:text-[20px] xl:text-[32px] text-center font-semibold mt-8">
//             <div className="font-bold text-black py-8">Our Partners</div>
//           </div>
//           <div className="flex justify-center items-center overflow-hidden xl:max-w-[1160px] max-w-full mb-8 space-x-4 sm:space-x-8 lg:space-x-16">
//             <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//               {staticImages.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image.src}
//                   alt={image.alt}
//                   height={128}
//                   width={200}
//                   className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//                 />
//               ))}
//             </div>

//             <div className="flex space-x-4 sm:space-x-8 lg:space-x-16 animate-loop-scroll">
//               {staticImages.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image.src}
//                   alt={image.alt}
//                   height={128}
//                   width={200}
//                   className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[128px] w-auto cursor-pointer max-w-none object-contain"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes loop-scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-loop-scroll {
//             display: flex;
//             animation: loop-scroll 50s linear infinite;
//           }
//         `}</style>





//     <section className="pt-24 pb-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">Major PSUs BSNL and Railtel are our Network
//                 Partners for IPTV Services.</h3>
//               </div>
//             </Link>
//           </div>

//           {/* Second Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">More than 20 National and Regional ISPs are
//                   engaged in promoting and distributing our IPTV
//                   Services covering entire India.</h3>
//               </div>
//             </Link>
//           </div>

//           {/* Third Hover Box */}
//           <div className="relative group bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//             <Link
//               href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//               target="_blank"
//               className="block w-full h-full"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/hb-catalogue1.png')" }}
                
//               ></div>
//               <div className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transform transition origin-bottom duration-300 opacity-80"></div>
//               <div className="relative z-10 p-6">
//                 <h3 className="text-xl font-semibold">Some enthusiastic LCOs also are participating in
//                   IPTV distribution hosting Mini CDNs integrated to
//                   their FTTH equipment using IPTV VLAN.</h3>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>


//       <section className="bg-white mb-8 mt-[4rem]">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-16 space-y-12 lg:space-y-0">
//             <div className="w-full relative">
//                 <div
//                   className="w-[52rem] h-[34rem] bg-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
                  
//                 >
//                 <div className="w-full flex justify-center">
//                     <div
//                       className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-w-16 aspect-h-9 transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden border-[15px] border-gray-400 rounded-lg shadow-xl"
//                     >
//                       <video
//                         className="w-full h-full object-cover"
//                         src="/intro.mp4"
//                         autoPlay
//                         loop
//                         muted
//                       ></video>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="absolute top-0 right-0 w-[16rem] h-[25rem] bg-cover mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 mb-8"
//                   style={{ backgroundImage: "url('/nm.png')" }}
//                 ></div>
//               </div>
//                 <div className="w-full lg:w-1/2">
//                   <div className="mb-8">
//                     <span className="block mb-4 border-t-4 border-gray-500 w-10"></span>
//                     <h3 className="text-4xl font-bold text-red-500 mb-6">TOTALLY FEASIBLE!</h3>
//                     <h4 className="text-xl font-thin text-gray-600 leading-relaxed">
//                       Manage your account seamlessly with myULKA Customer App. Download myULKA app for secure, scalable, and smart experience.
//                     </h4>
//                   </div>

//                   <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-2 w-[20rem]transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
//                   <blockquote className="text-gray-800">
//                     With myULKA TV Customer app, we have enabled one-click login for our customers. Customers also have the option to purchase one of our 
//                     pre-built Ulka bundles or customize the a-la-carte options that make watching Indian Live TV Channels affordable.
//                   </blockquote>
//                 </div>
//                 <div className="flex justify-start">
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
//                     target="_blank"
//                     className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-black"
//                     title="Download myULKA TV App Now"
//                   >
//                     Download myULKA TV App Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>



//         <div className="bg-red-600 text-white flex items-center mt-[8rem] relative mb-8">
//           <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10 mt-[5rem] mb-14">
//             {/* Left Section */}
//             <div className="md:w-1/2">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="bg-white hover:bg-black text-red-600  hover:text-white font-bold rounded-full w-4 h-4 flex justify-center items-center">
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-semibold">ULKA TV for Internet Service Providers</h2>
//               </div>
//               <hr className="border-white my-4" />
//               <p className=" mb-2 font-bold text-xl ">
//                 TELEVISION VIEWERSHIP
//               </p>
//               <p className="mb-2 text-lg">
//                Television is the largest source of media in India by reaching approximately reaching over 500M households.
//               </p>
//               <hr className="border-white my-4" />
//               <p className="mb-2 font-bold text-xl">
//                DIGITAL INCLUSION
//               </p>
//               <p className="mb-2 text-lg">
//               Expanding internet connectivity through IPTV can bridge the digital divide between urban and rural areas. Rural residents can access information, entertainment, and services that were previously unavailable to them, leading to a more inclusive society.
//               </p>
//               <hr className="border-white my-4" />
//               <p className="mb-2 font-bold text-xl">
//                 BUNDLE PACKAGES TO PROMOTE INTERNET CONNECTIONS
//               </p>
//               <p className="mb-2 text-lg">
//                 Offering bundled packages that include both internet connectivity and IPTV services at reasonable rates, making it more attractive for urban or rural customers since they don't have to pay separately for Television connections.
//               </p>
//               <hr className="border-white my-4" />
//               <button className="mt-2 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black">
//                 ORDER NOW
//               </button>
//             </div>
//           </div>
//           <div className="absolute top-0 right-0 h-full mb-8">
//             <Image
//               src="/mainulkaimage.png"
//               alt="Ulka TV"
//               width={1000}
//               height={900}
//               className="h-full object-cover mb-8"
//             />
//           </div>
//         </div>


//         <div className="bg-white py-16">
//           <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
//               Bundling IPTV and INTERNET Packages Help Internet Service Providers ?
//             </h2>
//             <div className="grid gap-8 md:grid-cols-3 mt-[5rem]">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-white shadow-lg rounded-lg p-6 relative text-gray-900 hover:bg-black hover:text-white flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   {/* Icon */}
//                   <div className="absolute -top-5 flex items-center justify-center w-12 h-12 bg-red-900 text-white rounded-full transition-colors duration-300">
//                     <span className="text-2xl">&ldquo;</span>
//                   </div>

//                   {/* Name */}
//                   <h3 className="text-xl font-bold mt-8">{testimonial.name}</h3>

//                   {/* Feedback */}
//                   <p className="text-lg mt-4">{testimonial.feedback}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* <section className="bg-red-700 py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-white text-2xl font-bold mb-6">Channel Partners</h3>
//             <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
//           <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
//           <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
//           <Image src="/timesnowlogo.png" alt="Times Now" width={200} height={200} />
//           <Image src="/news18.png" alt="News 18" width={200} height={200} />
//           <Image src="/etvcut.png" alt="ETV" width={200} height={200} />
//           <Image src="/timesnowlogo.png" alt="Another Logo" width={200} height={200} />
//           <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
//           <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
//         </div>
//           </div>

//           <div>
//             <div className="space-y-10">
//               <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
//                 <p className="italic mb-4">
//                   “Without question ULKA TV is the best IPTV Solution you will ever need. This product is truly a work of art. Support has also been exceptional.”
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-white rounded-full">
//                    <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>
//                    </div>
//                   <div>
//                     <h4 className="font-bold">Surekha S</h4>
//                     <p className="text-sm mb-4">GENERAL MANAGER</p>
//                       <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                       </div>
//                     </div>

//                 </div>
//               </div>

//               <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
//                 <p className="italic mb-4">
//                   “Best IPTV Solution to watch LIVE TV with almost all channels.. Amazing Simply best and minimalistic Android TV Box. Cheers ULKA Team.”
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-white rounded-full">
//                   <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>

//                   </div>
//                   <div>
//                     <h4 className="font-bold">Shankar Gupta</h4>
//                     <p className="text-sm mb-4">CFO, NewaveDigital247</p>
//                     <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


//       <div className="mt-16 text-center mb-8">
//         <h3 className="text-2xl font-bold mb-2">ARE YOU ULKA TV PARTNER?</h3>
//         <p className="text-gray-300 mb-4">Easily manage your ULKA TV Subscribers</p>
//         <button className="border-2 border-red-600 text-black px-6 py-2 rounded hover:bg-white hover:text-red-600">
//           PARTNER LOGIN
//         </button>
//       </div> */}

//       </div>

//   );
// };

// export default SmartTvPage;





"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

const SmartTvPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
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
    <div className="mb-8 min-h-screen  mx-auto">
    <div
        className="h-[93vh] bg-gradient-to-r from-[#FF4E55] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4"
      >

    {/* <div
      className="min-h-screen bg-gradient-to-r from-[#FF4E50] to-[#FC913A] bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
      // style={{ backgroundImage: `url('/ew.jpg.jpeg ')` }}
    > */}
      {/* <div
       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
       style={{ backgroundImage: `url('/onepn.png')` }}
    > */}
    {/* <div
       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
       style={{ backgroundImage: `url('/testo.webp')` }}
    > */}
    {/* <div
       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
       style={{ backgroundImage: `url('/we.webp')` }}
    > */}
     {/* <div
       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:h-[60vh] md:h-[80vh]"
       style={{ backgroundImage: `url('/ter.jpg')` }}
    > */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl">
  {/* Left Section */}
  <div className="text-center md:text-left">
    <p className="text-2xl text-white sm:text-4xl md:text-5xl font-extrabold leading-relaxed sm:leading-snug">
      <span className="block mt-4 mb-6">WELCOME TO FUTURE!</span>
    </p>
    <h3 className="text-black text-3xl sm:text-xl md:text-2xl tracking-wide font-extrabold mb-4 leading-snug">
      <span className="block mt-4">
        ULKA TV is a leading IPTV subscription provider across India.
      </span>
      <span className="block mt-4">
        India's 1st Solution with MPEG-DASH and HEVC codec with unicast
        technology
      </span>
      <span className="block mt-4">which provides 800+ Indian channels.</span>
    </h3>
    <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
      <button className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-sm sm:text-base">
        Channel List
      </button>
      <button className="bg-black border border-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
        Contact Us
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full flex justify-center">
    <div className="w-full h-auto">
      <img
        className="w-full h-auto object-cover mt-8"
        src="/ulkatvi.png"
        alt="New"
      />
    </div>
  </div>
</div>

    </div>


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


      <section className="bg-white mb-8 mt-[4rem]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-16 space-y-12 lg:space-y-0">
            <div className="w-full relative">
                <div
                  className="w-[52rem] h-[34rem] bg-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2"
                  
                >
                <div className="w-full flex justify-center">
                    <div
                      className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-w-16 aspect-h-9 transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden border-[15px] border-gray-400 rounded-lg shadow-xl"
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
                  className="absolute top-0 right-0 w-[16rem] h-[25rem] bg-cover mt-[12rem] transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 mb-8"
                  style={{ backgroundImage: "url('/nm.png')" }}
                ></div>
              </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-8">
                    <span className="block mb-4 border-t-4 border-gray-500 w-10"></span>
                    <h3 className="text-4xl font-bold text-red-500 mb-6">TOTALLY FEASIBLE!</h3>
                    <h4 className="text-xl font-thin text-gray-600 leading-relaxed">
                      Manage your account seamlessly with myULKA Customer App. Download myULKA app for secure, scalable, and smart experience.
                    </h4>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-2 w-[20rem]transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-4 hover:translate-y-4">
                  <blockquote className="text-gray-800">
                    With myULKA TV Customer app, we have enabled one-click login for our customers. Customers also have the option to purchase one of our 
                    pre-built Ulka bundles or customize the a-la-carte options that make watching Indian Live TV Channels affordable.
                  </blockquote>
                </div>
                <div className="flex justify-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ulkatv.ulka"
                    target="_blank"
                    className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-black"
                    title="Download myULKA TV App Now"
                  >
                    Download myULKA TV App Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


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
    </div>

        {/* <div className="bg-red-600 text-white flex items-center mt-[8rem] relative mb-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10 mt-[5rem] mb-14">
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
              <button className="mt-2 px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-black">
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
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div> */}

         {/* <section className="bg-red-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Channel Partners</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
          <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
          <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
          <Image src="/timesnowlogo.png" alt="Times Now" width={200} height={200} />
          <Image src="/news18.png" alt="News 18" width={200} height={200} />
          <Image src="/etvcut.png" alt="ETV" width={200} height={200} />
          <Image src="/timesnowlogo.png" alt="Another Logo" width={200} height={200} />
          <Image src="/sonylogo.png" alt="Sony" width={200} height={200} />
          <Image src="/discoverylogo.png" alt="Discovery" width={200} height={200} />
        </div>
          </div>

          <div>
            <div className="space-y-10">
              <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
                <p className="italic mb-4">
                  “Without question ULKA TV is the best IPTV Solution you will ever need. This product is truly a work of art. Support has also been exceptional.”
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full">
                   <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>
                   </div>
                  <div>
                    <h4 className="font-bold">Surekha S</h4>
                    <p className="text-sm mb-4">GENERAL MANAGER</p>
                      <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>

                </div>
              </div>

              <div className="hover:bg-red-400 bg-black text-white p-6 rounded-md shadow-lg">
                <p className="italic mb-4">
                  “Best IPTV Solution to watch LIVE TV with almost all channels.. Amazing Simply best and minimalistic Android TV Box. Cheers ULKA Team.”
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full">
                  <Image src="/profile.jpeg" alt="Profile" width={30} height={30}  className="text-black mt-2 ml-2"/>

                  </div>
                  <div>
                    <h4 className="font-bold">Shankar Gupta</h4>
                    <p className="text-sm mb-4">CFO, NewaveDigital247</p>
                    <div className="ts-pt-testimonials__stars ts-pt-testimonials__stars--5 flex space-x-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      <div className="mt-16 text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">ARE YOU ULKA TV PARTNER?</h3>
        <p className="text-gray-300 mb-4">Easily manage your ULKA TV Subscribers</p>
        <button className="border-2 border-red-600 text-black px-6 py-2 rounded hover:bg-white hover:text-red-600">
          PARTNER LOGIN
        </button>
      </div> */}

      </div>

  );
};

export default SmartTvPage;

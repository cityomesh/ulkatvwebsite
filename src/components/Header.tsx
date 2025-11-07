// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Home = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);  // Toggling the mobile menu state
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60);  // Detecting scroll and adjusting header
//     };

//     window.addEventListener("scroll", handleScroll);  // Attaching scroll listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);  // Cleanup
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500 ease-in-out ${
//           isScrolled ? "bg-white py-5" : "bg-white py-5"
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center justify-center text-black font-bold">
//             <Link href="/">
//               <Image
//                 src="/ulka.jpg"
//                 alt="logo"
//                 width={isScrolled ? 150 : 200}
//                 height={isScrolled ? 160 : 180}
//                 className="rounded transition-all duration-500 ease-in-out ml-4"
//               />
//             </Link>
//           </div>

//           <div className="md:hidden px-4" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <FaTimes className="text-3xl cursor-pointer" /> 
//             ) : (
//               <FaBars className="text-3xl cursor-pointer" />
//             )}
//           </div>

//           {/* Menu Items */}
//           <ul
//             className={`absolute text-[16px] md:static top-16 mt-2 left-0 w-full bg-white md:w-auto md:flex md:items-center md:space-x-6 text-blue-900 font-semibold transition-all duration-300 ease-in-out ${
//               isMobileMenuOpen ? "block" : "hidden" 
//             }`}
//           >
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="/">Home</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/packs">BOUQUETS</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/ulka-lite">ULKA LITE</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/about">ABOUT US</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/contact-us">CONTACT US</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/terms-conditions">TERMS</Link>
//             </li>
//             <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link href="https://ulka.tv/policy">PRIVACY POLICY</Link>
//             </li>
//             <div className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <a
//                 href="https://ulka.tv/customers/login"
//                 className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-red-700"
//               >
//                 USER SIGN IN
//               </a>
//             </div>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Home;


// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Home = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60); 
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500 ease-in-out ${
//           isScrolled ? "bg-white py-5" : "bg-white py-5"
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center justify-center text-black font-bold">
//             <Link href="/">
//               <Image
//                 src="/ulka.jpg"
//                 alt="logo"
//                 width={isScrolled ? 150 : 200}
//                 height={isScrolled ? 160 : 180}
//                 className="rounded transition-all duration-500 ease-in-out ml-4"
//               />
//             </Link>
//           </div>

//           <div className="md:hidden px-4" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <FaTimes className="text-3xl cursor-pointer" /> 
//             ) : (
//               <FaBars className="text-3xl cursor-pointer" />
//             )}
//           </div>

//           <ul
//             className={`absolute text-[16px] md:static top-16 mt-2 left-0 w-full bg-white md:w-auto md:flex md:items-center md:space-x-6 text-blue-900 font-semibold transition-all duration-300 ease-in-out ${
//               isMobileMenuOpen ? "block" : "hidden" 
//             }`}
//           >
//            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="/"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/packs"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               BOUQUETS
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/ulka-lite"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               ULKA LITE
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/about"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               ABOUT US
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/contact-us"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               CONTACT US
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/terms-conditions"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               TERMS
//             </Link>
//           </li>
//           <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//             <Link
//               href="https://ulka.tv/policy"
//               className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//             >
//               PRIVACY POLICY
//             </Link>
//           </li>
//             <div className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <a
//                 href="https://ulka.tv/customers/login"
//                 className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 USER SIGN IN
//               </a>
//             </div>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Home;


// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaPhone, FaInfoCircle, FaSignInAlt } from "react-icons/fa";

// const Home = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       <header
//         className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500 ease-in-out ${
//           isScrolled ? "bg-white py-5" : "bg-white py-5"
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center justify-center text-black font-bold">
//             <Link href="/">
//               <Image
//                 src="/ulka.jpg"
//                 alt="logo"
//                 width={isScrolled ? 150 : 200}
//                 height={isScrolled ? 160 : 180}
//                 className="rounded transition-all duration-500 ease-in-out ml-4"
//               />
//             </Link>
//           </div>

//           <div className="md:hidden px-4" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <FaTimes className="text-3xl cursor-pointer" />
//             ) : (
//               <FaBars className="text-3xl cursor-pointer" />
//             )}
//           </div>

//           <ul
//             className={`absolute text-[16px] md:static top-16 mt-2 left-0 w-full bg-white md:w-auto md:flex md:items-center md:space-x-6 text-blue-900 font-semibold transition-all duration-300 ease-in-out ${
//               isMobileMenuOpen ? "block" : "hidden"
//             }`}
//           >
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="/"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/packs"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 BOUQUETS
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/ulka-lite"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 ULKA LITE
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/about"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 ABOUT US
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/contact-us"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 CONTACT US
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/terms-conditions"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 TERMS
//               </Link>
//             </li>
//             <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <Link
//                 href="https://ulka.tv/policy"
//                 className="inline-block bg-transparent hover:bg-black hover:text-white px-2 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 PRIVACY POLICY
//               </Link>
//             </li>
//             <div className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
//               <a
//                 href="https://ulka.tv/customers/login"
//                 className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
//               >
//                 USER SIGN IN
//               </a>
//             </div>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Home;




"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaPhone } from "react-icons/fa";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black">
      <header
        className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-black py-3" : "bg-black py-5"
        }`}
      >
    <div className="site-header-top-wrapper py-2 flex justify-between items-center px-4 md:px-8 lg:px-12">
      <div className="flex space-x-4">
        <a href="#" title="Facebook" className="text-white hover:text-blue-800"><FaFacebookF /></a>
        <a href="#" title="Twitter" className="text-white hover:text-blue-600"><FaTwitter /></a>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-white font-medium hidden sm:block">FOR QUERIES? CALL:</span>
        <a href="tel:7416410888" className="text-white font-bold hover:underline">74164 10888</a>
        <FaPhone className="text-white" />
      </div>
      
      <div className="flex items-center space-x-8 hidden sm:flex">
        <a href="https://store.ulka.tv/" className="text-white font-medium hover:text-blue-600">STORE</a>
        <a href="https://ulka.tv/faq" className="text-white font-medium hover:text-blue-600">F.A.Q</a>
        <a href="https://partners.ulka.tv/" className="text-white font-medium hover:text-blue-600">PARTNER LOGIN</a>
      </div>
    </div>

        <div className="container mx-auto flex items-center justify-between">
          <div
            className={`flex items-center justify-center text-black font-bold transition-all duration-500 ${
              isScrolled ? "p-2 rounded-md" : ""
            }`}
          >
            <Link href="/">
              <Image
                src="/tv (2).png"
                alt="logo"
                width={isScrolled ? 120 : 200}
                height={isScrolled ? 120 : 180}
                className="rounded transition-all duration-500 ease-in-out px-2"
              />
            </Link>
          </div>

          <div className="md:hidden px-4 text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>

          <ul
            className={`absolute text-[16px] md:static top-16 mt-2 left-0 w-full bg-black md:w-auto md:flex md:items-center md:space-x-6 text-blue-900 font-semibold transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-6 py-2 rounded-md font-bold transition-all duration-300"
              >
                HOME
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/bouquets"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                ALL
              </Link>
            </li>

            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/pagebouquets"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                BOUQUETS
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/technology"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                TECHNOLOGY
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/about"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                ABOUT US
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/partners"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                PARTNERS
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/contact"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                CONTACT US
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/terms"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                TERMS
              </Link>
            </li>
            <li className="cursor-pointer py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <Link
                href="/policy"
                className="inline-block bg-transparent text-white hover:bg-white hover:text-black px-2 py-2 rounded-md font-bold transition-all duration-300"
              >
                PRIVACY POLICY
              </Link>
            </li>
            {/* <div className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <a
                href="https://ulka.tv/customers/login"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
              >
                USER SIGN IN
              </a>
            </div> */}
            <div className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0 text-left md:text-center">
              <a
                href="/login"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-bold transition-all duration-300"
              >
                USER SIGN IN
              </a>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;

// "use client";
// import React, { useState } from "react";
// import { CaretDown, CaretUp } from "@phosphor-icons/react";
// import HindhiChannelsPopup from "./HindhiChannelsPopup";
// import EnglishChannelsPopup from "./EnglishChannelsPopup";
// import TeluguChannelsPopup from "./TeluguChannelsPopup";
// import TamilChannelsPopup from "./TamilChannelsPopup";
// import KannadaChannelsPopup from "./KannadaChannelsPopup";
// import MalayalamChannelsPopup from "./MalayalamChannelsPopup";
// import MarathiChannelsPopup from "./MarathiChannelsPopup";
// import BengaliChannelsPopup from "./BengaliChannelsPopup";
// import GujaratiChannelsPopup from "./GujaratiChannelsPopup"

// import Link from "next/link";

// const BouquetsPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const [HindhiChannels, setHindhiChannelsClicked] = useState(false);
//   const [EnglishChannels, setEnglishChannelsClicked] = useState(false);
//   const [TeluguChannels, setTeuguChannelsClicked] = useState(false);
//   const [TamilChannels, setTamilChannelsClicked] = useState(false);
//   const [KannadaChannels, setKannadaChannelsClicked] = useState(false);
//   const [MalayalamChannels, setMalayalamChannelsClicked] = useState(false);
//   const [MarathiChannels, setMarathiChannelsClicked] = useState(false);
//   const [BengaliChannels, setBengaliChannelsClicked] = useState(false);
//   const [GujaratiChannels, setGujaratiChannelsClicked] = useState(false);

//   const [selectedTab, setSelectedTab] = useState<string>("Channels");
//   const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  
//   const handleTopMail = (language: string) => {
//     if (language === "Hindi") {
//       setHindhiChannelsClicked(true);
//     }
//   };

//   const handleEnglish = (language: string) => {
//     if (language === "English") {
//       setEnglishChannelsClicked(true);
//     }
//   };

//   const handleTelugu = (language: string) => {
//     if (language === "Telugu") {
//       setTeuguChannelsClicked(true);
//     }
//   };

//   const handleTamil = (language: string) => {
//     if (language === "Tamil") {
//       setTamilChannelsClicked(true);
//     }
//   };

//   const handleKannada = (language: string) => {
//     if (language === "Kannada") {
//       setKannadaChannelsClicked(true);
//     }
//   };

//   const handleMalayalam = (language: string) => {
//     if (language === "Malayalam") {
//       setMalayalamChannelsClicked(true);
//     }
//   };

//   const handleMarathi = (language: string) => {
//     if (language === "Marathi") {
//       setMarathiChannelsClicked(true);
//     }
//   };

//   const handleBengali = (language: string) => {
//     if (language === "Bengali") {
//       setBengaliChannelsClicked(true);
//     }
//   };

//   const handleGujarati = (language: string) => {
//     if (language === "Gujarati") {
//       setGujaratiChannelsClicked(true);
//     }
//   };

//   const languages: string[] = [
//     "Hindi", "English", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi",
//     "Bengali", "Gujarati", "Punjabi", "Odia", "Assamese", "Bhojpuri", "Urdu", "Sports"
//   ];

//   const filteredLanguages = languages.filter((language) =>
//     language.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleExpand = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };


// const handleTabClick = (tab: string): void => {
//   setSelectedTab(tab);
//   setSelectedLanguage(null);
//   setSearchTerm("");
// };
//   return (
//     <div className="bg-white w-full p-10 min-h-screen mt-[5rem]">
//       {HindhiChannels && (
//         <HindhiChannelsPopup closeTopMailpage={() => setHindhiChannelsClicked(false)} />
//       )}

//       {EnglishChannels && (
//         <EnglishChannelsPopup closeTopMailpage={() => setEnglishChannelsClicked(false)} />
//       )}
//       {TeluguChannels && (
//         <TeluguChannelsPopup closeTopMailpage={() => setTeuguChannelsClicked(false)} />
//       )}

//       {TamilChannels && (
//         <TamilChannelsPopup closeTopMailpage={() => setTamilChannelsClicked(false)} />
//       )}

//       {KannadaChannels && (
//         <KannadaChannelsPopup closeTopMailpage={() => setKannadaChannelsClicked(false)} />
//       )}

//       {MalayalamChannels && (
//         <MalayalamChannelsPopup closeTopMailpage={() => setMalayalamChannelsClicked(false)} />
//       )}

//       {MarathiChannels && (
//         <MarathiChannelsPopup closeTopMailpage={() => setMarathiChannelsClicked(false)} />
//       )}

//       {BengaliChannels && (
//         <BengaliChannelsPopup closeTopMailpage={() => setBengaliChannelsClicked(false)} />
//       )}

//       {GujaratiChannels && (
//         <GujaratiChannelsPopup closeTopMailpage={() => setGujaratiChannelsClicked(false)} />
//       )}

//       <div className="flex flex-col items-center pt-8 w-full max-w-6xl mx-auto">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold">Ulka Subscription Plans</h1>
//           <p className="text-gray-500 mt-2">View all the broadcaster packs available on ULKA TV</p>
//         </div>

//         <div className="flex space-x-4 mt-6">
//           {[
//             { name: "Channels", path: "/bouquets" },
//             { name: "Broadcaster Packs", path: "/ulkabouquets" },
//             { name: "Ulka Bouquets", path: "/ulkabouquets" },
//           ].map((tab) => (
//             <Link key={tab.name} href={tab.path}>
//               <button
//                 className={`${
//                   selectedTab === tab.name
//                     ? "bg-red-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 } px-6 py-3 rounded-md shadow-md focus:outline-none`}
//                 onClick={() => handleTabClick(tab.name)}
//               >
//                 {tab.name}
//               </button>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-4 w-full">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="🔍 Search..."
//               className="w-full px-4 py-2 border rounded-md focus:outline-none"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mt-8 w-full">
//           <h2 className="text-lg font-semibold mb-4">Select a Language:</h2>

//           <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
//             {filteredLanguages.length > 0 ? (
//               filteredLanguages.map((language, index) => (
//                 <button
//                   key={index}
//                   className="flex items-center justify-between w-full px-4 py-2 rounded-md text-[13px] text-[#000000] bg-[#E1E1E1] border-[1px] border-[#dad8d8] cursor-pointer hover:bg-black hover:text-white"
//                   onClick={() => {
//                     toggleExpand(index);
//                     handleTopMail(language);
//                     handleEnglish(language);
//                     handleTelugu(language);
//                     handleTamil(language);
//                     handleKannada(language);
//                     handleMalayalam(language);
//                     handleMarathi(language);
//                     handleBengali(language);
//                     handleGujarati(language);

//                   }}
//                 >
//                   <span>{language}</span>
//                   {expandedIndex === index ? <CaretUp size={25} /> : <CaretDown size={25} />}
//                 </button>
//               ))
//             ) : (
//               <p className="text-gray-500 col-span-2">No languages found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BouquetsPage;




// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaInfoCircle, FaSearch } from "react-icons/fa";

// interface Rate {
//   id: number;
//   months: number;
//   price: string;
// }

// interface BouqueItem {
//   id: number;
//   name: string;
//   type_lbl: string;
//   rate: Rate[];
// }

// const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
//   try {
//     const token = localStorage.getItem("access_token");
//     if (!token) throw new Error("No access token found. Please log in.");

//     const response = await fetch(
//       "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       return data.data as BouqueItem[];
//     } else {
//       throw new Error(data.message || "Failed to fetch data.");
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// };

// const BouquePage = () => {
//   const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showPriceDetails, setShowPriceDetails] = useState<Record<number, boolean>>({});
//   const [selectedType, setSelectedType] = useState<"Alacarte" | "Add On" | "Base">("Alacarte");

//   const channelImages: Record<string, string> = {
//     "Zee Marathi HD": "/Zee Marathi HD.webp",
//     "ETV": "/images/etv.jpeg",
//     "Star Plus": "/images/starplus.jpeg",
//     "Zee Keralam HD": "/images/zeekeralam.jpeg",
//     "Zee Thirai HD": "/images/zeethirai.jpeg",
//     "Zee Tamil HD": "/images/zeetamilhd.jpeg",
//     "Zee Bangla HD": "/images/zeebangla.jpeg",
//     "Zee Talkies HD": "/images/zeetalkies.jpeg",
//     "&Prive HD": "/images/privehd.jpeg",
//     "&Flix HD": "/images/flixhd.jpeg",
//     "Zee Cafe HD": "/images/zeecafe.jpeg",
//     "&Xplor HD": "/images/xplorhd.jpeg",
//     "&Pictures HD": "/images/pictureshd.jpeg",
//     "Zee Cinema HD": "/images/zeecinema.jpeg",
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchBouqueData();
//       if (data) {
//         console.log("Fetched Data:", data);
//         setBouqueData(data);
//       }
//     };
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Selected Type:", selectedType);
//     console.log(
//       "Filtered Data:",
//       bouqueData.filter((item) => item.type_lbl.toLowerCase() === selectedType.toLowerCase())
//     );
//   }, [selectedType, bouqueData]);

//   const togglePriceDetails = (id: number) => {
//     setShowPriceDetails((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const filteredBouqueData = bouqueData.filter(
//     (item) =>
//       item.type_lbl.toLowerCase().replace(/\s+/g, '') === selectedType.toLowerCase().replace(/\s+/g, '') &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-6 sm:p-10 md:p-40 bg-white text-black">
//       <h1 className="text-2xl font-bold text-center mb-6">Available TV Bouquets</h1>

//       <div className="flex justify-center mb-6 space-x-4">
//         {["Alacarte", "Add On", "Base"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedType(type as "Alacarte" | "Add On" | "Base")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               selectedType === type ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <div className="relative w-full mb-8">
//         <FaSearch className="absolute left-3 top-3 text-black" />
//         <input
//           type="text"
//           placeholder="Search channel..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 pl-10 border rounded-md"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[2rem]">
//         {filteredBouqueData.map((item) => (
//           <div key={item.id} className="p-3 rounded-lg shadow text-center relative bg-white">
//             <p className="font-semibold text-sm">{item.name}</p>

//             <div className="relative w-full flex justify-center">
//               <Image
//                 src={channelImages[item.name] || "/images/default.jpg"}
//                 alt={item.name}
//                 width={120}
//                 height={120}
//                 className="rounded-md"
//               />
//               <FaInfoCircle
//                 className="absolute top-2 right-2 text-black cursor-pointer"
//                 onClick={() => togglePriceDetails(item.id)}
//               />
//             </div>

//             {item.rate.length > 0 && (
//               <p className="mt-2 text-sm font-medium">MRP: {item.rate[0].price}₹ per month</p>
//             )}

//             {showPriceDetails[item.id] && item.rate.length > 1 && (
//               <div className="bg-gray-100 p-2 rounded-lg shadow">
//                 {item.rate.map((rate) =>
//                   rate.months !== 1 ? (
//                     <p key={rate.id} className="text-sm">
//                       {rate.months} Months Price: ₹{rate.price}
//                     </p>
//                   ) : null
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BouquePage;


// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaInfoCircle, FaSearch } from "react-icons/fa";

// interface Rate {
//   id: number;
//   months: number;
//   price: string;
// }

// interface BouqueItem {
//   id: number;
//   name: string;
//   type_lbl: string;
//   rate: Rate[];
// }

// const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
//   try {
//     const token = localStorage.getItem("access_token");
//     if (!token) throw new Error("No access token found. Please log in.");

//     const response = await fetch(
//       "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       return data.data as BouqueItem[];
//     } else {
//       throw new Error(data.message || "Failed to fetch data.");
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// };

// const BouquePage = () => {
//   const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showPriceDetails, setShowPriceDetails] = useState<Record<number, boolean>>({});
//   const [selectedType, setSelectedType] = useState<"Alacarte" | "Add On" | "Base">("Alacarte");

//   // Mapping UI labels to backend values
//   const typeMapping: Record<string, "Alacarte" | "Add On" | "Base"> = {
//     Channels: "Alacarte",
//     "Broadcaster Packs": "Add On",
//     "Ulka Bouquets": "Base",
//   };

//   const channelImages: Record<string, string> = {
//     "CHITTI TV": "/CHITTI TV .jpeg",
//     "NTV": "/NTV.png",
//     "ETV ABHIRUCHI": "/ETV ABHIRUCHI.png",
//     "ETV ANDHRAPRADESH": "/ETV ANDHRAPRADESH.png",
//     "ETV BAL BHARAT ENGLISH HD": "/ETV BAL BHARAT.png",
//     "ETV CINEMA HD": "/ETV CINEMA HD.png",
//     "ETV CINEMA SD": "/ETV CINEMA SD.png",
//     "ETV HD": "/ETV HD.png",
//     "ETV LIFE": "/ETV LIFE.png",
//     "ETV PLUS HD": "/ETV PLUS HD.png",
//     "ETV PLUS SD": "/ETV PLUS SD.png",
//     "ETV PLUS": "/ETV_Plus.png",
//     "ETV TELANGANA": "/ETV TELENGANA.png",
//     "ETV TELUGU": "/Etv Telugu.png",
//     "ETV CINEMA": "/ETV Cinema.png",
//     "Big Magic": "/BIG MAGIC.png",
//     "&Flix": "/&Flix.png",
//     "&Flix HD": "/&Flix HD.png",
//     "&Pictures HD": "/&Pictures HD.png",
//     "&PICTURES SD": "/&PICTURES SD.png",
//     "&Prive HD": "/&Prive HD.png",
//     "&Tv HD": "/&Tv HD.png",
//     "&Xplor HD": "/&Xplor HD.png",
//     "Zee Action": "/Zee Action.png",
//     "Zee Anmol": "/Zee Anmol.png",
//     "Zee Anmol Cinema": "/Zee Anmol Cinema.png",
//     "Zee Bangla": "/Zee Bangla.png",
//     "Zee Bangla Cinema": "/Zee Bangla Cinema.png",
//     "Zee Bangla HD": "/Zee Bangla HD.png",
//     "BISCOPE": "/BISCOPE.png",
//     "Zee Bollywood": "/Zee Bollywood.png",
//     "Zee Cafe": "/Zee Cafe.png",
//     "Zee Cafe HD": "/Zee Cafe HD.png",
//     "Zee Cinema": "/Zee Cinema.png",
//     "Zee Cinema HD": "/Zee Cinema HD.png",
//     "Zee Cinemalu": "/Zee Cinemalu.png",
//     "Zee Cinemalu HD": "/Zee Cinemalu HD.png",
//     "Zee Classic": "/Zee Classic.png",
//     "Zee_Ganga": "/Zee_Ganga.png",
//     "Zee Kannada": "/Zee Kannada.png",
//     "Zee Kannada HD": "/Zee Kannada HD.png",
//     "Zee Keralam": "/Zee Keralam.png",
//     "Zee Keralam HD": "/Zee Keralam HD.png",
//     "Zee Marathi": "/Zee Marathi.png",
//     "Zee Marathi HD": "/Zee Marathi HD.png",
//     "Zee Picchar": "/Zee Picchar.png",
//     "Zee Picchar HD": "/Zee Picchar HD.png",
//     "Zee Punjabi": "/Zee Punjabi.png",
//     "Zee Sarthak": "/Zee Sarthak.png",
//     "Zee Talkies": "/Zee Talkies.png",
//     "Zee Talkies HD": "/Zee Talkies HD.png",
//     "Zee Talkies SD": "/Zee Talkies SD.png",
//     "Zee Tamil": "/Zee Tamil.png",
//     "Zee Tamil HD": "/Zee Tamil HD.png",
//     "Zee Telugu": "/Zee Telugu.png",
//     "Zee Telugu HD": "/Zee Telugu HD.png",
//     "Zee Thirai": "/Zee Thirai.png",
//     "Zee Thirai HD": "/Zee Thirai HD.png",
//     "Zee Tv": "/Zee Tv.png",
//     "Zee Tv HD": "/Zee Tv HD.png",
//     "Zee Yuva": "/Zee Yuva.png",
//     "Zee Zest": "/Zee Zest.png",
//     "Zee Zest HD": "/Zee Zest HD.png",
//     "ZING": "/ZING.png",
//     "& TV": "/& TV.png",
//     "Zee Biskope": "/Zee Biskope.png",
//     "STAR PRAVAH PICTURE": "/STAR PRAVAH PICTURE.png",
//     "STAR PRAVAH PICTURE HD": "/STAR PRAVAH PICTURE HD.png",
//     "ASIANET MOVIES": "/Asianet-Movies.png",
//     "Asianet Movies HD": "/Asianet Movies HD.jpeg",
//     "star gold 2": "/StarrGold.webp",
//     "Asianet Movies": "/Asianet-Movies.png",
//     "Asianet Plus": "/Asianet-PlusB.png",
//     "BINDAAS": "/BINDAAS.png",
//     "Jalsa Movies": "/JalsaMovies.png",
//     "JALSHA MOVIES HD": "/JALSHA MOVIES HD.png",
//     "MAA MOVIES HD": "/MAA MOVIES HD.png",
//     "MAA MUSIC": "/MAA MUSIC.png",
//     "NGC": "/NGC.png",
//     "STAR GOLD 2 HD": "/STAR GOLD2 HD.png",
//     "STAR GOLD ROMANCE": "/STAR GOLD ROMANCE.png",
//     "STAR GOLD SELECT": "/STAR GOLD SELECT.png",
//     "STAR GOLD SELECT HD": "/STAR GOLD SELECT HD.png",
//     "STAR GOLD THRILLS": "/STAR GOLD THRILLS.png",
//     "STAR KIRAN HD": "/STAR KIRAN HD.png",
//     "STAR MAA MOVIES HD": "/STAR MAA MOVIES HD.png",
//     "STAR MOVIES": "/STAR MOVIES.png",
//     "STAR MOVIES SELECT": "/STAR MOVIES SELECT.png",
//     "STAR PRAVAH HD": "/STAR PRAVAH HD.png",
//     "STAR SPORTS1 TAMIL": "/STAR SPORTS1 TAMIL.png",
//     "STAR SPORTS1 TAMIL HD": "/STAR SPORTS1 TAMIL H.png",
//     "STAR UTSAV": "/STAR UTSAV.png",
//     "STAR UTSAV MOVIES": "/STAR UTSAV MOVIES.png",
//     "SUVARNA HD": "/SUVARNA HD.png",
//     "SUVARNA PLUS": "/SUVARNA PLUS.png",
//     "SUVARNA PLUS COPY": "/SUVARNA PLUS (copy).png",
//     "VIJAY SUPER": "/VIJAY SUPER.png",
//     "VIJAY SUPER HD": "/VIJAY SUPER HD.png",
//     "VIJAY TAKKAR": "/VIJAY TAKKAR.png",
//     "ET NOW": "/ET Now.png",
//     "ET NOW SWADESH": "/ET NOW SWADESH.png",
//     "MIRROR NOW": "/MIRROR NOW.png",
//     "MN+HD": "/MN+ HD.png",
//     "MNX": "/MNX.png",
//     "MNX HD": "/MNX_HD.png",
//     "MOVIES NOW HD": "/MOVIES NOW HD.png",
//     "MOVIES NOW": "/MOVIES NOW SD.png",
//     "ROMEDY NOW": "/ROMEDY NOW.png",
//     "TIMES NOW": "/TIMES NOW.png",
//     "TIMES NOW NABHARAT": "/TIMES NOW NABHARAT.png",
//     "ZOOM": "/ZOOM.png",
//     "SET HD": "/SET HD.png",
//     "SONY AATH": "/SONY AATH.png",
//     "SONY BBC EARTH HD": "/SONY BBC EARTH HD.png",
//     "SONY BBC EARTH SD": "/SONY BBC EARTH SD.png",
//     "SONY BBC EARTH": "/SONYBBCEARTH.png",
//     "SONY MAX HD": "/SONY MAX HD.png",
//     "SONY MAX SD": "/SONY MAX SD.png",
//     "SONY PAL": "/SONY PAL.png",
//     "SONY PIX HD": "/SONY PIX HD.png",
//     "SONY PIX SD": "/SONY PIX SD.png",
//     "SONY SAB": "/SONY SAB.png",
//     "SONY SAB HD": "/SONY SAB HD.png",
//     "Sony SET HD": "/Sony SET HD.png",
//     "Sony SET": "/SONY SET SD.png",
//     "SONY TEN1 HD": "/SONY TEN1 HD.png",
//     "SONY TEN1 SD": "/SONY TEN1 SD.png",
//     "SONY TEN2 SD": "/SONY TEN2 SD.png",
//     "SONY TEN3 HD": "/SONY TEN3HD.png",
//     "SONY TEN3 SD": "/SONY TEN3 SD.png",
//     "SONY TEN5 HD": "/SONY TEN5 HD.png",
//     "SONY TEN5 SD": "/SONY TEN5 SD.png",
//     "SONY SPORTS 2": "/SONY SPORTS 2.png",
//     "SONY SPORTS 5": "/SONY SPORTS 5.png",
//     "SONY WAH": "/SONY WAH.png",
//     "SONY YAY": "/SONY YAY.png",
//     "SONY MARATHI": "/SONY MARATHI.png",
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchBouqueData();
//       if (data) {
//         console.log("Fetched Data:", data);
//         setBouqueData(data);
//       }
//     };
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Selected Type:", selectedType);
//     console.log(
//       "Filtered Data:",
//       bouqueData.filter((item) => item.type_lbl.toLowerCase() === selectedType.toLowerCase())
//     );
//   }, [selectedType, bouqueData]);

//   const togglePriceDetails = (id: number) => {
//     setShowPriceDetails((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const filteredBouqueData = bouqueData.filter(
//     (item) =>
//       item.type_lbl.toLowerCase().replace(/\s+/g, "") === selectedType.toLowerCase().replace(/\s+/g, "") &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-6 sm:p-10 md:p-40 bg-white text-black">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold text-center mb-6">Available TV Bouquets</h1>
//         <p className="text-gray-500 text-xl mt-2 font-bold mb-6">View all the broadcaster packs available on ULKA TV</p>
//       </div>

//       <div className="flex justify-center mb-6 space-x-4">
//         {["Channels", "Broadcaster Packs", "Ulka Bouquets"].map((label) => (
//           <button
//             key={label}
//             onClick={() => setSelectedType(typeMapping[label])}
//             className={`px-4 py-2 rounded-md text-lg font-medium ${
//               selectedType === typeMapping[label] ? "bg-black text-white" : "bg-red-500 text-black"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       <div className="relative w-full mb-8">
//         <FaSearch className="absolute left-3 top-3 text-black" />
//         <input
//           type="text"
//           placeholder="Search channel..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 pl-10 border rounded-md"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-[2rem]">
//         {filteredBouqueData.map((item) => (
//           <div key={item.id} className="p-3 rounded-lg shadow text-center relative bg-white">
//             <p className="font-semibold text-sm mb-2">{item.name}</p>

//             <div className="relative w-full flex justify-center">
//               <Image
//                 src={channelImages[item.name] || "/images/default.jpg"}
//                 alt={item.name}
//                 width={150}
//                 height={100}
//                 className="rounded-md mb-2"
//               />
//               {/* <FaInfoCircle
//                 className="absolute top-2 right-2 text-black cursor-pointer"
//                 onClick={() => togglePriceDetails(item.id)}
//               /> */}
//             </div>

//             {item.rate.length > 0 && (
//                 <p className="mt-2 text-sm font-medium">
//                   MRP: {Number(item.rate[0].price).toFixed(0)} ₹ / per month
//                 </p>
//               )}


//             {showPriceDetails[item.id] && item.rate.length > 1 && (
//               <div className="bg-gray-100 p-2 rounded-lg shadow">
//                 {item.rate.map((rate) =>
//                   rate.months !== 1 ? (
//                     <p key={rate.id} className="text-sm">
//                       {rate.months} Months Price: ₹{rate.price}
//                     </p>
//                   ) : null
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BouquePage;




"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInfoCircle, FaSearch } from "react-icons/fa";

interface Rate {
  id: number;
  months: number;
  price: string;
}

interface BouqueItem {
  id: number;
  name: string;
  type_lbl: string;
  rate: Rate[];
}

const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) throw new Error("No access token found. Please log in.");

    const response = await fetch(
      "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      return data.data as BouqueItem[];
    } else {
      throw new Error(data.message || "Failed to fetch data.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const BouquePage = () => {
  const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPriceDetails, setShowPriceDetails] = useState<Record<number, boolean>>({});
  const [selectedType, setSelectedType] = useState<"Alacarte" | "Add On" | "Base">("Alacarte");

  // Mapping UI labels to backend values
  const typeMapping: Record<string, "Alacarte" | "Add On" | "Base"> = {
    Channels: "Alacarte",
    "Broadcaster Packs": "Add On",
    "Ulka Bouquets": "Base",
  };

  const channelImages: Record<string, string> = {
    "CHITTI TV": "/CHITTI TV .jpeg",
    "NTV": "/NTV.png",
    "ETV ABHIRUCHI": "/ETV ABHIRUCHI.png",
    "ETV ANDHRAPRADESH": "/ETV ANDHRAPRADESH.png",
    "ETV BAL BHARAT ENGLISH HD": "/ETV BAL BHARAT.png",
    "ETV CINEMA HD": "/ETV CINEMA HD.png",
    "ETV CINEMA SD": "/ETV CINEMA SD.png",
    "ETV HD": "/ETV HD.png",
    "ETV LIFE": "/ETV LIFE.png",
    "ETV PLUS HD": "/ETV PLUS HD.png",
    "ETV PLUS SD": "/ETV PLUS SD.png",
    "ETV PLUS": "/ETV_Plus.png",
    "ETV TELANGANA": "/ETV TELENGANA.png",
    "ETV TELUGU": "/Etv Telugu.png",
    "ETV CINEMA": "/ETV Cinema.png",
    "Big Magic": "/BIG MAGIC.png",
    "&Flix": "/&Flix.png",
    "&Flix HD": "/&Flix HD.png",
    "&Pictures": "/& PICTURES.png",
    "&Pictures HD": "/&Pictures HD.png",
    "&PICTURES SD": "/&PICTURES SD.png",
    "&Prive HD": "/&Prive HD.png",
    "&Tv HD": "/&Tv HD.png",
    "&Xplor HD": "/&Xplor HD.png",
    "Zee Action": "/Zee Action.png",
    "Zee Anmol": "/Zee Anmol.png",
    "Zee Anmol Cinema": "/Zee Anmol Cinema.png",
    "Zee Bangla": "/Zee Bangla.png",
    "Zee Bangla Cinema": "/Zee Bangla Cinema.png",
    "Zee Bangla HD": "/Zee Bangla HD.png",
    "BISCOPE": "/BISCOPE.png",
    "Zee Bollywood": "/Zee Bollywood.png",
    "Zee Cafe": "/Zee Cafe.png",
    "Zee Cafe HD": "/Zee Cafe HD.png",
    "Zee Cinema": "/Zee Cinema.png",
    "Zee Cinema HD": "/Zee Cinema HD.png",
    "Zee Cinemalu": "/Zee Cinemalu.png",
    "Zee Cinemalu HD": "/Zee Cinemalu HD.png",
    "Zee Classic": "/Zee Classic.png",
    "Zee_Ganga": "/Zee_Ganga.png",
    "Zee Kannada": "/Zee Kannada.png",
    "Zee Kannada HD": "/Zee Kannada HD.png",
    "Zee Keralam": "/Zee Keralam.png",
    "Zee Keralam HD": "/Zee Keralam HD.png",
    "Zee Marathi": "/Zee Marathi.png",
    "Zee Marathi HD": "/Zee Marathi HD.png",
    "Zee Picchar": "/Zee Picchar.png",
    "Zee Picchar HD": "/Zee Picchar HD.png",
    "Zee Punjabi": "/Zee Punjabi.png",
    "Zee Sarthak": "/Zee Sarthak.png",
    "Zee Talkies": "/Zee Talkies.png",
    "Zee Talkies HD": "/Zee Talkies HD.png",
    "Zee Talkies SD": "/Zee Talkies SD.png",
    "Zee Tamil": "/Zee Tamil.png",
    "Zee Tamil HD": "/Zee Tamil HD.png",
    "Zee Telugu": "/Zee Telugu.png",
    "Zee Telugu HD": "/Zee Telugu HD.png",
    "Zee Thirai": "/Zee Thirai.png",
    "Zee Thirai HD": "/Zee Thirai HD.png",
    "Zee Tv": "/Zee Tv.png",
    "Zee Tv HD": "/Zee Tv HD.png",
    "Zee Yuva": "/Zee Yuva.png",
    "Zee Zest": "/Zee Zest.png",
    "Zee Zest HD": "/Zee Zest HD.png",
    "ZING": "/ZING.png",
    "& TV": "/& TV.png",
    "Zee Biskope": "/Zee Biskope.png",
    "STAR PRAVAH PICTURE": "/STAR PRAVAH PICTURE.png",
    "STAR PRAVAH PICTURE HD": "/STAR PRAVAH PICTURE HD.png",
    // "ASIANET MOVIES": "/Asianet-Movies.png",
    // "Asianet Movies HD": "/Asianet Movies HD.jpeg",
    "star gold 2": "/StarrGold.webp",
    "Asianet Movies": "/Asianet-Movies.png",
    "Asianet Plus": "/Asianet-PlusB.png",
    "BINDAAS": "/BINDAAS.png",
    "Jalsa Movies": "/JalsaMovies.png",
    "JALSHA MOVIES HD": "/JALSHA MOVIES HD.png",
    "MAA MOVIES HD": "/MAA MOVIES HD.png",
    "MAA MUSIC": "/MAA MUSIC.png",
    "NGC": "/NGC.png",
    "STAR GOLD 2 HD": "/STAR GOLD2 HD.png",
    "STAR GOLD ROMANCE": "/STAR GOLD ROMANCE.png",
    "STAR GOLD SELECT": "/STAR GOLD SELECT.png",
    "STAR GOLD SELECT HD": "/STAR GOLD SELECT HD.png",
    "STAR GOLD THRILLS": "/STAR GOLD THRILLS.png",
    "STAR KIRAN HD": "/STAR KIRAN HD.png",
    "STAR MAA MOVIES HD": "/STAR MAA MOVIES HD.png",
    "STAR MOVIES": "/STAR MOVIES.png",
    "STAR MOVIES SELECT": "/STAR MOVIES SELECT.png",
    "STAR PRAVAH HD": "/STAR PRAVAH HD.png",
    "STAR SPORTS1 TAMIL": "/STAR SPORTS1 TAMIL.png",
    "STAR SPORTS1 TAMIL HD": "/STAR SPORTS1 TAMIL H.png",
    "STAR UTSAV": "/STAR UTSAV.png",
    "STAR UTSAV MOVIES": "/STAR UTSAV MOVIES.png",
    "SUVARNA HD": "/SUVARNA HD.png",
    "SUVARNA PLUS": "/SUVARNA PLUS.png",
    "SUVARNA PLUS COPY": "/SUVARNA PLUS (copy).png",
    "VIJAY SUPER": "/VIJAY SUPER.png",
    "VIJAY SUPER HD": "/VIJAY SUPER HD.png",
    "VIJAY TAKKAR": "/VIJAY TAKKAR.png",
    "ET NOW": "/ET Now.png",
    "ET NOW SWADESH": "/ET NOW SWADESH.png",
    "MIRROR NOW": "/MIRROR NOW.png",
    "MN+HD": "/MN+ HD.png",
    "MNX": "/MNX.png",
    "MNX HD": "/MNX_HD.png",
    "MOVIES NOW HD": "/MOVIES NOW HD.png",
    "MOVIES NOW": "/MOVIES NOW SD.png",
    "ROMEDY NOW": "/ROMEDY NOW.png",
    "TIMES NOW": "/TIMES NOW.png",
    "TIMES NOW NABHARAT": "/TIMES NOW NABHARAT.png",
    "ZOOM": "/ZOOM.png",
    "SET HD": "/SET HD.png",
    "SONY AATH": "/SONY AATH.png",
    "SONY BBC EARTH HD": "/SONY BBC EARTH HD.png",
    "SONY BBC EARTH SD": "/SONY BBC EARTH SD.png",
    "SONY BBC EARTH": "/SONYBBCEARTH.png",
    "SONY MAX HD": "/SONY MAX HD.png",
    "SONY MAX SD": "/SONY MAX SD.png",
    "SONY PAL": "/SONY PAL.png",
    "SONY PIX HD": "/SONY PIX HD.png",
    "SONY PIX SD": "/SONY PIX SD.png",
    "SONY SAB": "/SONY SAB.png",
    "SONY SAB HD": "/SONY SAB HD.png",
    "Sony SET HD": "/Sony SET HD.png",
    "Sony SET": "/SONY SET SD.png",
    "SONY TEN1 HD": "/SONY TEN1 HD.png",
    "SONY TEN1 SD": "/SONY TEN1 SD.png",
    "SONY TEN2 SD": "/SONY TEN2 SD.png",
    "SONY TEN3 HD": "/SONY TEN3HD.png",
    "SONY TEN3 SD": "/SONY TEN3 SD.png",
    "SONY TEN5 HD": "/SONY TEN5 HD.png",
    "SONY TEN5 SD": "/SONY TEN5 SD.png",
    "SONY SPORTS 2": "/SONY SPORTS 2.png",
    "SONY SPORTS 5": "/SONY SPORTS 5.png",
    "SONY WAH": "/SONY WAH.png",
    "SONY YAY": "/SONY YAY.png",
    "SONY MARATHI": "/SONY MARATHI.png",
    "GEMINI COMEDY": "/GEMINI COMEDY.png",
    "GEMINI LIFE": "/GEMINI LIFE.png",
    "GEMINI MOVIES": "/GEMINI MOVIES.png",
    "GEMINI MOVIES HD": "/GEMINI MOVIES HD.png",
    "GEMINI MUSIC": "/GEMINI MUSIC.png",
    "GEMINI MUSIC HD": "/GEMINI MUSIC HD.png",
    "GEMINI TV": "/GEMINI TV.png",
    "GEMINI TV HD": "/GEMINI TV HD.png",
    "SUN MARATHI": "/SUN MARATHI.png",
    "SUN MUSIC": "/SUN MUSIC.png",
    "SURYA COMEDY": "/SURYA COMEDY.png",
    "SURYA MOVIES": "/SURYA MOVIES.png",
    "SURYA MUSIC": "/SURYA MUSIC.png",
    "SURYA TV": "/SURYA TV.png",
    "SURYA TV HD": "/SURYA TV HD.png",
    "UDAYA COMEDY": "/UDAYA COMEDY.png",
    "UDAYA MOVIES": "/UDAYA MOVIES.png",
    "UDAYA MUSIC": "/UDAYA MUSIC.png",
    "UDAYA TV": "/UDAYA TV.png",
    "UDAYA TV HD": "/UDAYA TV HD.png",
    "ABN": "/ABN.png",
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchBouqueData();
      if (data) {
        console.log("Fetched Data:", data);
        setBouqueData(data);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    console.log("Selected Type:", selectedType);
    console.log(
      "Filtered Data:",
      bouqueData.filter((item) => item.type_lbl.toLowerCase() === selectedType.toLowerCase())
    );
  }, [selectedType, bouqueData]);

  const togglePriceDetails = (id: number) => {
    setShowPriceDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBouqueData = bouqueData.filter(
    (item) =>
      item.type_lbl.toLowerCase().replace(/\s+/g, "") === selectedType.toLowerCase().replace(/\s+/g, "") &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 sm:p-10 md:p-40 bg-white text-black">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-center mb-6">Available TV Bouquets</h1>
        <p className="text-gray-500 text-xl mt-2 font-bold mb-6">View all the broadcaster packs available on ULKA TV</p>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        {["Channels", "Broadcaster Packs", "Ulka Bouquets"].map((label) => (
          <button
            key={label}
            onClick={() => setSelectedType(typeMapping[label])}
            className={`px-4 py-2 rounded-md text-lg font-medium ${
              selectedType === typeMapping[label] ? "bg-black text-white" : "bg-red-500 text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative w-full mb-8">
        <FaSearch className="absolute left-3 top-3 text-black" />
        <input
          type="text"
          placeholder="Search channel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-[2rem]">
        {filteredBouqueData.map((item) => (
          <div key={item.id} className="p-3 rounded-lg shadow text-center relative bg-white">
            <p className="font-semibold text-sm mb-2">{item.name}</p>

            <div className="relative w-full flex justify-center">
            <Image
              src={selectedType === "Alacarte" ? channelImages[item.name] || "/images/default.jpg" : ""}
              alt={item.name}
              width={150}
              height={100}
              className={`rounded-md mb-2 ${selectedType !== "Alacarte" ? "hidden" : ""}`}
            />

              {/* <FaInfoCircle
                className="absolute top-2 right-2 text-black cursor-pointer"
                onClick={() => togglePriceDetails(item.id)}
              /> */}
            </div>

            {item.rate.length > 0 && (
                <p className="mt-2 text-sm font-medium">
                  MRP: {Number(item.rate[0].price).toFixed(0)} ₹ / per month
                </p>
              )}


            {showPriceDetails[item.id] && item.rate.length > 1 && (
              <div className="bg-gray-100 p-2 rounded-lg shadow">
                {item.rate.map((rate) =>
                  rate.months !== 1 ? (
                    <p key={rate.id} className="text-sm">
                      {rate.months} Months Price: ₹{rate.price}
                    </p>
                  ) : null
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BouquePage;

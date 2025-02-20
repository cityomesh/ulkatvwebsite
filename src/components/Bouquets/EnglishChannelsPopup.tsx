// "use client";
// import React, { useState } from "react";

// type HindhiChannelsPopupProps = {
//   closeTopMailpage: () => void;
// };

// const categories = [
//   "Hindi Entertainment",
//   "Kids",
//   "Movies",
//   "News",
//   "Sports",
// ];

// const channelsData = [
//   { number: 103, name: "STAR BHARAT HD", category: "Hindi Entertainment", price: 19 },
//   { number: 104, name: "SONY SET HD", category: "Hindi Entertainment", price: 19 },
//   { number: 121, name: "STAR PLUS", category: "Hindi Entertainment", price: 19 },

//   { number: 105, name: "SONY SAB HD", category: "Kids", price: 19 },
//   { number: 107, name: "Zee TV HD", category: "Kids", price: 19 },

//   { number: 101, name: "STAR PLUS HD", category: "Movies", price: 22 },
//   { number: 102, name: "Colors HD", category: "Movies", price: 19 },

//   { number: 108, name: "&Tv HD", category: "News", price: 19 },
//   { number: 109, name: "DD NATIONAL HD", category: "News", price: 0 },

//   { number: 122, name: "STAR BHARAT", category: "Sports", price: 12 },
//   { number: 123, name: "Colors", category: "Sports", price: 19 },
// ];

// const HindhiChannelsPopup = ({ closeTopMailpage }: HindhiChannelsPopupProps) => {
//   const [selectedCategory, setSelectedCategory] = useState("Hindi Entertainment");

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start pt-5 md:pt-10 bg-opacity-50 z-50 bg-gradient-to-b from-[rgba(4,4,4,0.40)] to-[rgba(0,0,0,0.40)]">
//       <div className="max-h-[98vh] w-[85%] max-w-[800px] mx-auto bg-white rounded-xl shadow-xl p-8 border-[1px] mt-[-3rem]">
//         <div className="flex justify-end items-center">
//           <button
//             className="bg-white text-[18px] text-black px-5 h-[33px]"
//             onClick={closeTopMailpage}
//           >
//             Back
//           </button>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex flex-col items-center mt-4 space-y-2">
//           {categories.map((category) => (
//             <div key={category} className="w-full">
//               <button
//                 className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
//                   selectedCategory === category
//                     ? "bg-[#F7961E] text-white"
//                     : "bg-gray-200 text-black"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category}
//               </button>

//               {/* Display Channels only if selected */}
//               {selectedCategory === category && (
//                 <div className="mt-2 space-y-2 p-4 bg-gray-100 rounded-md">
//                   {channelsData
//                     .filter((channel) => channel.category === category)
//                     .map((channel) => (
//                       <div key={channel.number} className="text-center text-sm font-medium">
//                         {channel.name} - ₹{channel.price}
//                       </div>
//                     ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HindhiChannelsPopup;




"use client";
import React, { useState } from "react";

type EnglishChannelsPopupProps = {
  closeTopMailpage: () => void;
};

const categories = ["English Entertainment", "Kids", "Movies", "News", "Sports"];

const channelsData = [
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "English Entertainment", image: "/discoverylogo.png" },
  { category: "English Entertainment", image: "/etvcut.png" },
  { category: "Kids", image: "/sonylogo.png" },
  { category: "Kids", image: "/Star_maa_logo_2023.png" },
  { category: "Kids", image: "/sonylogo.png" },
  { category: "Kids", image: "/Star_maa_logo_2023.png" },
  { category: "Kids", image: "/sonylogo.png" },
  { category: "Kids", image: "/Star_maa_logo_2023.png" },

  { category: "Movies", image: "/timesnowlogo.png" },
  { category: "Movies", image: "/sonylogo.png" },
  { category: "News", image: "/discoverylogo.png" },
  { category: "News", image: "/etvcut.png" },
  { category: "Sports", image: "/fastnet.png" },
  { category: "Sports", image: "/sonylogo.png" },
];

const EnglishChannelsPopup = ({ closeTopMailpage }: EnglishChannelsPopupProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleRows, setVisibleRows] = useState<number>(3);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start pt-5 md:pt-10 bg-opacity-50 z-50 bg-gradient-to-b from-[rgba(4,4,4,0.40)] to-[rgba(0,0,0,0.40)]">
      <div className="max-h-auto w-[85%] max-w-[800px] mx-auto bg-white rounded-xl shadow-xl p-8 border-[1px] mt-[-3rem]">
      <div className="flex justify-between items-center w-full">
        <div className="text-[18px] font-bold text-black">English Channels List</div>
        <button className="bg-white text-[18px] font-bold text-black px-5 h-[33px]" onClick={closeTopMailpage}>
          Back
        </button>
      </div>

        {/* Category List */}
        <div className="flex flex-col items-center mt-4 space-y-2">
          {categories.map((category) => (
            <div key={category} className="w-full">
            <button
              className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                selectedCategory === category ? "bg-black text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setSelectedCategory((prev) => (prev === category ? null : category));
                setVisibleRows(3);
              }}
            >
              {category}
            </button>


              {selectedCategory === category && (
                <div className="mt-2 p-4 bg-white rounded-md">
                  <div className="grid grid-cols-6 gap-4">
                    {channelsData
                      .filter((channel) => channel.category === category)
                      .slice(0, visibleRows * 6)
                      .map((channel, index) => (
                        <div key={index} className="flex justify-center">
                          <img src={channel.image} className="w-32 h-20 rounded-md object-cover" alt="Channel Logo" />
                        </div>
                      ))}
                  </div>

                  {visibleRows * 6 < channelsData.filter((channel) => channel.category === category).length && (
                    <div className="flex justify-center mt-4">
                      <button
                        className="bg-red-400 text-white px-4 py-2 rounded-md"
                        onClick={() => setVisibleRows((prev) => prev + 3)}
                      >
                        Read More
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishChannelsPopup;

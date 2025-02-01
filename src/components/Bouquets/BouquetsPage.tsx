"use client";
import React, { useState } from "react";

const BouquetsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Channels"); // Default tab
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null); // Selected language

  // List of all Indian languages
  const languages: string[] = [
    "Telugu",
    "Hindi",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "Odia",
    "Urdu",
    "Assamese",
  ];

  // Channels grouped by language
  const channelsByLanguage: Record<string, string[]> = {
    Telugu: ["ETV Telugu", "Maa TV", "Gemini TV", "Zee Telugu", "Star Maa"],
    Hindi: ["Star Plus", "Sony TV", "Zee TV", "Colors TV", "DD National"],
    Tamil: ["Sun TV", "Vijay TV", "Zee Tamil", "KTV", "Star Vijay"],
    Kannada: ["Udaya TV", "Colors Kannada", "Zee Kannada", "Star Suvarna"],
    Malayalam: ["Asianet", "Surya TV", "Mazhavil Manorama", "Flowers TV"],
    Bengali: ["Zee Bangla", "Star Jalsha", "Colors Bangla"],
    Marathi: ["Zee Marathi", "Star Pravah", "Colors Marathi"],
    Gujarati: ["Colors Gujarati", "DD Girnar"],
    Punjabi: ["Zee Punjabi", "PTC Punjabi"],
    Odia: ["Tarang TV", "DD Odia", "Prarthana TV"],
    Urdu: ["Zee Salaam", "DD Urdu"],
    Assamese: ["Rang TV", "Prag News", "News Live"],
  };

  const handleTabClick = (tab: string): void => {
    setSelectedTab(tab);
    setSelectedLanguage(null); // Reset language selection
  };

  const handleLanguageClick = (language: string): void => {
    setSelectedLanguage(language);
  };

  return (
    <div className="bg-white w-full p-10 min-h-screen mt-[5rem]">
      <div className="flex flex-col items-center pt-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Ulka Subscription Plans</h1>
          <p className="text-gray-500 mt-2">
            View all the broadcaster packs available on ULKA TV
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mt-6">
          <button
            className={`${
              selectedTab === "Channels" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md shadow-md focus:outline-none`}
            onClick={() => handleTabClick("Channels")}
          >
            Channels
          </button>
          <button
            className={`${
              selectedTab === "Broadcaster Packs" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md shadow-md focus:outline-none`}
            onClick={() => handleTabClick("Broadcaster Packs")}
          >
            Broadcaster Packs
          </button>
          <button
            className={`${
              selectedTab === "Ulka Bouquets" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md shadow-md focus:outline-none`}
            onClick={() => handleTabClick("Ulka Bouquets")}
          >
            Ulka Bouquets
          </button>
        </div>

        {/* Display Languages */}
        {selectedTab === "Channels" && !selectedLanguage && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Select a Language:</h2>
            <ul className="grid grid-cols-2 gap-4">
              {languages.map((language: string, index: number) => (
                <li
                  key={index}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md text-center cursor-pointer hover:bg-red-600 hover:text-white"
                  onClick={() => handleLanguageClick(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Channels for Selected Language */}
        {selectedTab === "Channels" && selectedLanguage && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Channels in {selectedLanguage}:
            </h2>
            <ul className="grid grid-cols-2 gap-4">
              {channelsByLanguage[selectedLanguage]?.map((channel: string, index: number) => (
                <li
                  key={index}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md text-center"
                >
                  {channel}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
              onClick={() => setSelectedLanguage(null)}
            >
              Back to Languages
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BouquetsPage;

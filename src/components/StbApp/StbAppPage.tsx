"use client";
import Image from "next/image";
import React from "react";

const StbAppPage = () => {
  const images = [{ src: "/vcdhg.png", alt: "Smart TV" }];

  return (
    <div className="bg-white p-8">
      {/* Heading */}
      <div className="mt-[5rem] mb-8">
        <h2 className="text-center font-semibold text-2xl md:text-3xl font-poppins text-blue-800 mt-[8rem]">
          Set-Top-Box
        </h2>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 px-4">
        <div className="w-full max-w-[630px]">
          <Image
            src="/devsg.png"
            alt="UlkaTV Device Image"
            width={900}
            height={600}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={600}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="flex flex-wrap justify-center gap-5 mb-8 px-4">
        {[
          "We have developed AOSP (Android Open Source Platform) STBs with a customized launcher that complies with TRAI regulations.",
          "OTT apps are available to users, and their placement is managed by our DRM Application Server or a dedicated OTA server to ensure scalability.",
          "Ulka Lite App is available on Google TV / Android TV Play Stores, usable within our partner network. Alternatively, it can be downloaded from our website and installed manually on AOSP STBs or Smart TVs (Android versions 7.1 to 13).",
          "UlkaTV App is approved in the Samsung App Store and complies with all regulatory requirements.",
          "Our DRM solution supports Tizen OS version 3.0 and above, covering Samsung TV models from 2016 to 2024.",
          "UlkaTV App is approved in the LG App Store and works on all models running WebOS 3.0 and above. Currently, only FTA channels are enabled, and fingerprint compliance is under development.",
        ].map((text, index) => (
          <div
            key={index}
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-md sm:max-w-lg lg:max-w-2xl hover:bg-yellow-400 hover:text-black"
          >
            <h2 className="text-sm md:text-lg font-bold">{text}</h2>
          </div>
        ))}
      </div>

      {/* UlkaTV Description Section */}
      <div className="bg-gray-100 rounded-xl p-6 sm:p-10 max-w-5xl mx-auto shadow-md">
        <p className="text-gray-800 text-base sm:text-lg mb-4 text-justify">
          UlkaTV is a digital television service provider that delivers live TV channels, video-on-demand,
          and OTT content through its own app and platform. It supports various devices such as Smart TVs,
          Set-Top Boxes (STBs), Android TV, and AOSP-based systems.
        </p>
        <h3 className="text-xl font-semibold text-blue-700 mb-2 mt-6">Key Features of UlkaTV:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Access to Live TV Channels (FTA & Pay)</li>
          <li>Support for popular OTT apps (like YouTube, Hotstar, etc.)</li>
          <li>Works on Android TV, Smart TV, AOSP STBs</li>
          <li>Available on Google Play Store, Samsung & LG App Stores (in progress or approved)</li>
          <li>Custom launcher and DRM compliance</li>
          <li>Partner-based network streaming</li>
        </ul>
        <p className="mt-4 text-gray-800 font-medium">
          UlkaTV transforms your regular TV into a smart entertainment hub with reliable and scalable delivery.
        </p>
      </div>
    </div>
  );
};

export default StbAppPage;

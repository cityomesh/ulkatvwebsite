"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Smartmobilepage = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="mt-6 p-6">
        <h2 className="text-center font-semibold text-4xl font-poppins text-blue-800 mt-[5rem]">
          Smart Apps for Mobile
        </h2>
      </div>

      {/* Top Mobile Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full max-w-[830px]">
          <Image
            src="/ulkaminiphone.png"
            alt="UlkaTV Mobile Interface"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[260px]">
          <Image
            src="/listchannel.png"
            alt="UlkaTV Channel List"
            width={1500}
            height={300}
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4">
        {[
          "UlkaTV mobile apps for Android smartphones are available on all major app stores.",
          "The app adheres to regulatory standards. Channels are accessible only within the authorized ISP/CDN partner network.",
          "The iOS version of the UlkaTV app is under development with planned Widevine DRM integration (Apple FairPlay not required).",
          "Customers can use the UlkaTV mobile app for subscription management, renewals, and package selection — all without reseller dependency.",
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
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>

      {/* Bottom Mobile Images */}
      <div className="flex justify-center gap-6 items-center mt-[3rem] px-4">
        <div className="w-full max-w-[370px]">
          <Image
            src="/yhfgh.png"
            alt="UlkaTV Mobile App"
            width={1500}
            height={700}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[330px]">
          <Image
            src="/ulkaphone.png"
            alt="UlkaTV on Phone"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[330px]">
          <Image
            src="/wuyger.png"
            alt="UlkaTV Streaming"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[350px]">
          <Image
            src="/channelstvs.png"
            alt="UlkaTV Channel Preview"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Subscription Features */}
      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4 mb-2">
        {[
          "UlkaTV App allows customers to manage subscriptions including package renewals, on-demand packs, and a-la-carte channels — directly from their mobile.",
          "UlkaTV App activation is seamless via barcode scanning shown on the TV screen when attempting to access unsubscribed channels.",
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
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>

      {/* Final Note */}
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold text-center text-white mb-8 mt-8 bg-[#0a0f2c] p-5 rounded-lg shadow-md w-full max-w-[90%] sm:max-w-[85rem] hover:bg-blue-400 hover:text-black">
          UlkaTV Mobile App is available for Android smartphones. iPhone version is under development.
        </h1>
      </div>
    </div>
  );
};

export default Smartmobilepage;

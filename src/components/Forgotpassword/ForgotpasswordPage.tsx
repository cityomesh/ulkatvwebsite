// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function ForgotPasswordPage() {
//   const [mobile, setMobile] = useState("");
//   const [userId, setUserId] = useState("");

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-900">
//       <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-lg">
//         <div className="text-center mb-6">
//           <Image 
//             src="/tv (2).png" 
//             alt="ULKA TV Logo" 
//             width={300} 
//             height={150} 
//             className="mx-auto bg-black"
//           />
//         </div>

//         <div className="mt-4">
//           <input
//             type="tel"
//             placeholder="Enter mobile number"
//             className="w-full p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//         </div>

//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Enter user ID"
//             className="w-full p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//           />
//         </div>

//         <button className="w-full mt-5 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
//           Get OTP
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleGetOTP = async () => {
    if (!mobile || !userId) {
      setMessage("Please enter Mobile No. and User ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://mynetvision.tv:82/v1/webcustomer/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_detail: userId,
          account_detail: mobile,
          password: "654321", // Default password
          otp: "123456", // Default OTP
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP sent successfully!");
      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-xl p-6 bg-black rounded-lg shadow-lg">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <Image 
            src="/tv (2).png" 
            alt="ULKA TV Logo" 
            width={300} 
            height={150} 
            className="mx-auto bg-black"
          />
        </div>

        {/* Mobile Number Input */}
        <div className="mt-4">
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        {/* User ID Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter user ID"
            className="w-full p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        {/* API Response Message */}
        {message && <p className="text-center text-white mt-4">{message}</p>}

        {/* Get OTP Button */}
        <button 
          className="w-full mt-5 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition disabled:opacity-50"
          onClick={handleGetOTP}
          disabled={loading}
        >
          {loading ? "Sending..." : "Get OTP"}
        </button>
      </div>
    </div>
  );
}

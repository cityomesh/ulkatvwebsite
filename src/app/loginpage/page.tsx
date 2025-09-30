// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const validUser = "Ulkatvadmin";
//       const validPass = "admin@123";

//       if (username === validUser && password === validPass) {
//         setSuccess("User login successful!");
//         localStorage.setItem("access_token", "dummy_token_12345");

//         setTimeout(() => {
//           router.push("/");
//         }, 1000);
//       } else {
//         setError("Invalid username or password. Please try again.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/bg-texture.jpg')" }} // 🔥 Add your background image in /public folder
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black/60 to-red-900/10"></div>

//       {/* Page Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full">
        
//         {/* RIGHT SIDE → TV Image */}
//         <div className="flex justify-center items-center m-4">
//           <Image
//             src="/tv.png"
//             alt="TV Image"
//             width={700}
//             height={400}
//             className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[700px] h-auto drop-shadow-2xl"
//             priority
//           />
//         </div>

//         {/* LEFT SIDE → Login Card */}
//         <div className="relative w-full max-w-md sm:max-w-lg p-8 bg-black bg-opacity-80 rounded-lg shadow-lg m-4">
//           {/* Floating Logo */}
//           <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
//             <Image
//               src="/tv (2).png"
//               alt="ULKA TV Logo"
//               width={500}
//               height={280}
//               className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto drop-shadow-lg"
//               priority
//             />
//           </div>

//           <div className="mt-12">
//             <form onSubmit={handleLogin}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-4 mb-6 bg-white text-black rounded-md focus:outline-none"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-4 mb-6 bg-white text-black rounded-md focus:outline-none"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
//               {success && <p className="text-green-400 text-sm mb-3">{success}</p>}
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition-all duration-300"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             <div className="flex justify-between text-sm mt-4 text-gray-400">
//               <a href="#" className="hover:text-white">
//                 Signup/Register
//               </a>
//               <a href="/forgotpassword" className="hover:text-white">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const validUser = "Ulkatvadmin";
      const validPass = "admin@123";

      if (username === validUser && password === validPass) {
        setSuccess("User login successful!");
        localStorage.setItem("access_token", "dummy_token_12345");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-texture.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black/60 to-red-900/10"></div>

      {/* Page Content */}
<div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center w-full">
  
  {/* RIGHT SIDE → TV Image */}
  <div className="flex justify-center items-center m-4">
    <Image
      src="/tv.png"
      alt="TV Image"
      width={700}
      height={400}
      className="w-52 sm:w-72 md:w-[350px] lg:w-[500px] xl:w-[650px] h-auto drop-shadow-2xl"
      priority
    />
  </div>

    {/* <div className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg p-6 sm:p-8 bg-black bg-opacity-80 rounded-lg shadow-lg m-4"> */}

        {/* LEFT SIDE → Login Card */}
        <div
          className="
            relative 
            w-[90%] max-w-sm      /* Mobile lo small */
            sm:max-w-md           /* Tablet lo kuncham pedda */
            lg:max-w-lg           /* Desktop lo baaga wide */
            p-6 sm:p-8 
            bg-black bg-opacity-80 
            rounded-lg shadow-lg m-4
          "
        >
          {/* Floating Logo */}
          <div className="absolute -top-14 sm:-top-20 left-1/2 transform -translate-x-1/2">
            <Image
              src="/tv (2).png"
              alt="ULKA TV Logo"
              width={500}
              height={280}
              className="w-24 sm:w-40 md:w-56 lg:w-72 h-auto drop-shadow-lg"
              priority
            />
          </div>

          <div className="sm:mt-8">
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 sm:p-4 mb-4 sm:mb-6 bg-white text-black rounded-md focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 sm:p-4 mb-4 sm:mb-6 bg-white text-black rounded-md focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
              {success && <p className="text-green-400 text-sm mb-3">{success}</p>}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 rounded-md transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="flex justify-between text-xs sm:text-sm mt-4 text-gray-400">
              <a href="#" className="hover:text-white">
                Signup/Register
              </a>
              <a href="/forgotpassword" className="hover:text-white">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

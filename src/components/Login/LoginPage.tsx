// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const router = useRouter(); // Next.js router

// //   const handleLogin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await fetch(
// //         "http://202.62.66.122/api/railtel.php/v1/user/login?vr=railtel1.1",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             LoginForm: {
// //               username,
// //               password,
// //             },
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         alert("Login successful!");
// //         console.log("User Data:", data.data);
// //         localStorage.setItem("access_token", data.data.access_token);

// //         // Navigate to home page
// //         router.push("/");
// //       } else {
// //         setError("Invalid credentials. Please try again.");
// //       }
// //     } catch (error) {
// //       setError("Something went wrong. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-black">
// //       <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
// //         <div className="text-center mb-6">
// //           <h1 className="text-2xl font-bold text-white">ULKA TV</h1>
// //           <p className="text-gray-400 text-sm">LOGIN TO ENTERTAINMENT</p>
// //         </div>
// //         <form onSubmit={handleLogin}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
// //           <button
// //             type="submit"
// //             className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md"
// //             disabled={loading}
// //           >
// //             {loading ? "Logging in..." : "Login"}
// //           </button>
// //         </form>
// //         <div className="flex justify-between text-sm mt-4 text-gray-400">
// //           <a href="#" className="hover:text-white">
// //             Signup/Register
// //           </a>
// //           <a href="#" className="hover:text-white">
// //             Forgot password?
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const router = useRouter(); // Next.js router

// //   const handleLogin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await fetch(
// //         "http://202.62.66.122/api/railtel.php/v1/user/login?vr=railtel1.1",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             LoginForm: {
// //               username,
// //               password,
// //             },
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         alert("Login successful!");
// //         console.log("User Data:", data.data);
// //         localStorage.setItem("access_token", data.data.access_token);

// //         // Navigate to home page
// //         router.push("/");
// //       } else {
// //         setError("Invalid credentials. Please try again.");
// //       }
// //     } catch (error) {
// //       setError("Something went wrong. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-900">
// //       <div className="w-full max-w-xl p-8 bg-black rounded-lg shadow-lg">
// //         <div className="text-center mb-6">
// //         <Image 
// //             src="/tv (2).png" 
// //             alt="ULKA TV Logo" 
// //             width={300} 
// //             height={150} 
// //             className="mx-auto bg-black"
// //         />
// //         </div>
// //         <form onSubmit={handleLogin}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
// //           <button
// //             type="submit"
// //             className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md"
// //             disabled={loading}
// //           >
// //             {loading ? "Logging in..." : "Login"}
// //           </button>
// //         </form>
// //         <div className="flex justify-between text-sm mt-4 text-gray-400">
// //           <a href="#" className="hover:text-white">
// //             Signup/Register
// //           </a>
// //           <a href="#" className="hover:text-white">
// //             Forgot password?
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



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
//   const router = useRouter(); // Next.js router

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const response = await fetch(
//         "https://partners.ulka.tv/api/railtel.php/v1/user/login?vr=railtel1.1",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             LoginForm: {
//               username,
//               password,
//             },
//           }),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         setSuccess("User login successful!");
//         console.log("User Data:", data.data);
//         localStorage.setItem("access_token", data.data.access_token);

//         setTimeout(() => {
//           router.push("/");
//         }, 1000); // Delay navigation slightly for UX
//       } else {
//         setError(data.message || "Invalid credentials. Please try again.");
//       }
//      } catch {
//       setError("Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="w-full max-w-xl p-8 bg-black rounded-lg shadow-lg">
//         <div className="text-center mb-6">
//           <Image 
//             src="/tv (2).png" 
//             alt="ULKA TV Logo" 
//             width={300} 
//             height={150} 
//             className="mx-auto bg-black"
//           />
//         </div>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//           {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
//           <button
//             type="submit"
//             className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <div className="flex justify-between text-sm mt-4 text-gray-400">
//           <a href="#" className="hover:text-white">
//             Signup/Register
//           </a>
//           <a href="/forgotpassword" className="hover:text-white">
//             Forgot password?
//           </a>
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
      const validUser = "Maintest";
      const validPass = "test@123";

      if (username === validUser && password === validPass) {
        setSuccess("User login successful!");
        localStorage.setItem("access_token", "dummy_token_12345");

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-xl p-8 bg-black rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <Image 
            src="/tv (2).png" 
            alt="ULKA TV Logo" 
            width={300} 
            height={150} 
            className="mx-auto bg-black"
          />
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 bg-white text-black rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex justify-between text-sm mt-4 text-gray-400">
          <a href="#" className="hover:text-white">
            Signup/Register
          </a>
          <a href="/forgotpassword" className="hover:text-white">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

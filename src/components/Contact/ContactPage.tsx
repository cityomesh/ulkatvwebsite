// "use client";
// import { useState } from "react";
// import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

// const Contactpage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           phoneNumber: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         const errorText = await response.text();
//         console.error("Server response:", errorText);
//         alert(`Failed to send the message: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       alert("An error occurred. Please check your backend server and network connection.");
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="container mx-auto p-6">
//         <div className="flex flex-col lg:flex-row justify-center mt-32 gap-6">
//           <div className="lg:w-1/2 space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <MapPin size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Corporate Office :</h3>
//                 <p className="text-gray-600">City Online Media Pvt Ltd.</p>
//                 <p className="text-gray-600 text-sm">
//                   709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad, Telangana 500038
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <Phone size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Mobile :</h3>
//                 <p className="text-gray-600">+91 74164 10222</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <EnvelopeSimple size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Email :</h3>
//                 <p className="text-gray-600">partners@ulka.tv</p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="w-full relative">
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     First Name
//                   </label>
//                 </div>
//                 <div className="w-full relative">
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Last Name
//                   </label>
//                 </div>
//               </div>

//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="w-full relative">
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Phone Number
//                   </label>
//                 </div>
//                 <div className="w-full relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Email
//                   </label>
//                 </div>
//               </div>

//               <div className="relative">
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder=" "
//                   className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                   Subject
//                 </label>
//               </div>

//               <div className="relative">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder=" "
//                   className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//                 <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                   Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-[#0a0f2c] transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.504926263192!2d78.4454461!3d17.4364976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005ff34afb%3A0x53f45a43a87b33e9!2sCity%20Online%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
//           className="w-full h-96 mt-8 rounded"
//           loading="lazy"
//           frameBorder="0"
//           allowFullScreen
//           aria-hidden="false"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contactpage;

// "use client";
// import { useState } from "react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Input change handler
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit handler to send email
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       const response = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setSuccess(true);
//         setFormData({ name: "", email: "", message: "" }); // Reset form
//       } else {
//         setError("Something went wrong. Try again later.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={4}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">Message sent successfully!</p>}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

// "use client";
// import { useState } from "react";
// import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

// const Contactpage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           phoneNumber: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         const errorText = await response.text();
//         console.error("Server response:", errorText);
//         alert(`Failed to send the message: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       alert("An error occurred. Please check your backend server and network connection.");
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="container mx-auto p-6">
//         <div className="flex flex-col lg:flex-row justify-center mt-32 gap-6">
//           <div className="lg:w-1/2 space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <MapPin size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Corporate Office :</h3>
//                 <p className="text-gray-600">City Online Media Pvt Ltd.</p>
//                 <p className="text-gray-600 text-sm">
//                   709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad, Telangana 500038
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <Phone size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Mobile :</h3>
//                 <p className="text-gray-600">+91 96760 15678</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-blue-900">
//                 <EnvelopeSimple size={40} weight="bold" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Email :</h3>
//                 <p className="text-gray-600">ashish@techsai.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="w-full relative">
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     First Name
//                   </label>
//                 </div>
//                 <div className="w-full relative">
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Last Name
//                   </label>
//                 </div>
//               </div>

//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="w-full relative">
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Phone Number
//                   </label>
//                 </div>
//                 <div className="w-full relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder=" "
//                     className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                     Email
//                   </label>
//                 </div>
//               </div>

//               <div className="relative">
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder=" "
//                   className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                   Subject
//                 </label>
//               </div>

//               <div className="relative">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder=" "
//                   className="peer w-full px-4 py-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//                 <label className="absolute left-4 -top-2 text-gray-500 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-blue-600">
//                   Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-[#0a0f2c] transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.504926263192!2d78.4454461!3d17.4364976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005ff34afb%3A0x53f45a43a87b33e9!2sCity%20Online%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
//           className="w-full h-96 mt-8 rounded"
//           loading="lazy"
//           frameBorder="0"
//           allowFullScreen
//           aria-hidden="false"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contactpage;

// "use client";
// import { useState } from "react";
// import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

// const Contactpage = () => {
//   // Contact Form State
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   // Application Form State
//   const [applicationData, setApplicationData] = useState({
//     first_name: "",
//     last_name: "",
//     dob: "",
//     email: "",
//   });

//   const [applicationMessage, setApplicationMessage] = useState("");

//   // Contact Form Change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Application Form Change
//   const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setApplicationData({ ...applicationData, [name]: value });
//   };

//   // Contact Form Submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           phoneNumber: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         const errorText = await response.text();
//         console.error("Server response:", errorText);
//         alert(`Failed to send the message: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       alert("An error occurred. Please check your backend server and network connection.");
//     }
//   };

//   // Application Form Submit
//   const handleApplicationSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("/api/sendMail", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(applicationData),
//     });

//     const data = await res.json();
//     setApplicationMessage(data.message);
//     setApplicationData({
//       first_name: "",
//       last_name: "",
//       dob: "",
//       email: "",
//     });
//   };

//   return (
//     <div className="bg-white">
//       <div className="container mx-auto p-12">
//         <div className="flex flex-col lg:flex-row justify-center mt-32 gap-6">
//           {/* Contact Info Section */}
//           <div className="lg:w-1/2 space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>

//             <div className="flex items-start space-x-4">
//               <MapPin size={40} weight="bold" className="text-blue-900" />
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Corporate Office :</h3>
//                 <p className="text-gray-600">City Online Media Pvt Ltd.</p>
//                 <p className="text-gray-600 text-sm">
//                   709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad, Telangana 500038
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <Phone size={40} weight="bold" className="text-blue-900" />
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Mobile :</h3>
//                 <p className="text-gray-600">+91 96760 15678</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <EnvelopeSimple size={40} weight="bold" className="text-blue-900" />
//               <div>
//                 <h3 className="text-lg font-semibold text-blue-900">Email :</h3>
//                 <p className="text-gray-600">ashish@techsai.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
//           {/* <div className="mt-16 max-w-xl mx-auto bg-white p-6 rounded shadow"> */}
//           {/* <h2 className="text-2xl font-bold text-center mb-4 text-blue-900">Application Form</h2> */}
//           <form onSubmit={handleApplicationSubmit}>
//             <label className="block font-semibold mt-4">First Name:</label>
//             <input
//               name="first_name"
//               type="text"
//               required
//               value={applicationData.first_name}
//               onChange={handleApplicationChange}
//               className="w-full p-2 mt-1 border rounded"
//             />

//             <label className="block font-semibold mt-4">Last Name:</label>
//             <input
//               name="last_name"
//               type="text"
//               required
//               value={applicationData.last_name}
//               onChange={handleApplicationChange}
//               className="w-full p-2 mt-1 border rounded"
//             />

//             <label className="block font-semibold mt-4">Date of Birth:</label>
//             <input
//               name="dob"
//               type="date"
//               required
//               value={applicationData.dob}
//               onChange={handleApplicationChange}
//               className="w-full p-2 mt-1 border rounded"
//             />

//             <label className="block font-semibold mt-4">Email ID:</label>
//             <input
//               name="email"
//               type="email"
//               required
//               value={applicationData.email}
//               onChange={handleApplicationChange}
//               className="w-full p-2 mt-1 border rounded"
//             />

//             <button
//               type="submit"
//               className="w-full mt-6 bg-blue-900 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Submit Application
//             </button>
//           </form>

//           {applicationMessage && (
//             <p className="text-center text-green-600 font-semibold mt-4">
//               {applicationMessage}
//             </p>
//           )}
//         </div>
//           </div>
//         </div>

        

//         {/* Google Map */}
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.504926263192!2d78.4454461!3d17.4364976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005ff34afb%3A0x53f45a43a87b33e9!2sCity%20Online%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
//           className="w-full h-96 mt-8 rounded"
//           loading="lazy"
//           frameBorder="0"
//           allowFullScreen
//           aria-hidden="false"
//         ></iframe>
//       </div>
//     // </div>
//   );
// };

// export default Contactpage;


"use client";
import { useState } from "react";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

const ContactPage = () => {
  const [applicationData, setApplicationData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    user_email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [applicationMessage, setApplicationMessage] = useState("");

  const handleApplicationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    const data = await res.json();
    setApplicationMessage(data.message);

    setApplicationData({
      first_name: "",
      last_name: "",
      dob: "",
      user_email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-white mt-8">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row justify-center mt-32 gap-6">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>

            <div className="flex items-start space-x-4">
              <MapPin size={40} className="text-blue-900" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Corporate Office:</h3>
                <p className="text-gray-600">City Online Media Pvt Ltd.</p>
                <p className="text-gray-600 text-sm">
                  709, 7th Floor, Aditya Trade Center, Ameerpet, Hyderabad
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone size={40} className="text-blue-900" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Mobile:</h3>
                <p className="text-gray-600">+91 96760 15678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeSimple size={40} className="text-blue-900" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Email:</h3>
                <p className="text-gray-600">ashish@techsai.com</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-4">
            <form onSubmit={handleApplicationSubmit}>
              {/* First Row: First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-sm">First Name:</label>
                  <input
                    name="first_name"
                    type="text"
                    required
                    value={applicationData.first_name}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm">Last Name:</label>
                  <input
                    name="last_name"
                    type="text"
                    required
                    value={applicationData.last_name}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
              </div>

              {/* DOB & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="block font-semibold text-sm">Date of Birth:</label>
                  <input
                    name="dob"
                    type="date"
                    required
                    value={applicationData.dob}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm">Email ID:</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    value={applicationData.user_email}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
              </div>

              {/* Phone & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="block font-semibold text-sm">Phone Number:</label>
                  <input
                    name="phone"
                    type="text"
                    required
                    value={applicationData.phone}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm">Address:</label>
                  <input
                    name="address"
                    type="text"
                    required
                    value={applicationData.address}
                    onChange={handleApplicationChange}
                    className="w-full p-1.5 mt-1 border rounded"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-3">
                <label className="block font-semibold text-sm">Message:</label>
                <textarea
                  name="message"
                  required
                  value={applicationData.message}
                  onChange={handleApplicationChange}
                  className="w-full p-1.5 mt-1 border rounded"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-900 text-white py-1.5 rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>

            {applicationMessage && (
              <p className="text-center text-green-600 font-semibold mt-3 text-sm">
                {applicationMessage}
              </p>
            )}
          </div>

                  </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.504926263192!2d78.4454461!3d17.4364976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005ff34afb%3A0x53f45a43a87b33e9!2sCity%20Online%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
          className="w-full h-96 mt-8 rounded"
          loading="lazy"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

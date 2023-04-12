// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { addToDb } from "../../utilities/fakedb";

// const JobDetails = () => {
//   const { id } = useParams();

//   const [details, setDetails] = useState([]);
//   useEffect(() => {
//     fetch("/jobs.json")
//       .then((res) => res.json())
//       .then((data) => setDetails(data));
//   }, []);

//   const matcheddetails = details.find((jb) => jb.id == id);
//   let Mdetails = {};
//   if (matcheddetails) {
//     Mdetails = matcheddetails;
//   }

//   console.log(Mdetails.id);
//   const {
//     jobdescription,
//     jobresponsibility,
//     educationalrequirement,
//     experience,
//     salary,
//     jobtitle,
//     location,
//     email,
//     phone,
//   } = Mdetails;
//   const handleAddDb = (id) => {
//     addToDb(id);
//   };

//   return (
//     <div>
//       <h1 className="text-purple-900 text-center font-semibold text-4xl mt-11">
//         Job Details
//       </h1>
//       <div className="md:flex gap-20 justify-center items-center my-20">
//         <div className="md:w-[60%] w-full border rounded-md border-purple-500 p-10 bg-gray-100">
//           <h1>
//             <span className="text-lg font-semibold  ">job description </span>:{" "}
//             {jobdescription}
//           </h1>
//           <h1>
//             <span className="text-lg font-semibold">job responsibility </span>:{" "}
//             {jobresponsibility}
//           </h1>
//           <h1>
//             <span className="text-lg font-semibold">
//               educational requirement{" "}
//             </span>
//             : {educationalrequirement}
//           </h1>
//           <h1>
//             <span className="text-lg font-semibold">experience </span>:{" "}
//             {experience}
//           </h1>
//         </div>
//         <div className="md:w-[20%] w-full my-2">
//           <div className="w-[100%] border rounded-md border-purple-500 p-10  bg-gray-100">
//             <h3 className="text-lg font-semibold border-purple-500 border-b-2">job details</h3>
//             <hr className="text-purple-800 h-1" />
//             <h1>
//               <span className="text-lg font-semibold">salary </span>: {salary}
//             </h1>
//             <h1>
//               <span className="text-lg font-semibold">jobtitle </span>:{" "}
//               {jobtitle}
//             </h1>
//             <h1 className="text-lg font-semibold border-purple-500 border-b-2">contact information</h1>
//             <hr className="text-purple-800 h-1" />
//             <h1>
//               <span className="text-lg font-semibold">Email</span>:{email}
//             </h1>
//             <h1>
//               <span className="text-lg font-semibold">Phone </span>: {phone}
//             </h1>
//             <h1>
//               <span className="text-lg font-semibold">location </span>:
//               {location}
//             </h1>
//           </div>
//           <button
//             onClick={() => handleAddDb(Mdetails.id)}
//             className="font-semibold mt-5 text-xl w-full hover:bg-white p-3 rounded-md border-purple-900 border hover:text-purple-500 bg-purple-500 text-white "
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;
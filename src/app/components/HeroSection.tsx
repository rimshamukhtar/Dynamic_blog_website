// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div
//     className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
//     style={{
//       backgroundImage: "url('AIbg.jpg')", 
//     }}
//     >
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-[600px] h-80 text-center
//   transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
//           <h1 className="text-4xl font-bold text-cyan-950 mb-4">Welcom to Rimsha's Blog</h1>
//           <p className="text-white/90">
//             This is a demonstration of a glass effect created using Tailwind CSS in Next.js.
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus culpa modi esse vitae ullam eaque quasi corporis. Voluptatem veniam amet nostrum saepe ab ipsa explicabo reiciendis ducimus. Natus, voluptas.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection



// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
//       style={{
//         backgroundImage: "url('AIbg.jpg')",
//       }}
//     >
    
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-[600px] h-80 text-center 
//           transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
//         >
//           <h1
//             className="text-4xl font-bold text-cyan-950 mb-4 
//             transition-colors duration-300 hover:text-white"
//           >
//             Welcome to Rimsha's Blog
//           </h1>
//           <p className="text-white/90">
//             This is a demonstration of a glass effect created using Tailwind CSS in Next.js.
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus culpa modi esse vitae ullam eaque quasi corporis. Voluptatem veniam amet nostrum saepe ab ipsa explicabo reiciendis ducimus. Natus, voluptas.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    <div
  className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
          style={{
        backgroundImage: "url('AIbg.jpg')",
      }}
    >
   
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 ">
        <div
          className="bg-white/20 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-lg w-1/2 sm:w-[600px] h-[400x]  text-center 
         "
        >
          <h1
            className="text-2xl sm:text-4xl font-bold text-cyan-950 mb-4 
            transition-colors duration-300 hover:text-white"
          >
         Welcome to &quot;Shaping Tomorrow: AI and the Future&quot;!
          </h1>
          <p className="font-bold sm:text-base text-white/90 ">
          Dive into the fascinating world of Artificial Intelligence and its transformative potential for the future. From advancements in technology to the ethical challenges it presents, we explore how AI is revolutionizing industries, reshaping societies, and redefining what's possible. Join us on this journey to uncover the boundless opportunities and implications of AI in the coming decades.    </p>
          <button className='w-36 h-11 border-2  mt-4 rounded-md bg-cyan-800 font-bold border-cyan-950 hover:text-cyan-800 hover:bg-white'>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
//       <div className="text-center text-white">
//         <h1 className="text-4xl font-bold">Welcome to the Future of AI</h1>
//         <p className="mt-4 text-lg">
//           Explore how AI is transforming every aspect of life.
//         </p>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// interface CardProps {
//   image: string;
//   title: string;
//   description: string;
// }

// const Cards = ({ image, title, description }: any) => {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//           <p className="text-gray-600 mt-2 text-sm">{description}</p>
//         </div>
//       </div>
//     );
//   };
  
  // export default Cards;

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
      <h3  className="text-lg font-semibold text-gray-800">{title}</h3>
      <p  className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Cards;


// import Image from "next/image";

// export default function Cards({ image, title, description }: { image: string; title: string; description: string }) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300">
//       <Image
//         src={image}
//         alt={title}
//         width={300}
//         height={200}
//         className="rounded-t-lg"
//       />
//       <h2 className="text-xl font-bold mt-4">{title}</h2>
//       <p className="text-gray-600 mt-2">{description}</p>
//     </div>
//   );
// }


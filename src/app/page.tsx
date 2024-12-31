// import HeroSection from "./components/HeroSection";
// import Cards from "./components/Cards";

// export default function Home() {
//   const blogPosts = [
//     {
//       slug: "ai-in-healthcare",
//       image: "/AI in health.jpg",
//       title: "AI for Health",
//       description: "How AI is transforming healthcare through advanced technology.",
//     },
//     {
//       slug: "ai-in-education",
//       image: "/AI in education.jpg",
//       title: "AI in Learning",
//       description: "Empowering students with personalized learning and smart classrooms.",
//     },
//     {
//       slug: "ai-in-autonomous",
//       image: "/AI in Autonomous.jpeg",
//       title: "AI on Wheels",
//       description: "Shaping the future of transportation with autonomous vehicles.",
//     },
//     {
//       slug: "ai-in-fintech",
//       image: "/AI in fintech.webp",
//       title: "AI in FinTech",
//       description: "Revolutionizing finance with fraud detection and robo-advisors.",
//     },
//     {
//       slug: "ai-in-entertainment",
//       image: "/AI in Entertainment.png",
//       title: "AI in Entertainment",
//       description: "Redefining creativity with AI-generated music and virtual worlds.",
//     },
//     {
//       slug: "ai-in-environment",
//       image: "/AI in Environment.jpeg",
//       title: "AI for a Greener Earth",
//       description: "Promoting sustainability through smart farming and energy management.",
//     },
//   ];

//   return (
//     <div>
//       <HeroSection />
//       <div className="min-h-screen py-10 px-5 bg-cover bg-gradient-to-r from-gray-800 via-cyan-600 to-black">
//         <h1 className="text-center text-3xl font-bold text-white mb-8">
//           AI in Future
//         </h1>
//         <div className="flex flex-wrap justify-center gap-6">
//           {blogPosts.map((post, index) => (
//             // <a
//             //   key={index}
//             //   href={`/blog/${post.slug}`}
//             //   className="transition-transform transform hover:scale-105 duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//             // >
//             <a
//               key={post.slug} {/* Updated the key */}
//               href={`/blog/${post.slug}`}
//               className="transition-transform transform hover:scale-105 duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//             >
//               <Cards
//                 image={post.image}
//                 title={post.title}
//                 description={post.description}
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Link from "next/link";



export default function Home() {
  const blogPosts = [
    {
      slug: "ai-in-healthcare",
      image: "/AI in health.jpg",
      title: "AI for Health",
      description: "How AI is transforming healthcare through advanced technology.",
    },
    {
      slug: "ai-in-education",
      image: "/AI in education.jpg",
      title: "AI in Learning",
      description: "Empowering students with personalized learning and smart classrooms.",
    },
    {
      slug: "ai-in-autonomous",
      image: "/AI in Autonomous.jpeg",
      title: "AI on Wheels",
      description: "Shaping the future of transportation with autonomous vehicles.",
    },
    {
      slug: "ai-in-fintech",
      image: "/AI in fintech.webp",
      title: "AI in FinTech",
      description: "Revolutionizing finance with fraud detection and robo-advisors.",
    },
    {
      slug: "ai-in-entertainment",
      image: "/AI in Entertainment.png",
      title: "AI in Entertainment",
      description: "Redefining creativity with AI-generated music and virtual worlds.",
    },
    {
      slug: "ai-in-environment",
      image: "/AI in Environment.jpeg",
      title: "AI for a Greener Earth",
      description: "Promoting sustainability through smart farming and energy management.",
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className="min-h-screen py-10 px-5 bg-cover bg-gradient-to-r from-gray-800 via-cyan-600 to-black">
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          AI in Future
        </h1>
   

<div className="flex flex-wrap justify-center gap-6">
  {blogPosts.map((post) => (
    <Link
      
    
      key={post.slug} // This is the key prop
      href={`/blog/${post.slug}`}
      className="transition-transform transform hover:scale-105 duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
              <Cards
              key={post.slug}
                image={post.image}
                title={post.title}
                description={post.description}
              />
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}




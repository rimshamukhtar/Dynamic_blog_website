import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-gray-100 p-6 
    "
    
    style={{
      backgroundImage: "url('Aboutbg.jpg')",
    }}>
      <div className="max-w-4xl bg-white/20 backdrop-blur-md  shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
     
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 bg-purple-400">
          <Image
            src="/About pic.webp" 
            alt="About Me"
            width={300}
            height={300}
            className="bg-purple-300 w-[300px] h-[300px]"
          />
        </div>

        <div className="md:w-2/3 md:pl-8 ">
     
          <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
          <p className="text-white text-lg mb-6">
            Hello! I’m <span className="font-bold text-black">Rimsha</span>, a tech enthusiast and aspiring developer with a passion for creating meaningful web experiences. I enjoy blending creativity with technology to build projects that inspire and educate others.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-3">About the Blog</h2>
          <p className="text-white text-lg">
            Welcome to my blog, <span className="font-bold text-black">AI in Future</span>. This platform is dedicated to uncovering the limitless possibilities of artificial intelligence and its transformative impact on our world. From groundbreaking innovations to everyday applications, join me on this journey to explore AI’s evolving role in shaping the future.
          </p>
        </div>
      </div>
    </div>
  );
}

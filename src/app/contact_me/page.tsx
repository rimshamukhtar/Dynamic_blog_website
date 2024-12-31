



import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Page= () => {
  return (
    <div className='text-white bg-gradient-to-r from-gray-800 via-cyan-600 to-black
 flex h-screen justify-center items-center gap-10'>
      <div className='bg-gray-600 w-80 mb-56 flex flex-col p-4 rounded-lg'>
        <h1 className='font-serif text-2xl font-bold pb-2 text-white'>Get in Touch with Me!</h1>
        <p className='font-serif font-thin text-white mb-4'>
        Have questions, feedback, or collaboration ideas? We'd love to hear from you! Whether you're curious about the latest trends in AI or want to contribute to our blog, feel free to reach out.

</p>
        
        <div className='flex justify-center gap-4'>
          <a href="https://github.com/rimshamukhtar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rimsha-mukhtar-ahmed-6b88632b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
        </div>
      </div>
      
      <div className='w-1/2 flex flex-col justify-center p-4 gap-4'>
        <div>
          <span className='font-serif font-bold pb-2 text-gray-600'>Your Email</span>
          <br />
          <input type="text" placeholder='abc123@gmail.com' className='w-96 rounded-md p-1 border-2 border-cyan-800 text-cyan-800' />
        </div>
        <div>
          <span className='font-serif font-bold pb-2 text-gray-600'>Subject</span>
          <br />
          <input type="text" placeholder='just saying hi' className='w-96 rounded-md p-1 border-2 border-cyan-800' />
        </div>
        <div>
          <span className='font-serif font-bold pb-2 text-gray-600'>Message</span>
          <br />
          <input type="text" placeholder="let's talk about... " className='w-96 rounded-md p-1 border-2 border-cyan-800' />
        </div>
        <button className='text-center font-serif text-gray-700 bg-gradient-to-br from-gray-500 via-gray-400 border-2 w-28 m-4 rounded-lg font-bold p-1 border-cyan-800'>Submit</button>
      </div>
   
    </div>
  )
}

export default Page

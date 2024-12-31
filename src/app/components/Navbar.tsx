import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-cyan-950 text-gray-200  sticky-top-0'>
    <a href='#' className=' font-bold text-2xl pl-7'>Echoes of AI</a>
    <div className='flex gap-4 font-thin'>
      <ul className='flex space-x-7 px-12 font-bold'>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li> <Link href="/contact_me">Contact Me</Link> </li>
      </ul>
    </div>
      
    </div>
  )
}

export default Navbar


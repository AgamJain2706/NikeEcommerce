import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <>
      <footer className='bg-gray-900 w-full h-full text-gray-300 '>
        <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col p-8  '>
          <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:w-[25%] w-full h-auto gap-4 justify-start items-start '>
            <h1 className='text-xl font-bold'>Nike shoes </h1>
            <p className='text-lg font-semibold'>Discover the latest collection of Nike shoes, blending style and performance to keep you ahead in the game.</p>
          </div>
          <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:w-[25%] w-full h-auto gap-4 justify-evenly items-start  '>
            <h1 className='text-xl font-bold'>Quick Links </h1>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Home</a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Shop</a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Contact </a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>About US</a>
          </div>
          <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:w-[25%] w-full h-auto gap-4 justify-evenly items-start '>
            <h1 className='text-xl font-bold'>Customer Services </h1>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>FAQ</a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Shipping & Return </a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Size Guide </a>
            <a href='#' className=' hover:text-white text-gray-300 text-md '>Track Order </a>
          </div>
          <div className='max-w-7xl mx-auto px-4 py-10  lg:w-[25%] w-full h-auto gap-4 justify-evenly items-start  '>
            <h1 className='text-xl font-bold'>Follow Us  </h1>
            <div className='flex justify-left gap-8 pt-4 items-center'>
              <a href="#">
                <FaFacebook className='cursor-pointer' />
              </a>
              <a href="#">
                <FaInstagram className='cursor-pointer' />
              </a>
              <a href="#">
                <FaYoutube className='cursor-pointer' />
              </a>
              <a href="#">
                <FaLinkedin className='cursor-pointer' />
              </a>
              <a href="#" >
                <FaXTwitter className='cursor-pointer'/>
              </a>
            </div>
          </div>
        </div>
        <div className='bg-gray-600 text-lg text-center px-8 py-4 '>
          <p className='text-lg font-medium'>&copy; {new Date().getFullYear()} Nike Shoes. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

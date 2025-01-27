import React from 'react'
import Navbar from './Navbar'
import { FaUserCircle } from 'react-icons/fa'
import { NavbarMenu } from '../Constant/Navbarmenu'
import { Link } from 'react-router-dom'
const ResponsiveMenu = ({show,setshow}) => {
  return (
    <div className={`${show ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex flex-col justify-between  h-screen w-[75%] bg-white/50 backdrop:blur-sm px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      <div className='flex items-center justify-start gap-3 h-[10%] '>
        <FaUserCircle size={50} />
         <div>
          <h1>Hello user </h1>
          <h1 className='text-sm text-slate-500  '>Premium Users </h1>
         </div>
      </div>
      <nav className='mt-12 mb-12 h-[90%]'>
        <ul className='space-y-4 text-black flex flex-col '>
          {
            NavbarMenu.map((item,index)=>(
              <li key={index} onClick={()=>setshow(false)}>
                <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                {item.title}  
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div>
        <h1>Made with ❤️ by Agam </h1>
      </div>
    </div>
  )
}

export default ResponsiveMenu

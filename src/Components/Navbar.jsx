import {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { ShoppingCart } from 'lucide-react'
import { FaRegUser } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import { UpdateFollower } from 'react-mouse-follower'
import { NavbarMenu } from "../Constant/Navbarmenu";
const Navbar = () => {
  const [show, setshow] = useState(false)
  const toggleMenu = () => {
     setshow(!show)
  }
  return (
    <div className='text-white py-8 px-8   '>
      <div className='container flex justify-between items-center  ' >
        {/* logo section */}
        <div>
          <Link to="/">
          <img src={logo} alt="logo" className='max-w-[100px] invert ' />
          </Link>
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 relative z-40 '>
          {NavbarMenu.map((items) => (
              <li key={items.id} className='text-white'>
                <UpdateFollower
                mouseOptions={{
                  backgroundColor:"white",
                  zIndex:9999,
                  followSpeed:1.5,
                  scale:5,
                  mixBlendMode:"difference",
                }}
                >
                <Link
                  to={items.link}
                  className='inline-block text-base font-semibold py-2 px-3 uppercase'
                >
                  {items.title}
                </Link>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
            mouseOptions={{
              backgroundColor:"white",
              zIndex:9999,
              followSpeed:1.5,
              scale:5,
              mixBlendMode:"difference"
            }}
            >
                <Link to={'/cart'} >
                <button className='text-xl ps-14'>
                <ShoppingCart/>
                </button>
                </Link>
                <Link>
                <button className='text-xl ps-8'>
                  <FaRegUser/>
                </button>
                </Link>
            </UpdateFollower>
          </ul>
        </div>
        <div className='flex gap-8 md:hidden z-50'>
          <Link to={'/cart'}> <ShoppingCart/> </Link>
          {/* moblie hamburger menu  */}
          {
             show ? (
              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hiddenz-50  'size={30} />
             ) : (
              <HiMenuAlt3  onClick={toggleMenu} className='cursor-pointer transition-all md:hiddenz-50  'size={30} />
             )
          }
        </div>
      </div>
        <div>
          <ResponsiveMenu show = {show} setshow={setshow}/>
        </div>
    </div>
  )
}

export default Navbar

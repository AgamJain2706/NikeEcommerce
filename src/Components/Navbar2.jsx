import { Link } from 'react-router-dom'
import { NavbarMenu } from '../Constant/Navbarmenu'
import { useContext, useState } from 'react'
import logo from '../assets/logo2.png'
import { ShoppingCart } from 'lucide-react'
import { FaRegUser } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import { UpdateFollower } from 'react-mouse-follower'
import { ShopContext } from '../context/ShopContext'

const Navbar2 = () => {
  const [show, setshow] = useState(false)
  const toggleMenu = () => {
    setshow(!show)
  }
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='text-black  py-2 bg-gray-100 z-10 '>
    <div className='container flex justify-between items-center px-8  ' >
      {/* logo section */}
      <div>
        <Link to="/">
        <img src={logo} alt="logo" className='max-w-[100px]' />
        </Link>
      </div>
      {/* menu section */}
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4 relative z-40 '>
        {NavbarMenu.map((items) => (
            <li key={items.id} className='text-black '>
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
          }} className='flex justify-center items-center'
          >
              <Link to={'/cart'} >
              <div className='text-xl relative '>
              <ShoppingCart/> <div className='bg-[#138695] w-5  absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white'>
                {getTotalCartItems()}
              </div>
              </div>
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

export default Navbar2

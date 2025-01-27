import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import ProductList from './Components/ProductList'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import Navbar2 from './Components/Navbar2'
import SingleProduct from './Components/SingleProduct'
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home /><Footer /></>
  },
  {
    path: "/mens",
    element: <><Navbar2 /><ProductList category="men"/><Footer /></>
  },
  {
    path: "/womens",
    element: <><Navbar2 /><ProductList category="women"/><Footer /></>
  },
  {
    path: "/Kids",
    element: <><Navbar2 /><ProductList category="Kids"/><Footer /></>
  },
  {
    path: "/products/:ProductId",
    element: <>
      <Navbar2 />
      <SingleProduct/>
      <Footer />
    </>
  },
  {
    path: "/contact",
    element: <>
    <Navbar2/>
      <Contact /><Footer />
    </>
  },
  {
    path: "/cart",
    element: <>
    <Navbar2/>
      <Cart />
      <Footer />
    </>
  }
])
const App = () => {
  return (
    <main className=''>
      <RouterProvider router={router} />
    </main>
  )
}

export default App

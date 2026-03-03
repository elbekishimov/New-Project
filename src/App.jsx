import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Blog from './Pages/Blog/Blog'
import NotFound from './Components/NotFound/NotFound'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import ProductDetails from './Pages/Products/ProductsDetails/ProductDetails'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Footer from './Components/Footer/Footer'
import Dashboard from './Components/Dashboard/Dashboard'
import CallUs from './Pages/Blog/_components/CallUs'
import LeaveMessage from './Pages/Blog/_components/Learve'
import ContactUs from './Pages/Blog/_components/ContactUs'
import ServiceDetails from './Pages/Services/_components/ServiceDetails'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/servise-learn-more',
          element: <ServiceDetails />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/call-us',
          element: <CallUs />
        },
        {
          path: '/leave-mesage',
          element: <LeaveMessage />
        },
        {
          path: 'contact-us',
          element: <ContactUs />
        },
        {
          path: '/sign-in',
          element: <SignIn />
        },
        {
          path: '/sign-up',
          element: <SignUp />
        },
        {
          path: "products/:id",
          element: <ProductDetails />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
    {
      element: <Footer />
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ])

  return (
    <>
      <div className=" max-w-[1440px] m-auto mt-1">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App

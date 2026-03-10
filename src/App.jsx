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
import ScheduleAppointment from './Pages/Home/_components/Schedule'
import Reviews from './Pages/Reviews/Reviews'
import About from './Pages/About/About'
import AboutMore from './Pages/About/_components/AboutMore'
import Cart from './Pages/Cart/Cart'

const Layout = () => (
  <>
    <Navbar />
    <Footer />
  </>
);

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'scheduleAppointment', element: <ScheduleAppointment /> },
        {
          path: 'services',
          element: <Services />,
          children: [
            {
              path: 'servise-learn-more',
              element: <ServiceDetails />
            }
          ]
        },
        { path: '/reviews', element: <Reviews /> },
        { path: '/cart', element: <Cart /> },
        { path: '/aboutmore', element: <AboutMore /> },
        { path: '/about', element: <About /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/blog', element: <Blog /> },
        { path: '/call-us', element: <CallUs /> },
        { path: '/leave-mesage', element: <LeaveMessage /> },
        { path: '/contact-us', element: <ContactUs /> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/sign-up', element: <SignUp /> },
        { path: '/contact', element: <Contact /> }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className="max-w-[1440px] m-auto mt-1">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PageLoader from './Components/Loader/PageLoader'
import { ThemeProvider } from './Context/ThemeContext'
import CheckoutPage from './Pages/Services/_components/CheckoutPage'

// Lazy loading
const Home = lazy(() => import('./Pages/Home/Home'))
const Products = lazy(() => import('./Pages/Products/Products'))
const Blog = lazy(() => import('./Pages/Blog/Blog'))
const NotFound = lazy(() => import('./Components/NotFound/NotFound'))
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'))
const SignIn = lazy(() => import('./Pages/SignIn/SignIn'))
const ProductDetails = lazy(() => import('./Pages/Products/ProductsDetails/ProductDetails'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const Services = lazy(() => import('./Pages/Services/Services'))
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'))
const CallUs = lazy(() => import('./Pages/Blog/_components/CallUs'))
const LeaveMessage = lazy(() => import('./Pages/Blog/_components/Learve'))
const ContactUs = lazy(() => import('./Pages/Blog/_components/ContactUs'))
const ServiceDetails = lazy(() => import('./Pages/Services/_components/ServiceDetails'))
const ScheduleAppointment = lazy(() => import('./Pages/Home/_components/Schedule'))
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'))
const About = lazy(() => import('./Pages/About/About'))
const AboutMore = lazy(() => import('./Pages/About/_components/AboutMore'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))

const Layout = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

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
            { path: 'servise-learn-more', element: <ServiceDetails /> }
          ]
        },
        { path: 'reviews', element: <Reviews /> },
        { path: 'checkout', element: <CheckoutPage/>},
        { path: 'cart', element: <Cart /> },
        { path: 'aboutmore', element: <AboutMore /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <Products /> },
        { path: 'products/:id', element: <ProductDetails /> },
        { path: 'blog', element: <Blog /> },
        { path: 'call-us', element: <CallUs /> },
        { path: 'leave-mesage', element: <LeaveMessage /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'sign-in', element: <SignIn /> },
        { path: 'sign-up', element: <SignUp /> },
        { path: 'contact', element: <Contact /> }
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
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </div>
  )
}

export default App
import { Link, Outlet } from 'react-router-dom'
import vcare from '../../IMG/vcare trans 2.png'

export default function Navbar() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4 gap-4 md:gap-0">
                {/* Logo */}
                <div className='w-32 md:w-40 lg:w-44'>
                    <img className='w-full h-full' src={vcare} alt="Vcare Logo" />
                </div>

                {/* Mobile menu button (qo'shimcha) */}
                <button className="md:hidden border p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Navigation links */}
                <div className="hidden md:block">
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-7 text-center">
                        <Link to={'/home'}><li className='font-semibold text-base md:text-lg lg:text-xl hover:text-[#0088CA] transition'>Home</li></Link>
                        <Link to={'/services'}><li className='font-semibold text-base md:text-lg lg:text-xl hover:text-[#0088CA] transition'>Services</li></Link>
                        <Link to={'/products'}><li className='font-semibold text-base md:text-lg lg:text-xl hover:text-[#0088CA] transition'>Products</li></Link>
                        <Link to={'/blog'}><li className='font-semibold text-base md:text-lg lg:text-xl hover:text-[#0088CA] transition'>Blog</li></Link>
                        <Link to={"/contact"}><li className='font-semibold text-base md:text-lg lg:text-xl hover:text-[#0088CA] transition'>Contact</li></Link>
                    </ul>
                </div>

                {/* Auth buttons */}
                <div className='flex gap-2 md:gap-3'>
                    <Link to={'/sign-in'}>
                        <button className="border px-4 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base hover:bg-gray-50 transition">
                            Sign In
                        </button>
                    </Link>
                    <Link to={'/sign-up'}>
                        <button className='border px-4 md:px-5 py-2 md:py-3 rounded-lg bg-[#0088CA] text-white text-sm md:text-base hover:bg-[#0066a0] transition'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Mobile menu (dropdown) - qo'shimcha */}
            <div className="md:hidden hidden" id="mobile-menu">
                <ul className="flex flex-col items-center gap-4 py-4 bg-gray-50">
                    <Link to={'/home'}><li className='font-semibold text-lg'>Home</li></Link>
                    <Link to={'/services'}><li className='font-semibold text-lg'>Services</li></Link>
                    <Link to={'/products'}><li className='font-semibold text-lg'>Products</li></Link>
                    <Link to={'/blog'}><li className='font-semibold text-lg'>Blog</li></Link>
                    <Link to={"/contact"}><li className='font-semibold text-lg'>Contact</li></Link>
                </ul>
            </div>

            <main className='Asosiy flex-grow'><Outlet /></main>
        </>
    )
}
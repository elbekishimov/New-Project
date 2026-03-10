import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import vcare from '../../IMG/vcare trans 2.png'
import { ShoppingBasket, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-4 py-3 bg-white">

                <div className='w-28 sm:w-32'>
                    <img className='w-full h-full object-contain' src={vcare} alt="Vcare Logo" />
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-6 text-lg">
                        <Link to="/home"><li className="hover:text-[#0088CA]">Home</li></Link>
                        <Link to="/about"><li className="hover:text-[#0088CA]">About</li></Link>
                        <Link to="/services"><li className="hover:text-[#0088CA]">Services</li></Link>
                        <Link to="/products"><li className="hover:text-[#0088CA]">Products</li></Link>
                        <Link to="/blog"><li className="hover:text-[#0088CA]">Blog</li></Link>
                        <Link to="/contact"><li className="hover:text-[#0088CA]">Contact</li></Link>
                        <Link to={"/reviews"}><li className="hover:text-[#0088CA]">Reviews</li></Link>
                    </ul>
                </div>

                <div className="flex items-center gap-3">

                    <Link to={'/cart'}><ShoppingBasket className="cursor-pointer" /></Link>

                    <div className="hidden md:flex gap-2">
                        <Link to="/sign-in">
                            <button className="border px-4 py-2 rounded-lg">
                                Sign In
                            </button>
                        </Link>

                        <Link to="/sign-up">
                            <button className="bg-[#0088CA] text-white px-4 py-2 rounded-lg">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>

                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col items-center gap-5 py-6 text-lg">

                        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

                        <Link to="/sign-in" onClick={() => setMenuOpen(false)}>
                            <button className="border px-6 py-2 rounded-lg w-40">
                                Sign In
                            </button>
                        </Link>

                        <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
                            <button className="bg-[#0088CA] text-white px-6 py-2 rounded-lg w-40">
                                Sign Up
                            </button>
                        </Link>

                    </ul>
                </div>
            )}

            <main className='flex-grow'>
                <Outlet />
            </main>
        </>
    )
}
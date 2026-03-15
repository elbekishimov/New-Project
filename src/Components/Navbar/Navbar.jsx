import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ShoppingBasket, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../Context/ThemeContext'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import vcare from '../../IMG/vcare trans 2.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className={`flex justify-between items-center px-4 py-3 border-b transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            }`}>
                <div className='w-28 sm:w-32'>
                    <img className='w-full h-full object-contain' src={vcare} alt="Vcare Logo" />
                </div>

                <div className="hidden md:block">
                    <ul className={`flex gap-6 text-lg ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                        <Link to="/home"><li className="hover:text-[#0088CA]">{t('nav.home')}</li></Link>
                        <Link to="/about"><li className="hover:text-[#0088CA]">{t('nav.about')}</li></Link>
                        <Link to="/services"><li className="hover:text-[#0088CA]">{t('nav.services')}</li></Link>
                        <Link to="/products"><li className="hover:text-[#0088CA]">{t('nav.products')}</li></Link>
                        <Link to="/blog"><li className="hover:text-[#0088CA]">{t('nav.blog')}</li></Link>
                        <Link to="/contact"><li className="hover:text-[#0088CA]">{t('nav.contact')}</li></Link>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <div className={`flex gap-2 items-center rounded-lg p-1 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                        <button 
                            onClick={() => changeLanguage('uz')} 
                            className={`px-2 py-1 text-xs rounded transition-colors ${
                                i18n.language === 'uz' 
                                    ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-white shadow'
                                    : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            UZ
                        </button>
                        <button 
                            onClick={() => changeLanguage('en')} 
                            className={`px-2 py-1 text-xs rounded transition-colors ${
                                i18n.language === 'en' 
                                    ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-white shadow'
                                    : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            EN
                        </button>
                        <button 
                            onClick={() => changeLanguage('ru')} 
                            className={`px-2 py-1 text-xs rounded transition-colors ${
                                i18n.language === 'ru' 
                                    ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-white shadow'
                                    : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            RU
                        </button>
                    </div>

                    <Link to={'/cart'}>
                        <ShoppingBasket className={`cursor-pointer ${
                            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                        }`} />
                    </Link>

                    <div className="hidden md:flex gap-2">
                        <Link to="/sign-in">
                            <button className={`border px-4 py-2 rounded-lg transition-colors ${
                                isDarkMode 
                                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}>
                                {t('nav.signIn')}
                            </button>
                        </Link>
                        <Link to="/sign-up">
                            <button className="bg-[#0088CA] text-white px-4 py-2 rounded-lg hover:bg-[#0066a0] transition-colors">
                                {t('nav.signUp')}
                            </button>
                        </Link>
                    </div>

                    <button 
                        className={`md:hidden transition-colors ${
                            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                        }`} 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            
            {menuOpen && (
                <div className={`md:hidden border-b transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                    <ul className={`flex flex-col p-4 space-y-3 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                        <Link to="/home" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.home')}</li></Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.about')}</li></Link>
                        <Link to="/services" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.services')}</li></Link>
                        <Link to="/products" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.products')}</li></Link>
                        <Link to="/blog" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.blog')}</li></Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}><li className="hover:text-[#0088CA] py-2">{t('nav.contact')}</li></Link>
                        <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                            <Link to="/sign-in" onClick={() => setMenuOpen(false)} className="flex-1">
                                <button className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg">
                                    {t('nav.signIn')}
                                </button>
                            </Link>
                            <Link to="/sign-up" onClick={() => setMenuOpen(false)} className="flex-1">
                                <button className="w-full bg-[#0088CA] text-white px-4 py-2 rounded-lg">
                                    {t('nav.signUp')}
                                </button>
                            </Link>
                        </div>
                    </ul>
                </div>
            )}
            
            <main className='flex-grow'>
                <Outlet />
            </main>
        </>
    )
}
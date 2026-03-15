import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import post5 from '../../IMG/post5.png';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-slate-50 font-sans">

            <section className="py-16 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-2">
                            <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-600 font-bold tracking-wider uppercase text-xs mb-2">
                                {t('about.badge')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                {t('about.title1')} <br />
                                <span className="text-sky-500">{t('about.title2')}</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {t('about.description')}
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to={'/contact'} className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-sky-500/40">
                                {t('about.contactBtn')}
                            </Link>
                            <Link to={'/services'} className="bg-white border-2 border-slate-200 hover:border-sky-500 hover:text-sky-500 text-slate-700 px-8 py-3.5 rounded-lg font-semibold transition-all">
                                {t('about.servicesBtn')}
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative order-1 lg:order-2">
                        <img
                            src={post5}
                            alt="Medical Billing Team"
                            className="w-full rounded-2xl shadow-2xl object-cover"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4 animate-bounce hover:animate-none transition-all duration-300">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">+30%</p>
                                <p className="text-slate-500 text-sm font-medium">{t('common.learnMore')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <h3 className="text-4xl font-extrabold text-sky-500">99%</h3>
                            <p className="text-slate-600 font-medium">{t('about.stats.claimRate')}</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-extrabold text-sky-500">10+</h3>
                            <p className="text-slate-600 font-medium">{t('about.stats.experience')}</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-extrabold text-sky-500">50+</h3>
                            <p className="text-slate-600 font-medium">{t('about.stats.partners')}</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-extrabold text-sky-500">24/7</h3>
                            <p className="text-slate-600 font-medium">{t('about.stats.support')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('about.mission.title')}</h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        {t('about.mission.description')}
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-100 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('about.whyUs.title')}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            {t('about.whyUs.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.whyUs.accuracy.title')}</h3>
                            <p className="text-slate-600">
                                {t('about.whyUs.accuracy.desc')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.whyUs.privacy.title')}</h3>
                            <p className="text-slate-600">
                                {t('about.whyUs.privacy.desc')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-500 mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.whyUs.speed.title')}</h3>
                            <p className="text-slate-600">
                                {t('about.whyUs.speed.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('about.cta.title')}
                    </h2>
                    <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                        {t('about.cta.description')}
                    </p>
                    <Link to={'/contact'} className="inline-block bg-white text-sky-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        {t('about.cta.button')}
                    </Link>
                </div>
            </section>

        </div>
    );
}
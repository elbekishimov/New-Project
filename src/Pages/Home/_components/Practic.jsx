import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import post1 from '../../../IMG/post1.png'
import post2 from '../../../IMG/post2.png'
import post3 from '../../../IMG/post3.png'
import post4 from '../../../IMG/post4.png'
import post5 from '../../../IMG/post5.png'
import post6 from '../../../IMG/post6.png'

export default function Practic() {
    const { t } = useTranslation();
    
    const services = [
        { img: post1, title: t('home.practic.services.medicalCoding'), desc: t('home.practic.services.medicalCodingDesc') },
        { img: post2, title: t('home.practic.services.accountsReceivable'), desc: t('home.practic.services.accountsReceivableDesc') },
        { img: post3, title: t('home.practic.services.credentialing'), desc: t('home.practic.services.credentialingDesc') },
        { img: post4, title: t('home.practic.services.outOfNetwork'), desc: t('home.practic.services.outOfNetworkDesc') },
        { img: post5, title: t('home.practic.services.insuranceVerification'), desc: t('home.practic.services.insuranceVerificationDesc') },
        { img: post6, title: t('home.practic.services.fullRCM'), desc: t('home.practic.services.fullRCMDesc') },
    ];

    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
                            <span className="bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase border border-sky-500/30">
                                {t('home.practic.badge')}
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                {t('home.practic.title')}
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                                {t('home.practic.description')}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link to={'/scheduleAppointment'} className="bg-sky-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-sky-600 transition-all transform hover:-translate-y-1">
                                    {t('home.practic.appointmentBtn')}
                                </Link>
                                <button className="bg-transparent border-2 border-slate-500 text-white font-bold py-4 px-10 rounded-xl hover:bg-slate-700 transition-all">
                                    {t('home.practic.specialtiesBtn')}
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                            <img src={post1} alt="Professional Jamoa" className="max-w-md w-full drop-shadow-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                        </div>
                    </div>
                </div>
            </section>

            <div className='py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50'>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold'>{t('home.practic.services.title')}</h2>
                    <p className="text-slate-600 italic text-lg">{t('home.practic.services.subtitle')}</p>
                    <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-semibold underline decoration-sky-400">{t('common.readMore')}</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className='text-slate-900 font-bold text-2xl mb-4 group-hover:text-sky-600 transition-colors'>{service.title}</h3>
                                    <p className='text-slate-600 leading-relaxed text-base'>{service.desc}</p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sky-600 font-bold group-hover:gap-3 transition-all">
                                    {t('common.learnMore')} <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 bg-white px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto border-2 border-dashed border-slate-200 rounded-[3rem] p-12 text-center bg-slate-50/50">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('home.practic.whoWeServe.title')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            t('home.practic.whoWeServe.hospitals'),
                            t('home.practic.whoWeServe.privateClinics'),
                            t('home.practic.whoWeServe.emergency'),
                            t('home.practic.whoWeServe.ambulatory'),
                            t('home.practic.whoWeServe.laboratories'),
                            t('home.practic.whoWeServe.dentistry'),
                            t('home.practic.whoWeServe.nursingHomes'),
                            t('home.practic.whoWeServe.urgentCare')
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-sky-500 font-bold">
                                    {i + 1}
                                </div>
                                <span className="font-semibold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-sky-600 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-black mb-2">99.9%</div>
                        <div className="text-sky-100">{t('home.practic.stats.accuracy')}</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">25+</div>
                        <div className="text-sky-100">{t('home.practic.stats.experience')}</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">24s</div>
                        <div className="text-sky-100">{t('home.practic.stats.claimSubmission')}</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">1M+</div>
                        <div className="text-sky-100">{t('home.practic.stats.payments')}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
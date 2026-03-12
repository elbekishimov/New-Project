import { Link } from 'react-router-dom';
import post1 from '../../../IMG/post1.png'
import post2 from '../../../IMG/post2.png'
import post3 from '../../../IMG/post3.png'
import post4 from '../../../IMG/post4.png'
import post5 from '../../../IMG/post5.png'
import post6 from '../../../IMG/post6.png'

export default function Practic() {
    const services = [
        { img: post1, title: "TIBBIY KODLASH VA BILLING", desc: "Aniq tibbiy billing va kodlash to'lovlarni o'z vaqtida qabul qilishda muhim rol o'ynaydi. Hatto kichik xatolar ham to'lov kechikishiga sabab bo'lishi mumkin." },
        { img: post2, title: "Hisoblarni Boshqarish", desc: "Vcare Medical Billing'da biz sizning amaliyotingizdagi debitorlik qarzlarini faol ravishda boshqaramiz va to'lovlar oqimini ta'minlaymiz." },
        { img: post3, title: "Kredentsiallash va Shartnomalar", desc: "Tibbiy muassasa tashkil etish shartnomalar tuzishga bog'liq. Biz sug'urta kompaniyalari bilan eng yaxshi tariflar bo'yicha muzokaralar olib boramiz." },
        { img: post4, title: "Tarmoqdan Tashqari Muzokaralar", desc: "Biz Multiplan, Zelis va Viant kabi yirik provayderlar bilan tarmoqdan tashqari da'volarni professional darajada hal qilamiz." },
        { img: post5, title: "Sug'urtani Tekshirish", desc: "Bemorlarga xizmat ko'rsatishdan oldin ularning sug'urta qoplamasi va imtiyozlarini aniq tekshirish orqali to'lov kafolatini ta'minlaymiz." },
        { img: post6, title: "To'liq RCM Xizmatlari", desc: "Vcare bemor kelganidan boshlab to'lov qabul qilinguncha bo'lgan barcha jarayonlarni boshqaradi va xodimlaringizni o'qitadi." },
    ];

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
                            <span className="bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase border border-sky-500/30">
                                Ishonchli Hamkorlik
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                Mijozlarimiz va <span className="text-sky-400">Tajribamiz</span> haqida
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                                Tibbiy billing sohasida ishonchli vakil sifatida biz turli xil sog'liqni saqlash tashkilotlariga xizmat ko'rsatamiz. Bizning obro'yimiz moliyaviy shaffoflik va uzluksiz operatsiyalar kafolatidir.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link to={'/scheduleAppointment'} className="bg-sky-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-sky-600 transition-all transform hover:-translate-y-1">
                                    Uchrashuv belgilash
                                </Link>
                                <button className="bg-transparent border-2 border-slate-500 text-white font-bold py-4 px-10 rounded-xl hover:bg-slate-700 transition-all">
                                    Mutaxassisliklarni ko'rish
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                            <img src={post1} alt="Professional Jamoa" className="max-w-md w-full drop-shadow-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <div className='py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50'>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold'>Tibbiy Billing <span className="text-sky-600">Yo'nalishlari</span></h2>
                    <p className="text-slate-600 italic text-lg">"Biz har bir tibbiy amaliyot uchun maxsus tayyorlangan billing yechimlarini taqdim etamiz."</p>
                    <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-semibold underline decoration-sky-400">Batafsil o'qish</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className='text-slate-900 font-bold text-2xl mb-4 group-hover:text-sky-600 transition-colors'>{service.title}</h3>
                                    <p className='text-slate-600 leading-relaxed text-base'>{service.desc}</p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sky-600 font-bold group-hover:gap-3 transition-all">
                                    Batafsil Ma'lumot <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WHO WE SERVE */}
            <section className="py-20 bg-white px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto border-2 border-dashed border-slate-200 rounded-[3rem] p-12 text-center bg-slate-50/50">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Kimlarga Xizmat Ko'rsatamiz?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Kasalxonalar", "Xususiy Klinikalar", "Tez Tibbiy Yordam", "Ambulatoriya Markazlari", "Laboratoriyalar", "Stomatologiyalar", "Qariyalar Uylari", "Favqulodda Yordam"].map((item, i) => (
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

            {/* STATISTICS */}
            <section className="py-16 bg-sky-600 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-black mb-2">99.9%</div>
                        <div className="text-sky-100">Aniqlik Darajasi</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">25+</div>
                        <div className="text-sky-100">Yillik Tajriba</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">24s</div>
                        <div className="text-sky-100">Da'vo Yuborish</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">1M+</div>
                        <div className="text-sky-100">Tasdiqlangan To'lovlar</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
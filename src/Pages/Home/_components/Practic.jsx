import { Link } from 'react-router-dom';
import post1 from '../../../IMG/post1.png'
import post2 from '../../../IMG/post2.png'
import post3 from '../../../IMG/post3.png'
import post4 from '../../../IMG/post4.png'
import post5 from '../../../IMG/post5.png'
import post6 from '../../../IMG/post6.png'

export default function Practic() {
    const services = [
        { img: post1, title: "CODING AND MEDICAL BILLING", desc: "Accurate medical billing and coding play a crucial role in securing reimbursements promptly. Precision is key; even minor errors can cause payment delays. At Right Medical Billing, our dedicated team ensures healthcare facilities receive rightful reimbursements." },
        { img: post2, title: "Accounts Management", desc: "At Vcare Medical Billing, we proactively handle your practice's accounts receivable. Identifying any pending payments, we diligently pursue outstanding balances from patients or payors to ensure an efficient workflow." },
        { img: post3, title: "Credentialing & Contracting", desc: "Establishing a healthcare facility hinges on credentialing and contracting. At RMB, we negotiate insurance payer contracts and maintain their currency, enabling you to achieve optimal reimbursement rates." },
        { img: post4, title: "Out-of-Network Negotiations", desc: "We adeptly negotiate out-of-network claims with major pricing vendors like Multiplan, Zelis, and Viant. Leveraging decades of expertise, our team excels in this intricate aspect of billing specialists." },
        { img: post5, title: "Eligibility Verification", desc: "Accurate eligibility and insurance benefits verification are crucial for obtaining precise information on coverage. We confirm each patient's eligibility to secure payment before services are rendered." },
        { img: post6, title: "Complete RCM Services", desc: "Vcare manages the entire revenue cycle, supporting from patient arrival to payment receipt. We assist in compliance, workflow, and staff training, acting as a direct extension of your professional team." },
    ];

    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
                            <span className="bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase border border-sky-500/30">
                                Trusted Partnership
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                Know Our <span className="text-sky-400">Clients & Expertise</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                                As a trusted authority in medical billing, we cater to a diverse spectrum of healthcare organizations. Our industry-standing reputation is a testament to our reliability, ensuring seamless operations and financial transparency for every specialty.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link to={'/scheduleAppointment'} className="bg-sky-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-sky-600 transition-all transform hover:-translate-y-1">
                                    Schedule Appointment
                                </Link>
                                <button className="bg-transparent border-2 border-slate-500 text-white font-bold py-4 px-10 rounded-xl hover:bg-slate-700 transition-all">
                                    View Specialties
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                            <img src={post1} alt="Professional Team" className="max-w-md w-full drop-shadow-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                        </div>
                    </div>
                </div>
            </section>

            <div className='py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50'>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold'>Medical Billing <span className="text-sky-600">Specialties</span></h2>
                    <p className="text-slate-600 italic text-lg">"We provide tailored billing solutions for a wide range of medical practices."</p>
                    <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-semibold underline decoration-sky-400">Read more details</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className='text-slate-900 font-bold text-2xl mb-4 group-hover:text-sky-600 transition-colors'>{service.title}</h3>
                                    <p className='text-slate-600 leading-relaxed text-base'>{service.desc}</p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sky-600 font-bold group-hover:gap-3 transition-all">
                                    Learn More <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. WHO WE SERVE - Yangi qo'shilgan qism */}
            <section className="py-20 bg-white px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto border-2 border-dashed border-slate-200 rounded-[3rem] p-12 text-center bg-slate-50/50">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Who We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Hospitals", "Solo Practices", "Urgent Care", "Ambulatory Centers", "Laboratories", "Dental Clinics", "Nursing Homes", "Emergency Rooms"].map((item, i) => (
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

            {/* 4. STATISTICS - Ishonch uchun raqamlar */}
            <section className="py-16 bg-sky-600 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-black mb-2">99.9%</div>
                        <div className="text-sky-100">Accuracy Rate</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">25+</div>
                        <div className="text-sky-100">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">24h</div>
                        <div className="text-sky-100">Claim Submission</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-2">1M+</div>
                        <div className="text-sky-100">Claims Processed</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
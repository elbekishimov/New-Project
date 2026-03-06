import { Link } from 'react-router-dom';
import Frame from '../../../IMG/Frame 3.png';
import post1 from '../../../IMG/post1.png'
import post2 from '../../../IMG/post2.png'
import post3 from '../../../IMG/post3.png'
import post4 from '../../../IMG/post4.png'
import post5 from '../../../IMG/post5.png'
import post6 from '../../../IMG/post6.png'

export default function Practic() {
    return (
        <>
            <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50 ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                Know Our <span className="text-[#0088CA]">Clients</span>
                            </h1>
                            <h3 className="text-base sm:text-lg text-gray-700 ">
                                As a trusted authority in medical billing, catering to a diverse spectrum of organizations,
                                our industry-standing reputation is a testament to our reliability and expertise.
                                Our tailored services cater to the unique billing needs of various entities,
                                ensuring seamless operations and financial transparency.
                            </h3>
                            <Link to={'/scheduleAppointment'} className="inline-block bg-[#0088CA] text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-[#006fa3] transition-all">
                                Schedule Appointment
                            </Link>
                        </div>

                      

                    </div>
                </div>
            </section>

            <div className='mt-10 px-4 sm:px-6 md:px-12 lg:px-20'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-center text-[#0088CA] font-bold'>Medical Billing Services We Offer</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                    {[
                        { img: post1, title: "CODING AND MEDICAL BILLING", desc: "Accurate medical billing and coding play a crucial role in securing reimbursements promptly. Precision is key; even minor errors can cause payment delays. At Right Medical Billing, our dedicated team ensures healthcare facilities receive rightful reimbursements from patients and payers for services rendered." },
                        { img: post2, title: "Streamlined Accounts Management", desc: "At Vcare Medical Billing, we proactively handle your practice's accounts receivable. Identifying any pending payments owed to the provider or healthcare facility, we diligently pursue outstanding balances from patients or payors. Timely payment posting ensures an efficient billing workflow." },
                        { img: post3, title: "Credentialing and Contract Foundation", desc: "Establishing a healthcare facility hinges on credentialing and contracting, forming the bedrock of relationships with both insurance companies and patients. At RMB, we negotiate insurance payer contracts and maintain their currency, enabling you to achieve optimal reimbursement rates." },
                        { img: post4, title: "Expert Out-of-Network Negotiations", desc: "At Vcare Medical Billing, we adeptly negotiate out-of-network claims with major pricing vendors like Multiplan, Zelis, Viant, and GCS. Leveraging decades of expertise, our negotiation and settlement team excels in this intricate aspect of billing. We're recognized industry-wide as specialists in out-of-network billing." },
                        { img: post5, title: "Eligibility and Insurance Verification", desc: "Accurate eligibility and insurance benefits verification are crucial for obtaining precise information on coverage and reimbursement. It's essential for healthcare facilities to confirm each patient's eligibility and benefits to secure payment for provided services. Count on us as an integral part of your team in this pivotal process." },
                        { img: post6, title: "Complete RCM Services", desc: "Vcare Medical Billing manages the entire revenue cycle, supporting from patient arrival to payment receipt. We assist in compliance, workflow, and staff training, acting as an extension of your team. Beyond financial relief, we enhance your RCM operations nationwide. Your success is our success, backed by expertise, tailored solutions." },
                    ].map((service, index) => (
                        <div key={index} className="bg-white  p-4 sm:p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <img src={service.img} alt={service.title} className="w-full h-auto rounded-lg" />
                            <h2 className='text-[#0088CA] font-medium text-xl sm:text-2xl mt-3 mb-2'>{service.title}</h2>
                            <p className='text-gray-700 text-sm sm:text-base'>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
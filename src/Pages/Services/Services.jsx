import { Link, Outlet } from 'react-router-dom'
import hero from '../../IMG/service-hero.png'
import service1 from '../../IMG/service1.png'
import service2 from '../../IMG/service2.png'
import service3 from '../../IMG/service3.png'
import service4 from '../../IMG/service4.png'



export default function Services() {
  return (
    <>
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              We Offer <span className="text-blue-600">Quality Services</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              From the moment a patient steps through your doors to the successful
              collection of payments, our dedicated **Revenue Cycle Management (RCM)** team is committed to identifying and resolving any obstacles hindering
              your financial growth.
            </p>

            <Link to={'servise-learn-more'} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-200 mt-10">
              Learn More
            </Link>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <img
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transform"
              src={hero}
              alt="Medical RCM Services"
            />
          </div>

        </div>
      </section>
      <h1 className=' text-center font-semibold text-4xl text-[#0088CA]'>Our Services</h1>
      <div>
        <section className="py-10 px-4 md:px-12 flex justify-center">

          <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/40 p-8 md:p-16">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">


              <div className="flex-1 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
                  Medical Billing and Coding
                </h2>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Reignite your financial success with our seasoned billing and coding
                  professionals, boasting 25+ years of combined expertise.
                  Accurate medical billing and coding is paramount for securing
                  reimbursements. Even minor errors can lead to claim rejections,
                  triggering lengthy resubmission procedures and payment delays.
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  src={service1}
                  alt="Medical Billing Analytics"
                  className="w-full h-auto rounded-2xl shadow-sm object-cover"
                />
              </div>

            </div>
          </div>

        </section>
        <section className="py-10 px-4 md:px-12 flex justify-center">

          <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/40 p-8 md:p-16">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">


              <div className="flex-1 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
                  Eligibility Verification
                </h2>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Verifying patient insurance eligibility is a critical first step in billing. Service providers must swiftly and accurately gather all eligibility information.
                  Our focus is on preventing denials and avoiding payment delays by providing quality RCM services. This boosts revenue at the time of service and enhances patient satisfaction.
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  src={service2}
                  alt="Medical Billing Analytics"
                  className="w-full h-auto rounded-2xl shadow-sm object-cover"
                />
              </div>

            </div>
          </div>

        </section>
        <section className="py-10 px-4 md:px-12 flex justify-center">

          <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/40 p-8 md:p-16">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">


              <div className="flex-1 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
                  Credentialing & Contracting
                </h2>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Strengthen Your Practice
                  Our expertise enhances relationships with insurers and patients, allowing better service and higher reimbursement rates.
                  Credentialing and contracting are vital for clinics, forming the core of insurer and patient relationships. Right Medical Billing secures contracts and maintains your facility or physician's agreements with carriers.
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  src={service3}
                  alt="Medical Billing Analytics"
                  className="w-full h-auto rounded-2xl shadow-sm object-cover"
                />
              </div>

            </div>
          </div>

        </section>
        <section className="py-10 px-4 md:px-12 flex justify-center">

          <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/40 p-8 md:p-16">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">


              <div className="flex-1 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
                  Patient Billing Services
                </h2>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Our patient billing services ensure accuracy and efficiency in handling billing procedures. From invoicing to payment processing, we streamline the billing experience, providing clarity and ease for patients.
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  src={service4}
                  alt="Medical Billing Analytics"
                  className="w-full h-auto rounded-2xl shadow-sm object-cover"
                />
              </div>

            </div>
          </div>

        </section>

      </div>
      <main className='asosiy'><Outlet/></main>
    </>
  )
}
import React from 'react';
// Rasmlarni o'z papkangizdan to'g'ri import qiling
import teamImage from '../../IMG/service-hero.png'; // 1-rasm: Jamoa
import billingLaptop from '../../IMG/service-hero.png'; // 2-rasm: Noutbuk (Medical Billing)
import contactPhone from '../../IMG/service-hero.png'; // 3-rasm: Telefon ishlatayotgan odam

export default function Blog() {
  
  const features = [
    {
      title: "Certified Coders",
      text: "Our AAPC certified coders and skilled billers offer detailed and accurate services. We relay valuable knowledge and train your team in revenue-boosting best practices."
    },
    {
      title: "Experience",
      text: "With 15 years' expertise, we foster strong insurer-client bonds and ensure unwavering service quality."
    },
    {
      title: "Personalized Services",
      text: "We provide personalized services, simplifying complex billing for timely reimbursement."
    },
    {
      title: "Up To Date",
      text: "We stay current with industry regulations and changes for accurate billing. Understanding unique client needs, we customize our services accordingly."
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-600">
      
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
              Curious To Know About Us?
            </h2>
            <p className="leading-relaxed">
              Throughout the entire patient journey, starting from their arrival until the completion of payment for services rendered, our dedicated RCM services team stands by to bolster your growth trajectory. We specialize in identifying and resolving critical issues within your revenue cycle management, ensuring seamless operations and sustained progress for your practice's success.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Call Us
              </button>
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition">
                Leave a Message
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img src={teamImage} alt="Team Meeting" className="w-full rounded-3xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              At <span className="font-bold text-slate-800">Vcare Medical Billing</span>, our pride lies in our team of dedicated experts committed to delivering top-tier medical billing and coding services. Our professionals are highly skilled in the latest coding techniques and possess extensive experience in the healthcare industry.
            </p>
            <p>
              We prioritize accessibility, transparency, and communication at <span className="font-bold text-slate-800">Vcare</span> Medical Billing. Establishing robust client relationships is crucial, and our team ensures prompt responsiveness to all queries and concerns. Accessible and knowledgeable, our team members provide personalized attention to every client.
            </p>
            <p>
              Exceptional customer service defines Vcare <span className="font-bold text-slate-800">Medical Billing</span>. Committed to excellence, our team diligently ensures accurate, timely, and efficient billing services tailored to meet each client's distinct requirements.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                <h3 className="text-sky-500 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 px-4 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-sky-500">
                Medical Billing and Coding
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Reignite your financial success with our seasoned billing and coding professionals, boasting 25+ years of combined expertise. Accurate medical billing and coding is paramount for securing reimbursements. Even minor errors can lead to claim rejections, triggering lengthy resubmission procedures and payment delays.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img src={billingLaptop} alt="Laptop Analytics" className="w-full rounded-xl shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-500 text-center mb-12">
          Contact Us Today
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="leading-relaxed text-lg">
              Imagine us as an integral part of your team, working in tandem to streamline operations. Our goal? To save your valuable time, boost your revenue streams, and empower you to dedicate more focus to providing exceptional patient care. We take immense pride in being catalysts for our clients' growth. Don't hesitate to get in touch with us today and discover how our customized strategies and industry expertise can significantly elevate your facility's revenue cycle management.
            </p>
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-3 rounded-lg font-semibold transition shadow-lg">
              Contact us
            </button>
          </div>
          
          <div className="flex-1 w-full">
            <img src={contactPhone} alt="Contact Support" className="w-full rounded-2xl shadow-lg object-cover grayscale-[20%]" />
          </div>
        </div>
      </section>

    </div>
  );
}
import React from 'react';
import teamImage from '../../IMG/service-hero.png';
import billingLaptop from '../../IMG/service-hero.png';
import contactPhone from '../../IMG/service-hero.png';
import { Link, Outlet } from 'react-router-dom';
import {
  CheckCircle,
  Clock,
  Settings,
  RefreshCcw,
  PhoneCall,
  MessageSquare,
  Users
} from 'lucide-react';

export default function Blog() {

  const features = [
    {
      title: "Certified Coders",
      icon: <CheckCircle className="text-sky-500" size={24} />,
      text: "Our AAPC certified coders and skilled billers offer detailed and accurate services. We train your team in revenue-boosting best practices."
    },
    {
      title: "Experience",
      icon: <Clock className="text-sky-500" size={24} />,
      text: "With 15 years' expertise, we foster strong insurer-client bonds and ensure unwavering service quality across all platforms."
    },
    {
      title: "Personalized Services",
      icon: <Settings className="text-sky-500" size={24} />,
      text: "We provide personalized services, simplifying complex billing for timely reimbursement tailored to your specific needs."
    },
    {
      title: "Up To Date",
      icon: <RefreshCcw className="text-sky-500" size={24} />,
      text: "We stay current with industry regulations for accurate billing. We customize our services according to unique client requirements."
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-600 overflow-hidden">

      {/* 1. HERO SECTION - CURIOUS ABOUT US */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold tracking-wide uppercase">
              About Our Company
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Curious To Know <br />
              <span className="text-sky-500 underline decoration-sky-200 underline-offset-8">About Us?</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-500">
              Throughout the entire patient journey, our dedicated RCM services team stands by to bolster your growth trajectory. We specialize in identifying and resolving critical issues within your revenue cycle management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/call-us"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg shadow-sky-200 flex items-center gap-2 group"
              >
                <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
                Call Us Now
              </Link>
              <Link to={'/leave-mesage'} className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition flex items-center gap-2 group">
                <MessageSquare size={20} className="group-hover:-translate-y-1 transition-transform" />
                Leave a Message
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-100 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img src={teamImage} alt="Team Meeting" className="w-full rounded-[2.5rem] shadow-2xl object-cover border-8 border-white" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Client Satisfaction</p>
                <p className="text-xl font-black text-slate-800">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 sticky top-24">
              <h3 className="text-3xl font-black text-slate-900 leading-snug">
                Why Healthcare Providers <br />
                <span className="text-sky-500">Trust Vcare Billing</span>
              </h3>
              <div className="space-y-6 text-base leading-relaxed text-slate-500">
                <p>
                  At <span className="font-bold text-slate-800">Vcare Medical Billing</span>, our pride lies in our team of dedicated experts committed to delivering top-tier medical billing and coding services.
                </p>
                <p>
                  Establishing robust client relationships is crucial, and our team ensures prompt responsiveness to all queries. Accessible and knowledgeable, our team members provide personalized attention.
                </p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-slate-900 font-black text-lg mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHT BOX */}
      <section className="py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto border-2 border-sky-100 rounded-[3rem] bg-gradient-to-br from-white to-sky-50/50 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Precision in <br />
                <span className="text-sky-500">Medical Billing and Coding</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Reignite your financial success with our seasoned billing and coding professionals, boasting 25+ years of combined expertise. Even minor errors can lead to claim rejections, triggering payment delays.
              </p>
              <ul className="space-y-3">
                {['Accurate Claims', 'Fast Reimbursement', 'Reduced Denials'].map((tip) => (
                  <li key={tip} className="flex items-center gap-2 font-bold text-slate-700">
                    <CheckCircle className="text-emerald-500" size={18} /> {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <img src={billingLaptop} alt="Laptop Analytics" className="w-full rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-24 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Ready to <span className="text-sky-500">Elevate Your Revenue?</span>
            </h2>
            <p className="leading-relaxed text-xl text-slate-500">
              Imagine us as an integral part of your team. Our goal? To save your valuable time, boost your revenue streams, and empower you to focus on exceptional patient care.
            </p>
            <Link to={'/contact-us'} className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-100 active:scale-95">
              Contact us Today
            </Link>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-sky-500 rounded-3xl rotate-3 -z-10 opacity-10"></div>
            <img src={contactPhone} alt="Contact Support" className="w-full rounded-3xl shadow-2xl object-cover hover:grayscale-0 transition-all duration-700 grayscale-[20%]" />
          </div>
        </div>
      </section>

      <main><Outlet /></main>
    </div>
  );
}
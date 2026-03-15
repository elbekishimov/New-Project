import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const features = [
    {
      title: t('blog.features.certifiedCoders.title'),
      icon: <CheckCircle className="text-sky-500" size={24} />,
      text: t('blog.features.certifiedCoders.desc')
    },
    {
      title: t('blog.features.experience.title'),
      icon: <Clock className="text-sky-500" size={24} />,
      text: t('blog.features.experience.desc')
    },
    {
      title: t('blog.features.personalApproach.title'),
      icon: <Settings className="text-sky-500" size={24} />,
      text: t('blog.features.personalApproach.desc')
    },
    {
      title: t('blog.features.constantUpdate.title'),
      icon: <RefreshCcw className="text-sky-500" size={24} />,
      text: t('blog.features.constantUpdate.desc')
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-600 overflow-hidden">

      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold tracking-wide uppercase">
              {t('blog.hero.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {t('blog.hero.title1')} <br />
              <span className="text-sky-500 underline decoration-sky-200 underline-offset-8">{t('blog.hero.title2')}</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-500">
              {t('blog.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/call-us"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg shadow-sky-200 flex items-center gap-2 group"
              >
                <span className="bg-white/20 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                  <PhoneCall size={20} />
                </span>
                {t('blog.hero.callBtn')}
              </Link>
              <Link to={'/leave-mesage'} className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition flex items-center gap-2 group">
                <MessageSquare size={20} className="group-hover:-translate-y-1 transition-transform" />
                {t('blog.hero.messageBtn')}
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-100 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img src={teamImage} alt="Jamoa uchrashuvi" className="w-full rounded-[2.5rem] shadow-2xl object-cover border-8 border-white" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t('blog.hero.clientSatisfaction')}</p>
                <p className="text-xl font-black text-slate-800">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 lg:sticky lg:top-24">
              <h3 className="text-3xl font-black text-slate-900 leading-snug">
                {t('blog.features.title')}
              </h3>
              <div className="space-y-6 text-base leading-relaxed text-slate-500 border-l-4 border-sky-200 pl-6">
                <p>
                  {t('blog.features.subtitle1')}
                </p>
                <p>
                  {t('blog.features.subtitle2')}
                </p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
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

      <section className="py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto border-2 border-sky-100 rounded-[3rem] bg-gradient-to-br from-white to-sky-50/50 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                {t('blog.highlight.title')}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {t('blog.highlight.desc')}
              </p>
              <ul className="space-y-4">
                {[
                  t('blog.highlight.points.accurate'),
                  t('blog.highlight.points.fast'),
                  t('blog.highlight.points.minimal')
                ].map((tip) => (
                  <li key={tip} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle className="text-emerald-500" size={18} /> {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-2 bg-sky-400 rounded-2xl blur opacity-10"></div>
              <img src={billingLaptop} alt="Billing tahlili" className="relative w-full rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 py-24 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-16 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="flex-1 space-y-8 z-10">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
              {t('blog.cta.title')}
            </h2>
            <p className="leading-relaxed text-xl text-slate-300">
              {t('blog.cta.desc')}
            </p>
            <Link to={'/contact-us'} className="inline-flex bg-sky-500 hover:bg-sky-600 text-white px-12 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-sky-900/20 active:scale-95">
              {t('blog.cta.button')}
            </Link>
          </div>

          <div className="flex-1 w-full relative z-10">
            <img src={contactPhone} alt="Mijozlarni qo'llab-quvvatlash" className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-all duration-700" />
          </div>
        </div>
      </section>

      <main><Outlet /></main>
    </div>
  );
}
import { useTranslation } from 'react-i18next';
import React from "react";
import { Phone, Clock, MapPin, ShieldCheck, ArrowRight, Calendar } from "lucide-react";

export default function CallUs() {
  const { t } = useTranslation();
  const PHONE_NUMBER = "+998901234567";

  const contactCards = [
    {
      title: t('callUs.cards.hours.title'),
      desc: t('callUs.cards.hours.desc'),
      detail: t('callUs.cards.hours.detail'),
      icon: <Clock className="text-sky-500" size={28} />,
      bg: "bg-sky-50",
      border: "border-sky-100"
    },
    {
      title: t('callUs.cards.direct.title'),
      desc: t('callUs.cards.direct.desc'),
      detail: PHONE_NUMBER,
      icon: <Phone className="text-emerald-500" size={28} />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      title: t('callUs.cards.office.title'),
      desc: t('callUs.cards.office.desc'),
      detail: "123 Healthcare Ave, NY",
      icon: <MapPin className="text-orange-500" size={28} />,
      bg: "bg-orange-50",
      border: "border-orange-100"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-600 font-sans">

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-24 px-4 md:px-12 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sky-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sky-400 text-sm font-bold tracking-widest uppercase border border-white/10">
            <ShieldCheck size={16} /> {t('callUs.hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t('callUs.hero.title')}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('callUs.hero.desc')}
          </p>

          <div className="pt-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group inline-flex items-center gap-4 bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-sky-500/20 active:scale-95"
            >
              <Phone className="group-hover:animate-bounce" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bg} ${card.border} border p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-2">
                {card.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">
                {card.title}
              </h3>
              <div className="space-y-1">
                <p className="text-slate-500 font-medium">{card.desc}</p>
                <p className="text-slate-900 font-bold text-lg">{card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 py-24">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-100">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {t('callUs.whyCall.title')}
            </h2>
            <div className="space-y-4">
              {[
                t('callUs.whyCall.points.revenue'),
                t('callUs.whyCall.points.insurance'),
                t('callUs.whyCall.points.experts')
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                  <div className="bg-emerald-100 p-1 rounded-full text-emerald-600">
                    <ArrowRight size={14} />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
              <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t('callUs.whyCall.appointment.title')}</h4>
                <p className="text-sm text-slate-500">{t('callUs.whyCall.appointment.desc')}</p>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              {t('callUs.whyCall.appointment.message')}
            </p>
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-sky-600 transition-colors">
              {t('callUs.whyCall.appointment.button')}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-16 px-4 md:px-12 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-black">{t('callUs.footer.title')}</h2>
          <p className="text-emerald-100/80 font-medium">
            {t('callUs.footer.desc')}
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block bg-emerald-400 hover:bg-white text-emerald-950 px-12 py-4 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95"
          >
            {t('callUs.footer.button')}
          </a>
        </div>
      </section>

    </div>
  );
}
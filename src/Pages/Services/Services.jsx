import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import hero from '../../IMG/service-hero.png';
import service1 from '../../IMG/service1.png';
import service2 from '../../IMG/service2.png';
import service3 from '../../IMG/service3.png';
import service4 from '../../IMG/service4.png';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="bg-white font-sans overflow-hidden">

      <section className="relative py-24 px-4 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl italic border-l-4 border-blue-500 pl-6">
              "{t('services.hero.quote')}"
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <span className="text-blue-400 font-bold">✔</span> {t('services.hero.claimRate')}
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <span className="text-blue-400 font-bold">✔</span> {t('services.hero.hipaa')}
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img src={hero} alt="Vcare Service Hero" className="relative w-full rounded-3xl shadow-2xl border border-slate-700 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">{t('services.process.title')}</h2>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-slate-500 mt-6 text-lg">{t('services.process.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", t: t('services.process.step1.title'), d: t('services.process.step1.desc') },
              { step: "02", t: t('services.process.step2.title'), d: t('services.process.step2.desc') },
              { step: "03", t: t('services.process.step3.title'), d: t('services.process.step3.desc') },
              { step: "04", t: t('services.process.step4.title'), d: t('services.process.step4.desc') }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border-b-8 border-transparent hover:border-blue-500 transition-all duration-300">
                <span className="text-6xl font-black text-slate-50 absolute top-4 right-6 group-hover:text-blue-50 transition-colors">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-40">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {t('services.mainServices.billing.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {t('services.mainServices.billing.desc')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t('services.mainServices.billing.features.icd10'),
                  t('services.mainServices.billing.features.cpt'),
                  t('services.mainServices.billing.features.denials'),
                  t('services.mainServices.billing.features.report')
                ].map(li => (
                  <li key={li} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-tr from-blue-100 to-transparent p-10 rounded-[4rem] relative">
              <img src={service1} alt="Tibbiy Billing" className="rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {t('services.mainServices.verification.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {t('services.mainServices.verification.desc')}
              </p>
              <div className="p-6 bg-indigo-50 border-l-8 border-indigo-500 rounded-r-3xl shadow-inner">
                <p className="text-indigo-900 font-bold italic">
                  "{t('services.mainServices.verification.quote')}"
                </p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-tl from-indigo-100 to-transparent p-10 rounded-[4rem] relative">
              <img src={service2} alt="Sug'urta Tekshiruvi" className="rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white px-4 md:px-12 lg:px-24 rounded-t-[5rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16">{t('services.faq.title')}</h2>
          <div className="space-y-6 text-left">
            {[
              { q: t('services.faq.q1.question'), a: t('services.faq.q1.answer') },
              { q: t('services.faq.q2.question'), a: t('services.faq.q2.answer') },
              { q: t('services.faq.q3.question'), a: t('services.faq.q3.answer') }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-800/50 p-8 rounded-3xl cursor-pointer border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <summary className="font-bold text-xl list-none flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-full group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-6 text-slate-400 leading-relaxed text-lg border-t border-slate-700 pt-6 font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-10 rounded-[4rem] shadow-2xl shadow-blue-500/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">{t('services.cta.title')}</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
            {t('services.cta.desc')}
          </p>
          <Link to="/contact" className="relative z-10 bg-white text-blue-600 px-14 py-6 rounded-2xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl inline-block">
            {t('services.cta.button')}
          </Link>
        </div>
      </section>

      <div className="services-content">
        <Outlet /> 
      </div>
    </div>
  );
}
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Calendar, Phone, User, Settings, CheckCircle } from "lucide-react";

export default function ScheduleAppointment() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(t('common.sendSuccess'));
  };

  return (
    <section className="bg-slate-50 py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="space-y-8">
          <div>
            <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">{t('schedule.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
              {t('schedule.title')}
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
            {t('schedule.desc')}
          </p>

          <div className="space-y-4">
            {[
              { text: t('schedule.features.professionals'), icon: <User size={20} /> },
              { text: t('schedule.features.systems'), icon: <Settings size={20} /> },
              { text: t('schedule.features.online'), icon: <Calendar size={20} /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-700 font-semibold">
                <div className="bg-sky-100 text-sky-600 p-2 rounded-lg">
                  {item.icon}
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-sky-500/10 rounded-[2rem] blur-2xl"></div>
          <form
            onSubmit={handleSubmit}
            className="relative bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200 space-y-5 border border-slate-100"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">{t('schedule.form.name')}</label>
              <input
                type="text"
                name="name"
                placeholder="Aziz Rahimov"
                className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">{t('schedule.form.phone')}</label>
              <input
                type="tel"
                name="phone"
                placeholder="+998 90 123 45 67"
                className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all font-medium"
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">{t('schedule.form.date')}</label>
              <input
                type="date"
                name="date"
                className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all font-medium text-slate-500"
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 ml-1">{t('schedule.form.service')}</label>
              <select
                name="service"
                className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all font-medium text-slate-500"
                onChange={handleChange}
                required
              >
                <option value="">{t('schedule.form.select')}</option>
                <option>{t('schedule.form.options.coding')}</option>
                <option>{t('schedule.form.options.audit')}</option>
                <option>{t('schedule.form.options.rcm')}</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-sky-600 shadow-xl shadow-slate-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {t('schedule.form.submit')} <CheckCircle size={22} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
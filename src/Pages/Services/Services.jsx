import { Link, Outlet } from 'react-router-dom';
import hero from '../../IMG/service-hero.png';
import service1 from '../../IMG/service1.png';
import service2 from '../../IMG/service2.png';
import service3 from '../../IMG/service3.png';
import service4 from '../../IMG/service4.png';

export default function Services() {
  const serviceData = [
    {
      title: "Medical Billing and Coding",
      desc: "Reignite your financial success with our seasoned billing and coding professionals. We use ICD-10, CPT, and HCPCS coding standards to ensure every procedure is captured accurately.",
      features: ["ICD-10/CPT Optimization", "Error-Free Claim Submission", "Audit Protection"],
      img: service1,
      color: "from-blue-50 to-sky-100"
    },
    {
      title: "Eligibility Verification",
      desc: "Prevent front-end denials by verifying insurance coverage before the patient visit. We check co-pays, deductibles, and prior authorization requirements in real-time.",
      features: ["Real-time Coverage Check", "Co-pay & Deductible Tracking", "Prior Authorization"],
      img: service2,
      color: "from-indigo-50 to-blue-50"
    }
    // ... qolgan xizmatlarni ham shunday formatda davom ettirish mumkin
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Full-Cycle <span className="text-blue-400">RCM Solutions</span> for Modern Healthcare
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl italic">
              "Biz shunchaki billing bilan shug'ullanmaymiz, biz sizning tibbiy biznesingizni o'stiramiz."
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-blue-400">✔</span> 98% Clean Claim Rate
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-blue-400">✔</span> HIPAA Compliant
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={hero} alt="Hero" className="w-full rounded-3xl shadow-2xl border border-slate-700" />
          </div>
        </div>
      </section>

      {/* 2. ISH JARAYONI (HOW WE WORK) - Yangi Blok */}
      <section className="py-20 bg-slate-50 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ishlash Jarayonimiz</h2>
            <p className="text-slate-500 mt-4">Qanday qilib biz natijaga erishamiz?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", t: "Ma'lumot yig'ish", d: "Bemor va xizmat ma'lumotlarini qabul qilamiz." },
              { step: "02", t: "Audit va Coding", d: "Mutaxassislarimiz kodlarni tekshirib chiqadi." },
              { step: "03", t: "Yuborish", d: "Claimlar sug'urta kompaniyasiga yuboriladi." },
              { step: "04", t: "To'lovni undirish", d: "Pullar sizning hisobingizga tushishini nazorat qilamiz." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 bg-white rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="text-5xl font-black text-slate-100 absolute top-2 right-4">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{item.t}</h3>
                <p className="text-slate-600 text-sm relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASOSIY XIZMATLAR (ZIG-ZAG) */}
      <section className="py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Medical Billing & Coding</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Bizning professional koderlarimiz har bir tashxisni aniq kodlaydi. Bu orqali rad etilishlar sonini 15% dan 2% gacha tushiramiz. 25 yillik tajribamiz bilan har qanday murakkab holatlarni hal qilamiz.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["ICD-10 Audit", "CPT Coding", "Denied Claims Management", "Weekly Reporting"].map(li => (
                  <li key={li} className="flex items-center gap-2 text-slate-700 font-medium">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-tr from-blue-100 to-transparent p-8 rounded-[3rem]">
              <img src={service1} alt="S1" className="rounded-2xl shadow-xl" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Eligibility Verification</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sug'urta qoplamasini oldindan tekshirish — muvaffaqiyat garovi. Bemor kelishidan oldin biz barcha moliyaviy masalalarni aniqlashtiramiz.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                <p className="text-blue-800 font-semibold italic text-sm">
                  "Biz bilan ishlaganda, siz kutilmagan to'lov rad etilishlaridan butunlay qutulasiz."
                </p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-tl from-indigo-100 to-transparent p-8 rounded-[3rem]">
              <img src={service2} alt="S2" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION (Tez-tez so'raladigan savollar) - Yangi Blok */}
      <section className="py-20 bg-slate-900 text-white px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Ko'p beriladigan savollar</h2>
          <div className="space-y-4 text-left">
            {[
              { q: "Xizmat haqi qancha?", a: "Biz yig'ilgan mablag'ning foiziga yoki har bir claim uchun belgilangan narxda ishlaymiz." },
              { q: "Ma'lumotlar xavfsizligi qanday ta'minlanadi?", a: "Barcha ma'lumotlar HIPAA talablari asosida 256-bitli shifrlangan serverlarda saqlanadi." },
              { q: "Hisobotlar qachon beriladi?", a: "Har haftalik va oylik batafsil moliyaviy tahlillarni taqdim etamiz." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-800 p-6 rounded-xl cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center">
                  {faq.q} <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto bg-blue-600 py-16 px-8 rounded-[3rem] shadow-2xl shadow-blue-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">Tayyormisiz?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Klinikangiz moliya tizimini professional darajaga olib chiqing. Bugun bepul audit so'rang!
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-block">
            Hoziroq Bog'lanish
          </Link>
        </div>
      </section>

      <Outlet />
    </div>
  );
}
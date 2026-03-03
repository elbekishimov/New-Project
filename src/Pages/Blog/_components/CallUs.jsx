import React from "react";

export default function CallUs() {

  const PHONE_NUMBER = "+998901234567";

  return (
    <div className="bg-white min-h-screen text-slate-600">

      <section className="bg-gradient-to-r from-sky-50 to-emerald-50 py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-500">
            Speak With Our Billing Experts
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Our certified medical billing specialists are ready to assist you.
            Get immediate support and discover how we can optimize your revenue cycle.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-sky-50 rounded-2xl border border-sky-100 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-800">
              Working Hours
            </h3>
            <p>
              Monday – Friday <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

          <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-800">
              Direct Phone Line
            </h3>
            <p>{PHONE_NUMBER}</p>
          </div>

          <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-800">
              Office Location
            </h3>
            <p>
              123 Healthcare Ave <br />
              Suite 400 <br />
              New York, NY
            </p>
          </div>

        </div>
      </section>

      <section className="bg-emerald-900 py-20 px-4 md:px-12 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Improve Your Revenue Cycle Today
          </h2>
          <p className="text-lg text-emerald-100">
            Even minor billing errors can cost thousands in delayed reimbursements.
            Our experienced team ensures accuracy, compliance, and faster payments.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>
      </section>

    </div>
  );
}
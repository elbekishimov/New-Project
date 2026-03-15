export default function ServiceDetails({ service }) {
  // Ma'lumotlar mavjudligini tekshirish
  if (!service) {
    return (
      <div className="min-h-screen bg-white px-4 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-600">Ma'lumot topilmadi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-500 capitalize">
            {service?.title || "Xizmat nomi"}
          </h1>
          
          {service?.category && (
            <span className="inline-block bg-sky-50 text-sky-600 px-4 py-2 rounded-full text-sm font-medium">
              {service.category}
            </span>
          )}
        </div>

        <p className="text-lg leading-relaxed text-slate-600">
          {service?.description || 
            "Bu xizmat haqida batafsil ma'lumot. Bu yerda afzalliklar, ish jarayoni, narxlar, va boshqa muhim tafsilotlar haqida gapirishingiz mumkin."}
        </p>

        {service?.price && (
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Xizmat narxi</h3>
            <p className="text-3xl font-bold text-sky-500">
              {service.price}
              {service.priceUnit && <span className="text-lg text-slate-500 ml-1">{service.priceUnit}</span>}
            </p>
          </div>
        )}

        {service?.features && service.features.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800">Xizmat tarkibi</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service?.process && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800">Ish jarayoni</h3>
            <p className="text-slate-600">{service.process}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {service?.testimonial && (
            <div className="bg-sky-50 p-6 rounded-xl">
              <p className="text-slate-600 italic">"{service.testimonial.text}"</p>
              <p className="mt-4 font-semibold text-slate-800">- {service.testimonial.author}</p>
            </div>
          )}

          {service?.completedProjects && (
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-sm text-slate-500">Bajarilgan loyihalar</p>
              <p className="text-3xl font-bold text-sky-500">{service.completedProjects}+</p>
            </div>
          )}
        </div>

        <div className="pt-8">
          <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-600 transition-colors duration-300 w-full md:w-auto">
            Buyurtma berish
          </button>
          
        </div>
      </div>
    </div>
  );
}
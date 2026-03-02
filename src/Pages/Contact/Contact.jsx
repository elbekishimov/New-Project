import contactHero from '../../IMG/service-hero.png'

export default function Contact() {
  return (
    <>
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get In <span className="text-blue-600">Touch With Us</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Have questions about our Revenue Cycle Management services?
              Our team is ready to assist you. Contact us today and discover
              how we can streamline your billing processes and maximize your revenue.
            </p>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <img
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              src={contactHero}
              alt="Contact Medical Billing Team"
            />
          </div>

        </div>
      </section>

      <section className="py-10 px-4 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full border-2 border-sky-500 rounded-[2.5rem] bg-gradient-to-r from-sky-50 to-orange-50/40 p-8 md:p-16">

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-500">
                Contact Information
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed">
                Reach out to our experienced RCM specialists for personalized
                consultation and support. We ensure quick response times and
                professional communication.
              </p>

              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800">Address</h4>
                  <p>123 Medical Avenue, Suite 400</p>
                  <p>New York, NY 10001</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <p>+1 (800) 123-4567</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p>support@medicalrcm.com</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">Working Hours</h4>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-200 transition-all"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
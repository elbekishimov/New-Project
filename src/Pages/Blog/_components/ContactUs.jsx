import React, { useState } from "react";

export default function ContactUs() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Your message has been sent!");
  };

  return (
    <div className="bg-white min-h-screen text-slate-600">

      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-50 to-emerald-50 py-20 px-4 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions about our medical billing services? 
          Our team is here to help you optimize your revenue cycle.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-2">
                Office Address
              </h3>
              <p>
                123 Healthcare Avenue <br />
                Suite 400 <br />
                New York, NY 10001
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-2">
                Phone
              </h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-2">
                Email
              </h3>
              <p>info@vcarebilling.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-2">
                Working Hours
              </h3>
              <p>
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday – Sunday: Closed
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-sky-50 p-10 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <button
                type="submit"
                className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-4 rounded-xl font-semibold transition shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
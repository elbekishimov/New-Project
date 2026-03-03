import React, { useState } from "react";

export default function LeaveMessage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-20">
      <div className="max-w-3xl mx-auto bg-sky-50 p-10 rounded-3xl shadow-lg">
        
        <h1 className="text-4xl font-bold text-sky-500 mb-6 text-center">
          Leave Us a Message
        </h1>

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
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
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
  );
}
import { useState } from "react";

export default function ScheduleAppointment() {

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
    alert("Appointment booked successfully!");
  };

  return (
    <section className="bg-gray-100 py-16 px-4">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-4xl font-bold mb-4">
            Schedule Your Appointment
          </h2>

          <p className="text-gray-600 mb-6">
            Book your visit easily by selecting your preferred date and service.
            Our specialists will contact you shortly.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Professional Doctors</li>
            <li>✔ Modern Equipment</li>
            <li>✔ Online Booking</li>
          </ul>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          />

          <select
            name="service"
            className="w-full border p-3 rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Dental Care</option>
            <option>Heart Check</option>
            <option>Eye Examination</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </section>
  );
}
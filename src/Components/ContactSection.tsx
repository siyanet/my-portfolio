


import React, { useState } from "react";
import { Title } from "./ReusableComponets";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  const mailtoLink = `mailto:siyangetahunw@gmail.com?subject=${encodeURIComponent(
    "Contact from " + formData.name
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  // This is more reliable than setting location.href directly
  window.open(mailtoLink, "_blank");
};


  return (
    <section className="px-4 py-16 bg-gray-900 text-white">
      <div className="flex justify-center items-center"><Title>Contact Me</Title></div>
      <div className="max-w-5xl mx-auto  flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left side - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-[#3bd296]">Got a Problem?</h2>
          <p className="text-gray-300 text-lg">
            Let's solve it together. Feel free to reach out by filling the form.
          </p>
          <p className="text-gray-400">
            I’ll respond to your message as soon as possible.
          </p>
        </div>

        {/* Right side - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded bg-gray-800 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3bd296]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded bg-gray-800 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3bd296]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded bg-gray-800 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3bd296]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded bg-gradient-to-r from-[#3bd296] to-[#12d4aa] px-4 py-2 text-white font-semibold hover:from-[#2cc68a] hover:to-[#0fbf98] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

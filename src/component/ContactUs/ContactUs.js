// ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section - Google Map */}

      <h1 className="text-white text-center bg-black text-xl font-bold">
        Contact Us
      </h1>
      <div className="relative w-full md:w-2/3 h-96">
        {/* Replace the src attribute with the embedded Google Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60266.31275931649!2d72.86343007475209!3d19.254317046351275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0efb20f1cdf%3A0x5bc7b9e25252255f!2sNUK%209%20Information%20Security%20Auditors%20LLP!5e0!3m2!1sen!2sin!4v1690718309677!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlapping Div */}
        <div className="absolute top-[400px] rounded-full bg-red-700 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Contact Us</h2>
          <div className="text-white m-1 text-xl font-bold">
            <p>Phone: (022) 400 22 702</p>
          </div>
          <div className="text-white text-xl font-bold">
            <p>
              Location: E-702, Arjun, NL Complex, Anand Nagar, Dahisar (East)
            </p>
          </div>
          <div className="text-white text-xl font-bold">
            <p>Email: info@nuk9.in</p>
          </div>
          <div className="text-white text-xl font-bold">
            <p>Open Hours: Mon-Sat: 10AM - 7PM</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="p-8 md:w-1/3">
        <div className="flex flex-col space-y-4">
          <img src="assets/Img/logo1.webp" alt="Logo" className="w-32 h-32" />
          <div className="text-xl text-center">Your One Stop Solution</div>
          <p className="text-center">
            We are virually open and committed to full-fill all of the GRC
            needs, and we greatly value your interest and would be delighted to
            connect with you. Please feel free to reach out to us for a
            personalized demo, meeting requests, pricing inquiries, or any other
            queries you may have. We are eagerly awaiting the opportunity to
            assist you.
          </p>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="border border-gray-400 px-4 py-2 w-full rounded-md h-32 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

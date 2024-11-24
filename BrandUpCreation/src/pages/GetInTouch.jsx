import React from "react";

const GetInTouch = () => {
  return (
    <section className="min-h-screen py-20 px-4 text-white text-center">
      <h2 className="text-3xl sm:text-4xl text-black font-bold mb-6 mt-[-130px] font-montserrat">
        Get in Touch
      </h2>
      <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto text-black font-montserrat">
        We'd love to hear from you! Reach out for any inquiries or
        collaborations.
      </p>
      <form className="space-y-6 max-w-md sm:max-w-lg mx-auto bg-gradient-to-r from-blue-100 via-teal-100 to-pink-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-montserrat text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-montserrat text-black"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-montserrat text-black"
          rows="6"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-300 font-montserrat">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;

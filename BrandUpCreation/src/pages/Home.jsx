import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaClipboard, FaPen, FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS CSS
import videoFile from "../assets/w.mp4";
import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether the animation should happen once
    });
  }, []);

  return (
    <div className="container mx-auto text-center px-4 py-12">
      {/* Headline Section */}
      <div
        className="relative mb-8"
        data-aos="fade-up" // Add AOS animation to the element
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 font-montserrat mt-[-60px]">
          Creative Designs That Speak for Your Brand
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 font-montserrat">
          Crafting innovative and unique design solutions tailored for your
          business.
        </p>
        <Link
          to="/portfolio"
          className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg font-semibold rounded-full transition-all duration-300 ease-in-out"
        >
          Explore Our Work
        </Link>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://www.example.com/background-image.jpg')`,
          }}
        ></div>
      </div>

      {/* About Section with Video Background */}
      <div
        className="relative mb-12 bg-transparent w-full h-[50vh] sm:h-[60vh] md:h-[70vh]"
        data-aos="fade-up" // Animation added here as well
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-white text-center px-6 py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 drop-shadow-lg font-montserrat">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 max-w-3xl mx-auto font-montserrat">
            We are a passionate design team dedicated to transforming ideas into
            visually compelling experiences that resonate with your target
            audience.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-montserrat">
            Our mission is to help brands achieve their goals through
            innovative, beautiful, and meaningful designs. Every project is
            approached with creativity, precision, and a deep understanding of
            our clients' needs.
          </p>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-xl mb-12"
        data-aos="fade-up" // Add animation to this section
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6 font-montserrat">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/2 lg:w-1/4">
            <img
              src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
              alt="Client 1"
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
            />
            <p className="text-gray-600 italic font-montserrat">
              "This design team helped us create a brand identity that truly
              represents who we are. Excellent work!"
            </p>
            <p className="text-gray-800 font-semibold font-montserrat">
              John Doe
            </p>
            <p className="text-gray-500 font-montserrat">
              CEO, Example Company
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 w-full sm:w-1/2 lg:w-1/4">
            <img
              src="https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg"
              alt="Client 2"
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
            />
            <p className="text-gray-600 italic font-montserrat">
              "The team was a pleasure to work with, and the design exceeded all
              of our expectations."
            </p>
            <p className="text-gray-800 font-semibold font-montserrat">
              Jane Smith
            </p>
            <p className="text-gray-500 font-montserrat">
              Marketing Director, Another Company
            </p>
          </div>
        </div>
      </div>

      {/* Design Process Section */}
      <div
        className="mb-12"
        data-aos="fade-up" // Added animation here
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6 font-montserrat">
          Our Design Process
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-xl">
            <FaLightbulb className="text-blue-500 w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">
              Discovery
            </h3>
            <p className="text-gray-600 font-montserrat">
              We learn about your business and understand your goals.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-xl">
            <FaClipboard className="text-blue-500 w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">
              Design
            </h3>
            <p className="text-gray-600 font-montserrat">
              Our team starts crafting unique design concepts for you.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-xl">
            <FaPen className="text-blue-500 w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">
              Feedback
            </h3>
            <p className="text-gray-600 font-montserrat">
              We work closely with you to refine and perfect the design.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-xl">
            <FaCheck className="text-blue-500 w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">
              Final Delivery
            </h3>
            <p className="text-gray-600 font-montserrat">
              We deliver the final design, ready to be launched.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Snippet Section */}
      <div
        className="mb-12"
        data-aos="fade-up" // Added animation here too
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6 font-montserrat">
          Design Tips & Trends
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-full h-72 relative overflow-hidden rounded-md mb-4">
              <img
                src={B1}
                alt="Blog 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 font-montserrat">
              5 Design Trends You Need to Know in 2024
            </h3>
            <p className="text-gray-600 mb-4 font-montserrat">
              Discover the hottest design trends that will shape the creative
              industry this year.
            </p>
            <Link
              to="/"
              className="text-blue-500 font-semibold font-montserrat"
            >
              Read More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-full h-72 relative overflow-hidden rounded-md mb-4">
              <img
                src={B2}
                alt="Blog 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 font-montserrat">
              How to Craft a Strong Brand Identity
            </h3>
            <p className="text-gray-600 mb-4 font-montserrat">
              Tips and tricks for creating a memorable and effective brand.
            </p>
            <Link
              to="/"
              className="text-blue-500 font-semibold font-montserrat"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

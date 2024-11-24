import React, { useEffect } from "react";
import experienceImage from "../assets/q1.jpg";
import customSolutionsImage from "../assets/q2.jpg";
import clientSatisfactionImage from "../assets/q3.jpg";
import timelyDeliveryImage from "../assets/q4.jpg";
import competitivePricingImage from "../assets/q5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <section id="get-in-touch" className="py-10 md:py-20">
      <div className="text-center mb-12">
        <h2
          className="text-2xl md:text-4xl font-bold mb-4 mt-[-80px] font-montserrat"
          data-aos="fade-down"
        >
          Why Choose BrandUp Creation for Your Graphic Design Needs?
        </h2>
        <p
          className="text-sm md:text-lg text-gray-600 font-montserrat"
          data-aos="fade-up"
        >
          We’re dedicated to turning your ideas into stunning visual designs.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Experience & Expertise */}
        <div
          className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left"
          data-aos="fade-right"
        >
          <img
            src={experienceImage}
            alt="Experience & Expertise"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">
              Experience & Expertise
            </h3>
            <p className="text-sm sm:text-base font-montserrat">
              With years of experience in graphic design, our team brings
              creativity, technical expertise, and a commitment to quality.
            </p>
          </div>
        </div>

        {/* Custom Solutions */}
        <div
          className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left"
          data-aos="fade-left"
        >
          <img
            src={customSolutionsImage}
            alt="Custom Solutions"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">
              Custom Solutions
            </h3>
            <p className="text-sm sm:text-base font-montserrat">
              We craft personalized design solutions to meet your unique needs,
              ensuring every project aligns with your vision.
            </p>
          </div>
        </div>

        {/* Client Satisfaction */}
        <div
          className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left"
          data-aos="fade-right"
        >
          <img
            src={clientSatisfactionImage}
            alt="Client Satisfaction"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">
              Client Satisfaction
            </h3>
            <p className="text-sm sm:text-base font-montserrat">
              We collaborate closely with our clients to deliver designs that
              not only look amazing but also achieve their purpose.
            </p>
          </div>
        </div>

        {/* Timely Delivery */}
        <div
          className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left"
          data-aos="fade-left"
        >
          <img
            src={timelyDeliveryImage}
            alt="Timely Delivery"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">
              Timely Delivery
            </h3>
            <p className="text-sm sm:text-base font-montserrat">
              We respect your deadlines and ensure that all projects are
              completed on time without compromising quality.
            </p>
          </div>
        </div>

        {/* Competitive Pricing */}
        <div
          className="p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left"
          data-aos="fade-right"
        >
          <img
            src={competitivePricingImage}
            alt="Competitive Pricing"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6 object-cover rounded-full"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">
              Competitive Pricing
            </h3>
            <p className="text-sm sm:text-base font-montserrat">
              Get premium-quality designs at affordable rates, making
              professional design services accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

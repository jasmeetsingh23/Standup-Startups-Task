import React, { useEffect } from "react";
import brandIdentityImage from "../assets/1.jpg";
import marketingImage from "../assets/2.jpg";
import websiteDesignImage from "../assets/3.jpg";
import packagingImage from "../assets/4.jpg";
import illustrationImage from "../assets/5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation happens once per element
    });
  }, []);

  return (
    <section className="min-h-screen py-20 text-center">
      {/* Title and Subtitle */}
      <h2
        className="text-5xl font-extrabold text-gray-800 mb-6 mt-[-100px] font-montserrat"
        data-aos="fade-down"
      >
        Our Graphic Design Services
      </h2>
      <p
        className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-montserrat"
        data-aos="fade-up"
      >
        From logos to digital campaigns, we offer a variety of design services
        that will help you succeed. Let’s make your brand unforgettable!
      </p>

      {/* Service Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Brand Identity Design */}
        <div
          className="p-6 shadow-xl rounded-lg bg-white flex flex-col items-center"
          data-aos="fade-left"
        >
          <img
            src={brandIdentityImage}
            alt="Brand Identity Design"
            className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-300"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-montserrat">
            Brand Identity Design
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg font-montserrat">
            Logo Design, Brand Guidelines, and Stationery Design to build a
            consistent and impactful brand identity.
          </p>
        </div>

        {/* Marketing & Advertising Design */}
        <div
          className="p-6 shadow-xl rounded-lg bg-white flex flex-col items-center"
          data-aos="fade-right"
        >
          <img
            src={marketingImage}
            alt="Marketing & Advertising Design"
            className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-300"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-montserrat">
            Marketing & Advertising Design
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg font-montserrat">
            Social Media Graphics, Flyers, Posters, and Email Campaign Graphics
            to capture attention and drive engagement.
          </p>
        </div>

        {/* Website & Digital Design */}
        <div
          className="p-6 shadow-xl rounded-lg bg-white flex flex-col items-center"
          data-aos="fade-left"
        >
          <img
            src={websiteDesignImage}
            alt="Website & Digital Design"
            className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-300"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-montserrat">
            Website & Digital Design
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg font-montserrat">
            Web Graphics, UI/UX Design, and Infographics to create an engaging
            online presence.
          </p>
        </div>

        {/* Product Packaging Design */}
        <div
          className="p-6 shadow-xl rounded-lg bg-white flex flex-col items-center"
          data-aos="fade-right"
        >
          <img
            src={packagingImage}
            alt="Product Packaging Design"
            className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-300"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-montserrat">
            Product Packaging Design
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg font-montserrat">
            Labels, Packaging, and Product Mockups designed to make your product
            stand out on the shelf.
          </p>
        </div>

        {/* Custom Illustration and Event Design */}
        <div
          className="p-6 shadow-xl rounded-lg bg-white flex flex-col items-center"
          data-aos="fade-left"
        >
          <img
            src={illustrationImage}
            alt="Custom Illustration and Event Design"
            className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-300"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 font-montserrat">
            Custom Illustration and Event Design
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg font-montserrat">
            Hand-drawn or digital illustrations, and designs for events and
            presentations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

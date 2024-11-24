import React, { useEffect } from "react";
import video1 from "../assets/v1.mp4";
import video2 from "../assets/v2.mp4";
import video3 from "../assets/v3.mp4";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Portfolio = () => {
  const projects = [
    {
      title: "Logo & Brand Identity",
      description:
        "Crafted a cohesive brand identity for a tech startup, focusing on innovation and modern aesthetics. Includes logo design, typography, and a consistent color palette.",
      video: video1, // Imported video 1
    },
    {
      title: "Marketing Materials",
      description:
        "Designed engaging brochures and flyers for a leading fitness brand, using vibrant visuals and compelling messaging to attract customers.",
      video: video2, // Imported video 2
    },
    {
      title: "Social Media Campaigns",
      description:
        "Developed visually appealing social media graphics for an eco-friendly initiative, combining creative infographics with impactful messages.",
      video: video3, // Imported video 3
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animations occur only once when scrolling
    });
  }, []);

  return (
    <section className="py-20 px-4">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center font-montserrat text-gray-900 mb-16 mt-[-130px]"
        data-aos="fade-down"
      >
        Our Featured Projects
      </h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-xl h-[300px] sm:h-[400px] md:h-[500px]" // Adjust container size for different screen sizes
            data-aos="fade-up" // AOS effect for each project
          >
            {/* Background Video with proper container sizing */}
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-300"
              src={project.video}
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white p-6 flex flex-col justify-center h-full">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 font-montserrat">
                {project.title}
              </h3>
              <p className="text-lg sm:text-xl font-montserrat">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from './ProfilePic.jpg';

const About = () => {
  

  return (
    <section
      id="about"
      className="section bg-primary text-neutral flex flex-col md:flex-row items-center md:space-x-16 justify-center p-6 sm:p-8 md:p-12 scroll-mt-16"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 lg:w-1/2 flex flex-col space-y-6 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mx-12 text-accent">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl mx-12">
          I'm Ronan Virmani, a passionate software engineer specializing in full-stack development and machine learning. I thrive on building scalable applications and continuously exploring emerging technologies to solve real-world problems. I have a strong engineering background 
          from my Bachelors of Engineering in Computer Science .
        </p>
        <p className="text-base sm:text-lg md:text-xl mx-12">
        Beyond coding, I serve as the President of the UF Cloud Computing Club, where I lead initiatives to foster collaborative learning and innovation. Additionally, as the Event Logistics Coordinator for the AI Club, I organize events that bring together enthusiasts and experts to explore the latest advancements in artificial intelligence. I'm committed to continuous growth and am excited to take on new challenges in the tech industry.</p>
      </motion.div>

      {/* Photo Section */}
      <motion.div
        className="md:w-1/4 lg:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={ProfilePic}
          alt="Ronan Virmani"
          className="rounded-xl w-80 h-80 object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;

// src/components/Home.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants for the scroll-down arrow
  const arrowVariants = {
    animate: {
      y: [0, 10, 0], // Move down 10px and back
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <section
      id="home"
      className="section bg-primary text-neutral flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 relative"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        HEY, I'M 
        <span className="text-accent"> RONAN VIRMANI</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-xl mb-6">
        Welcome to my portfolio!
      </p>
      <div className="flex space-x-4 mb-8">
        <a
          href="https://www.linkedin.com/in/ronan-virmani-UF/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-neutral transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={60} />
        </a>
        <a
          href="https://github.com/ronanvirmani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-neutral transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FaGithub size={60} />
        </a>
        <a
          href="mailto:ronanvirmani@yahoo.com"
          className="text-accent hover:text-neutral transition-colors duration-300"
          aria-label="Send Email"
        >
          <FaEnvelope size={60} />
        </a>
      </div>

      {/* Scroll-Down Arrow */}
      <a href="#about" aria-label="Scroll Down">
        <motion.div
          variants={arrowVariants}
          animate="animate"
          className="absolute bottom-8 cursor-pointer"
        >
          <FaArrowDown size={30} className="text-neutral hover:text-accent transition-colors duration-300" />
        </motion.div>
      </a>
    </section>
  );
};

export default Home;

// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaAngular,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiScikitlearn,
  SiPostman,
} from 'react-icons/si';

const Skills = () => {
  // Define skills categories with corresponding icons
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython className="text-4xl text-yellow-400" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
        { name: 'Go', icon: <SiGo className="text-4xl text-blue-500" /> },
        { name: 'Java', icon: <FaJava className="text-4xl text-red-600" /> },
        { name: 'C/C++', icon: <FaJsSquare className="text-4xl text-blue-600" /> }, // Placeholder icon
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
        { name: 'Angular', icon: <FaAngular className="text-4xl text-red-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-4xl text-gray-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-700" /> },
        { name: 'NumPy', icon: <SiNumpy className="text-4xl text-blue-600" /> },
        { name: 'sk-learn', icon: <SiScikitlearn className="text-4xl text-orange-500" /> },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-4xl text-black" /> },
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" /> },
        { name: 'AWS', icon: <FaAws className="text-4xl text-orange-500" /> },
        { name: 'Linux', icon: <FaLinux className="text-4xl text-black" /> },
        { name: 'Postman', icon: <SiPostman className="text-4xl text-orange-400" /> },
      ],
    },
  ];

  // Animation variants for continuous floating
  const floatAnimation = {
    animate: {
      y: [0, -10, 0], // Move up 10px and back
      scale: [1, 1.05, 1], // Slightly scale up and back
    },
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'easeInOut',
      },
      scale: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="skills"
      className="section text-neutral flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 mt-16 scroll-mt-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-accent">My Skills</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skillCategory) => (
          <div
            key={skillCategory.category}
            className=" p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{skillCategory.category}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center bg-neutral text-primary rounded-full p-4 h-24"
                  variants={floatAnimation}
                  initial="animate"
                  animate="animate"
                >
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-sm text-center"><strong>{skill.name}</strong></span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Projects() {

    // src/data/projectsData.js

const projectsData = [
    {
      id: 1,
      name: 'Splitmate',
      description: 'Splitmate is a user-friendly app designed to effortlessly divide expenses and manage shared finances among friends, family, or roommates. With intuitive features and real-time tracking, Splitmate simplifies bill splitting, ensuring transparency and reducing conflicts over shared costs.',
      technologies: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/ronanvirmani/Splitmate',
      hostedLink: 'https://master--harmonious-florentine-0617fc.netlify.app/', // Optional
    },
    {
      id: 2,
      name: 'ClimateLens',
      description: 'ClimateLens is an interactive web application featuring a dynamic 3D globe that visualizes real-time weather alerts across the United States. By integrating with the weather.gov alerts API, we highlight affected counties using a color-coded severity system.',
      technologies: ['React', 'Flask', 'weather.gov API', 'Tailwind CSS'],
      githubLink: 'https://github.com/LukeSutor/AI-Days-Hackathon-2024',
      hostedLink: 'https://devpost.com/software/climatelens', // No hosted link
    },
    {
      id: 3,
      name: 'Bookmark\'d',
      description: 'BookMark\'d is an interactive platform for book lovers to create personal libraries, annotate their favorite reads, and share insights with a community of readers. Built with React and Supabase, it provides a smooth, engaging way to track reading progress, organize book collections, and foster meaningful discussions around literature.',
      technologies: ['React', 'PostgreSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/ronanvirmani/BookMarkd',
      hostedLink: 'https://book-markd.vercel.app/', // Optional
    },
    {
      id: 4,
      name: 'HobbyHub',
      description: 'HobbyHub is a dynamic platform that connects people with shared interests, making it easy to discover, track, and engage in hobbies alongside a like-minded community. From beginners to experts, users can explore new activities, set goals, and share their progress, enriching their passion and learning through collaboration and interaction.',
      technologies: ['React', 'PostgreSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/LukeSutor/HobbyHub',
      hostedLink: 'https://celadon-pasca-504049.netlify.app/', // Optional
    },
    {
      id: 5,
      name: 'Spam Detector',
      description: 'Trained two machine learning-based spam detection models using Python, pandas, and scikit-learn, processing 5,000+ emails and achieving 91% and 94% accuracy respectively.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn'],
      githubLink: 'https://github.com/ronanvirmani/emailSpamDetection',
      hostedLink: '', // No hosted link
    },
    {
        id: 6,
        name: 'Event Manager',
        description: 'The Event Manager is a versatile project management application designed to streamline task organization, deadlines, and team collaboration in a centralized platform. It enables users to efficiently track project progress, assign responsibilities, and maintain smooth communication, enhancing productivity across various project types.',
        technologies: ['React', 'Go', 'AWS', 'Docker', 'Kubernetes'],
        githubLink: 'https://github.com/ronanvirmani/event-management-system',
        hostedLink: '', // Optional
      },
  ];  

    // Animation variants for floating effect
  const floatAnimation = {
    animate: {
      y: [0, -10, 0], // Move up 10px and back
      rotate: [0, 2, 0], // Slight rotation
    },
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 6,
        ease: 'easeInOut',
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="projects"
      className="section bg-primary text-neutral flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 mt-16 scroll-mt-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-accent">Projects</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col border"
            variants={floatAnimation}
            initial="animate"
            animate="animate"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
            whileFocus={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          >

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-1">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-xs bg-accent px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:accent transition-colors"
                  aria-label={`GitHub Repository for ${project.name}`}
                >
                  <FaGithub size={24} />
                </a>
                {project.hostedLink && (
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral hover:accent transition-colors"
                    aria-label={`Hosted Website for ${project.name}`}
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

}
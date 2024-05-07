import React from 'react';
import { HoverEffect } from '../ui/card-hover';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='max-w-5xl mx-auto px-8'
    >
      <h2 className='text-3xl font-bold font-mont text-center text-gray-900'>
        What we use primarily
      </h2>
      <HoverEffect items={projects} />
    </motion.div>
  );
};

export default TechStack;

export const projects = [
  {
    title: 'Frameworks',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    src: '/landing/techStack/1.png',
  },
  {
    title: 'For Styling',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    src: '/landing/techStack/2.png',
  },
  {
    title: 'For Auth',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    src: '/landing/techStack/3.png',
  },
  {
    title: 'Backend Technologies',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    src: '/landing/techStack/4.png',
  },
  {
    title: 'Software Language',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    src: '/landing/techStack/5.png',
  },
  {
    title: 'Database Technologies',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    src: '/landing/techStack/6.png',
  },
];

'use client';
import React from 'react';
import { HeroParallax } from '../ui/HeroParallax';

const ParallaxSection = () => {
  return <HeroParallax products={products} />;
};

export default ParallaxSection;

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/landing/dashboard.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/landing/dash1.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/landing/dashboard.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/landing/dashboard.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/landing/dashboard.png',
  },
];

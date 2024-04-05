import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='flex justify-evenly w-full text-3xl font-bold'>
      <a href='/sign-in'>sign</a>
      <a href='/dashboard'>dash</a>
      <a href='/sign-up'>upp</a>
    </div>
  );
}

import React from 'react';
import { AuroraBackground } from '../ui/aurora';
import { motion } from 'framer-motion';
import LandingNavbar from './LandingNavbar';
import LogosSlider from './LogosSlider';
import Link from 'next/link';

const Hero = ({ isSignedIn }: { isSignedIn: boolean }) => {
  return (
    // <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='h-[100vh] relative flex flex-col w-screen items-center justify-center'
    >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className='text-3xl md:text-6xl font-bold dark:text-white text-center font-mont-light'>
          We are saving your
          <br />
          <span className='font-mont'>time&money</span>
          <br />
          on development
        </div>
        <div
          className='font-extralight text-base md:text-2xl dark:text-neutral-200 py-4'
          style={{ fontFamily: 'Mont-Light' }}
        >
          Development services for everyone. Pause or cancel anytime.
        </div>
        {isSignedIn ? (
          <Link
            href={'/dashboard'}
            className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'
          >
            go to dashboard
          </Link>
        ) : (
          <Link
            href={'/sign-up'}
            className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'
          >
            Sign Up to Dashboard Now
          </Link>
        )}
      </motion.div>
      <LogosSlider />
    </motion.div>
    // </AuroraBackground>
  );
};

export default Hero;

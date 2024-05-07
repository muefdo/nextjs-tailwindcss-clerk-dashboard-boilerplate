'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { FloatingNav } from '../ui/FloatingNavbar';
import { Button } from '../ui/button';

const LandingNavbar = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
        });
        const data = await response.json();
        setIsSignedIn(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      {!isSignedIn && <FloatingNav />}
      <div className='flex items-center justify-between p-4 px-8 border-b scroll-smooth'>
        <Link href='/' legacyBehavior>
          {/* <img src='/logo.png' alt='' className='w-[7rem]' /> */}
          bradigo
        </Link>
        <div className='gap-3 flex max-md:hidden'>

          <Link href='/#pricing' className='font-bold hover:underline duration-150'>
            Pricing
          </Link>
          <Link href='/#techStack' className='font-bold hover:underline duration-150'>
            Tech Stack
          </Link>
        </div>
        <div className='flex gap-5'>
          {isSignedIn ? (
            <Link href='/dashboard' legacyBehavior>
              <Button
                variant={'default'}
                className='text-lg font-semibold  dark:text-white'
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <div>
              <a
                href='/sign-in'
                className='text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
              >
                <span>Sign In</span>
              </a>
              <a
                href='/sign-up'
                className='border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
              >
                <span>Sign Up</span>
                <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;

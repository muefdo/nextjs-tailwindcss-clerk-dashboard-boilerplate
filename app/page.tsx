'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { ContainerScroll } from '@/components/ui/container-scroll';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { currentUser } from '@clerk/nextjs';
import LandingNavbar from '@/components/sections/LandingNavbar';
import { HeroParallax } from '@/components/ui/HeroParallax';
import ParallaxSection from '@/components/sections/ParallaxSection';
import DashboardParallax from '@/components/sections/DashboardParallax';
import LogosSlider from '@/components/sections/LogosSlider';
import { FollowerPointerCard } from '@/components/ui/following-pointer';
import Hero from '@/components/sections/Hero';
import GridImages from '@/components/sections/GridImages';
import ScrollSection from '@/components/sections/ScrollSection';
import NewFooter from '@/components/sections/Footer';
import Details from '@/components/sections/Details';
import TechStack from '@/components/sections/TechStack';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import Differences from '@/components/sections/Differences';
import Pricing from '@/components/sections/Pricing';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

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
    <div className='scroll-smooth'>
      <LandingNavbar />
      <div className='flex-col overflow-hidden bg-dot-black/[0.2] relative flex items-center justify-center w-full dark:bg-black bg-white '>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

        <Hero isSignedIn={isSignedIn} />
        <div id='techStack'>
          <TechStack />
        </div>
        {from === 'bradi.tech' && (
          <Link
            href='https://www.bradi.tech'
            className='fixed bottom-5  right-5 z-50 text-white'
          >
            <Badge className='text-lg'>Return to bradi.tech</Badge>
          </Link>
        )}

        <Details />
        <Differences />
        <Testimonials />
        <WhyUs />
        <DashboardParallax />
        <div className=' z-50 mb-20' id='pricing'>
          <Pricing />
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

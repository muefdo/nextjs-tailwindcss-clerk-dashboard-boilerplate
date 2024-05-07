import React from 'react';
import { ContainerScroll } from '../ui/container-scroll';
import Image from 'next/image';
import { Badge } from '../ui/badge';

const DashboardParallax = () => {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <Badge className='mb-4'>Development</Badge>
          <h1 className='text-4xl font-semibold text-slate-700 dark:text-white font-mont-light'>
            Manage all your progress in the Dashboard <br />
            <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black font-mont'>
              practical, easy, fast
            </span>
          </h1>
        </>
      }
    >
      <Image
        src={`/landing/dashboard.png`}
        alt='hero'
        height={476}
        width={960}
        className='mx-auto rounded-2xl object-cover h- object-left-top'
        draggable={false}
      />
    </ContainerScroll>
  );
};

export default DashboardParallax;

'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '../ui/infinite-cards';

const clients = [...new Array(10)].map((client, index) => ({
  href: `/brands/${index + 1}.png`,
}));

const LogosSlider = () => {
  return (
    <div className='h-[20rem]  rounded-md flex flex-col antialiased pt-5 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <h3
        className=' font-bold dark:text-white'
        style={{ fontFamily: 'Mont-Light' }}
      >
        Trusted by top companies
      </h3>
      <InfiniteMovingCards items={clients} direction='right' speed='slow'  />
    </div>
  );
};

export default LogosSlider;

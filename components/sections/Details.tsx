import Image from 'next/image';
import React from 'react';
import { Card } from '../ui/container-scroll';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const Details = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-slate-50 mt-12 p-8 flex flex-col md:min-w-[80rem] mx-5  my-5
                        overflow-y-auto rounded-2xl shadow-2xl  '
    >
      <div className='flex w-full flex-col items-center justify-evenly h-full'>
        <div className='flex justify-center gap-5 items-center flex-col'>
          {/* title */}
          <div className='text-center'>
            <h2 className='text-gray-800 text-2xl font-semibold mb-1'>
              Let us develop your project
            </h2>
            <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
              Manage all your requests in one place
            </h3>
          </div>
          <p className='mt-4' style={{ fontFamily: 'Mont-Light' }}>
            Create tickets, assign tasks to us and track the progress of your
            project
          </p>
        </div>
        <div>
          <div className='flex justify-center items-center'>
            <Image
              className='object-contain md:h-full md:w-full border-2 border-gray-200 rounded-lg'
              alt='dashboard image'
              src='/landing/dashboard.png'
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;

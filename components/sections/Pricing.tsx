import React from 'react';
import { PricingPlans } from '@/public/assets';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { BackgroundGradient } from '../ui/bg-gradient';

const Pricing = () => {
  return (
    <section className='text-black body-font py-5 font-mont w-full'>
      <div className='container px-5 my-24 mx-auto'>
        <div className='sm:text-4xl text-3xl font-bold title-font text-center text-gray-800 mb-20'>
          {/* <span className='font-mont-light'>
            Let us help you with your project
          </span> */}
          <br />
          Membership Plans
          <p
            className='sm:text-xl text-lg font-bold mt-2 title-font text-center  mb-20'
            style={{ fontFamily: 'Mont-Light' }}
          >
            bradiGO offers a variety of membership plans to suit your needs.
          </p>
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-end justify-center '>
          {PricingPlans.map((item, index) => (
            <div className='p-4 md:w-5/12 lg:w-4/12 flex' key={index}>
              <BackgroundGradient className='rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <div className=' p-6 rounded-lg flex flex-col relative overflow-hidden'>
                  <h2 className='text-2xl tracking-widest title-font mb-1 text-gray-900 font-medium '>
                    {item.type}
                  </h2>
                  <p
                    className={`space-y-2 pb-4 mb-4 border-b border-gray-200 leading-none flex flex-col text-start`}
                  >
                    <span className='font-mont-light text-sm '>
                      {item.desc}
                    </span>
                    <span className='text-3xl font-mont-light'>
                      ${item.value}{' '}
                      <span className='font-mont-light text-xs'>/month</span>
                    </span>
                  </p>
                  {item.data.map((data, index) => (
                    <p
                      key={index}
                      className={`flex items-center  mb-2 ${
                        item.title === 'bradi.tech'
                          ? 'text-gray-600'
                          : 'text-gray-900'
                      }`}
                      style={{ fontFamily: 'Mont-Light' }}
                    >
                      <span className='w-2 h-2 mr-2 inline-flex items-center justify-center text-green-600  rounded-full flex-shrink-0'>
                        <FaPlus />
                      </span>

                      {data}
                    </p>
                  ))}

                  <a
                    href='/schedule-meeting'
                    className='flex items-center mt-5 text-white bg-gray-700  border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#367797] duration-300 ease-in-out rounded'
                  >
                    Get Started
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-auto'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>

                  {/* <p className='text-xs text-gray-500 mt-3'>
            Literally you probably haven't heard of them jean shorts.
          </p> */}
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import { BrandDiff } from '@/public/assets';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { BackgroundGradient } from '../ui/bg-gradient';

const Differences = () => {
  return (
    <section className='text-black body-font py-5 font-mont w-full'>
      <div className='container px-5 my-24 mx-auto'>
        <div className='sm:text-4xl text-3xl font-bold title-font text-center text-gray-800 mb-20'>
          Best Option to Develop Software
          <br />
          <p
            className='sm:text-xl text-lg font-bold mt-2 title-font text-center  mb-20'
            style={{ fontFamily: 'Mont-Light' }}
          >
            Better than hiring freelancers, more affordable than maintaining a
            software team.
          </p>
        </div>
        <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-end justify-center '>
          {BrandDiff.map((item, index) => (
            <div className='p-4 md:w-1/3 flex' key={index}>
              {item.title === 'go.bradi.tech' ? (
                <BackgroundGradient className='rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                  <div className=' p-6 rounded-lg flex flex-col relative overflow-hidden'>
                    <h2 className='text-sm tracking-widest title-font mb-1 text-green-600 font-medium'>
                      {item.title === 'go.bradi.tech' ? 'BEST' : ''}
                    </h2>
                    <p
                      className={`text-2xl md:text-4xl  pb-4 mb-4 border-b border-gray-200 leading-none flex flex-wrap ${
                        item.title === 'go.bradi.tech' ? '' : 'text-gray-800'
                      } `}
                    >
                      {item.title === 'go.bradi.tech' ? (
                        <span className='font-mont-light text-lg md:text-lg'>
                          <span className='text-primary-color font-mont text-2xl md:text-4xl'>
                            bradigo
                          </span>{' '}
                          <br />
                          by bradi.tech
                        </span>
                      ) : (
                        <span>{item.title}</span>
                      )}
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
                        {item.title === 'go.bradi.tech' ? (
                          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center text-green-600  rounded-full flex-shrink-0'>
                            <FaPlus />
                          </span>
                        ) : (
                          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center text-red-600 font-bold rounded-full flex-shrink-0'>
                            <FaMinus />
                          </span>
                        )}
                        {data}
                      </p>
                    ))}

                    {item.title === 'go.bradi.tech' && (
                      <a
                        href='/schedule-meeting'
                        className='flex items-center mt-auto text-white bg-[#4db0e2] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#367797] duration-300 ease-in-out rounded'
                      >
                        Schedule a Meeting
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
                    )}

                    {/* <p className='text-xs text-gray-500 mt-3'>
            Literally you probably haven't heard of them jean shorts.
          </p> */}
                  </div>
                </BackgroundGradient>
              ) : (
                <div className='p-4 flex '>
                  <div className='p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-white'>
                    <h2 className='text-sm tracking-widest title-font mb-1 text-green-600 font-medium'>
                      {item.title === 'go.bradi.tech' ? 'BEST' : ''}
                    </h2>
                    <p
                      className={`text-2xl md:text-4xl  pb-4 mb-4 border-b border-gray-200 leading-none flex flex-wrap ${
                        item.title === 'go.bradi.tech' ? '' : 'text-gray-800'
                      } `}
                    >
                      {item.title === 'go.bradi.tech' ? (
                        <span className='font-mont-light text-lg md:text-lg'>
                          <span className='text-primary-color font-mont text-2xl md:text-4xl'>
                            bradigo
                          </span>{' '}
                          <br />
                          by bradi.tech
                        </span>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </p>
                    {item.data.map((data, index) => (
                      <p
                        key={index}
                        className={`flex items-center mb-2 ${
                          item.title === 'bradi.tech'
                            ? 'text-gray-600'
                            : 'text-gray-900'
                        }`}
                        style={{ fontFamily: 'Mont-Light' }}
                      >
                        {item.title === 'go.bradi.tech' ? (
                          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center text-green-600  rounded-full flex-shrink-0'>
                            <FaPlus />
                          </span>
                        ) : (
                          <span className='w-4 h-4 mr-2 inline-flex items-center justify-center text-red-600 font-bold rounded-full flex-shrink-0'>
                            <FaMinus />
                          </span>
                        )}
                        {data}
                      </p>
                    ))}

                    {item.title === 'go.bradi.tech' && (
                      <a
                        href='/schedule-meeting'
                        className='flex items-center mt-auto text-white bg-[#4db0e2] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#367797] duration-300 ease-in-out rounded'
                      >
                        Schedule a Meeting
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
                    )}

                    {/* <p className='text-xs text-gray-500 mt-3'>
            Literally you probably haven't heard of them jean shorts.
          </p> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differences;

import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const NewFooter = () => {
  return (
    <footer className='text-black bg-white border-t-2 border-black body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap md:text-left text-center order-first'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-mont  tracking-widest text-sm mb-3'>
              Know Us More
            </h2>
            <nav
              className='list-none mb-10'
              style={{ fontFamily: 'Mont-Light' }}
            >
              <li>
                <a
                  href='https://www.bradi.tech/about-us'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='https://www.bradi.tech/our-works'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Our Works
                </a>
              </li>
              <li>
                <a
                  href='https://www.bradi.tech/our-products'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Our Products
                </a>
              </li>
              {/* <li>
                <a
                  href='https://bradi.tech/blog'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Blog
                </a>
              </li> */}
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <a
              href='https://www.bradi.tech/contact-us'
              className='title-font font-mont tracking-widest text-sm mb-3'
            >
              Contact Us
            </a>
            <nav
              className='list-none mb-10'
              style={{ fontFamily: 'Mont-Light' }}
            >
              <li>
                <a
                  href='mailto:info@bradi.tech'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  info@bradi.tech
                </a>
              </li>{' '}
              <li>
                <a
                  href='https://www.bradi.tech/bussines-contact-info'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Bussines and Contact Information{' '}
                </a>
              </li>
              <li>
                <a
                  href='https://www.bradi.tech/contact-us'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Fill Contact Form
                </a>
              </li>
              <li>
                <a
                  href='https://www.bradi.tech/schedule-meeting'
                  className='hover:text-gray-400 duration-300 ease-in-out'
                >
                  Schedule Meeting
                </a>
              </li>
            </nav>
          </div>
          <div className=' md:w-1/2 flex-col w-full px-4 flex justify-center items-center'>
            <h2 className='title-font font-medium  tracking-widest text-xl lg:text-4xl font-mont'>
              bradigo{' '}
            </h2>
            <a
              className='mt-3 text-sm md:text-lg font-semibold inline-flex justify-center w-full items-center'
              href='https://www.bradi.tech/schedule-meeting'
              style={{ fontFamily: 'Mont-Light' }}
            >
              Let&apos;s Discuss Your Project
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='bg-black text-white border-t'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <p
            className='text-sm  sm:ml-6 sm:mt-0 mt-4'
            style={{ fontFamily: 'Mont-Light' }}
          >
            © 2024{' '}
            <span style={{ fontFamily: 'Mont-Heavy' }}>
              {' '}
              <span className='text-primary-color'>bradi</span>.tech -{' '}
            </span>
            <span style={{ fontFamily: 'Mont-Light' }}>
              All rights reserved
            </span>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 text-3xl justify-center sm:justify-start gap-5'>
            <a
              href='https://www.instagram.com/bradi.tech/'
              className='text-white hover:text-slate-400 duration-300 ease-in-out'
            >
              <FaInstagram />
            </a>
            <a
              href='https://wa.me/4915217021599'
              className='text-white hover:text-slate-400 duration-300 ease-in-out'
            >
              <FaWhatsapp />
            </a>
            <a
              href='https://www.linkedin.com/company/bradi-tech'
              className='text-white hover:text-slate-400 duration-300 ease-in-out'
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

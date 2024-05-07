import NewFooter from '@/components/sections/Footer';
import LandingNavbar from '@/components/sections/LandingNavbar';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className=''>
      <LandingNavbar />
      <div className='h-screen md:h-[70vh] my-12 w-full flex justify-center items-center'>
        <div className='w-full md:flex justify-evenly'>
          {/* <div className='items-center flex flex-col justify-center px-5'>
            <h1 className='text-5xl font-semibold text-center font-mont'>
              Make it happen
            </h1>
            <p className='text-center text-xl text-gray-500 font-mont-light'>
              Welcome back!
            </p>
            <img
              src='/logo.png'
              alt='logo'
              className=''
              width={200}
              height={100}
            />
          </div> */}
          <SignUp />{' '}
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

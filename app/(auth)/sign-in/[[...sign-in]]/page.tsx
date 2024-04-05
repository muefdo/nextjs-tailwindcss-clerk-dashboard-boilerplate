import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-red-400'>
      <SignIn />
    </div>
  );
}

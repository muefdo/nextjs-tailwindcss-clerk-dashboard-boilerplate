'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { sections } from '@/public/assets';
import { useEffect, useState } from 'react';
import ProModal from './ui/pro-modal';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const response = await fetch('/api/userType');
        const data = await response.json();
        setUserType(data);
      } catch (error) {
        console.error('Error fetching user type:', error);
      }
    };

    fetchUserType();
  }, []);

  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            bradigo
            {/* <img src='/logo.png' alt='' className='w-8/12' /> */}
          </Link>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-100 ${
                  pathname === section.href ? 'text-primary bg-slate-200' : ''
                }`}
              >
                {section.icon}
                {section.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* PRO modal */}
        <ProModal userType={userType} />
      </div>
    </div>
  );
};

export default Sidebar;

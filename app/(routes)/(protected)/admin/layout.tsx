'use client';

import AdminNav from '@/components/AdminNav';
import DashMainWrapper from '@/components/DashMainWrapper';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

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
    <div className='flex flex-col w-full '>
      <AdminNav />
      <div className='flex justify-center '>
        <div className=' flex w-9/12 justify-center '>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;

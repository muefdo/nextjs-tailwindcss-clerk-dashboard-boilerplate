import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DashTitle from '@/components/ui/dash-title';
import Link from 'next/link';
import React from 'react';

const Admin = () => {
  return (
    <div className='flex flex-col mt-5 gap-12'>
      <DashTitle title='Admin Panel' />

      <div className='flex mt-5 gap-12 max-md:flex-col'>
        <Card className='sm:col-span-2'>
          <CardHeader className='pb-3'>
            <CardTitle>All Projects</CardTitle>
            <CardDescription className='max-w-lg text-balance leading-relaxed'>
              Manage all your clients projects in one place.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href='/admin/projects'>
              <Button>Go Projects</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className='sm:col-span-2'>
          <CardHeader className='pb-3'>
            <CardTitle>All Tickets</CardTitle>
            <CardDescription className='max-w-lg text-balance leading-relaxed'>
              Manage all your clients tickets in one place.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href='/admin/tickets'>
              <Button>Go Tickets</Button>
            </Link>
          </CardFooter>
        </Card>{' '}
      </div>
    </div>
  );
};

export default Admin;

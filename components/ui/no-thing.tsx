import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const NoThingHere = ({
  title,
  name,
  subtitle,
  href,
}: {
  name: string;
  subtitle: string;
  title: string;
  href: string;
}) => {
  return (
    <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-full'>
      <div className='flex flex-col items-center gap-1 text-center'>
        <h3 className='text-2xl font-bold tracking-tight'>{title} </h3>
        <p className='text-sm text-muted-foreground'>{subtitle}</p>
        <Link href={href}>
          <Button className='mt-4'>Create {name} </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoThingHere;

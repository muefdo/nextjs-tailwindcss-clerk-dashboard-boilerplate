import React from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowUpRight,
  ChevronUp,
  ChevronsUp,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Minus,
  Package2,
  Search,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from './ui/button';
import SkeletonLoader from './ui/skeletonLoader';

import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  projectName: string;
  projectInfo?: string | null;
  techStack: string[];
  projectUrl?: string | null;
  githubUrl?: string | null;
  completedTickets?: number | null;
  tickets: Ticket[];
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null;
}
interface Ticket {
  id: string;
  title?: string | null;
  messages?: string | null;
  status?: string | null;
  project: Project;
  category: string[];
  priority: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TicketList = ({
  tickets,
  lite,
  projectName,
}: {
  tickets: Ticket[];
  lite: boolean;
  projectName: string;
}) => {
  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const router = useRouter();

  const handleButtonClick = (ticketId: string) => {
    // Do something with the ticketId
    router.push(
      `/ticketDetails?ticketId=${ticketId}&projectName=${projectName}`
    );
  };


  return (
    <Card className='xl:col-span-2'>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Actions</TableHead>
              <TableHead>Title</TableHead>
              {!lite && <TableHead className=''>Status</TableHead>}
              <TableHead className='max-md:hidden'>Categories</TableHead>
              <TableHead className='max-md:hidden'>Priority</TableHead>
              {!lite && (
                <TableHead className='text-right max-md:hidden'>Date</TableHead>
              )}
            </TableRow>
          </TableHeader>
          {tickets.length > 0 ? (
            tickets.map((ticket, index) => (
              <TableBody key={index}>
                <TableRow key={index}>
                  <TableCell>
                    <Button
                      size='sm'
                      className='mr-2'
                      onClick={() => handleButtonClick(ticket.id)}
                    >
                      <ArrowUpRight className='h-4 w-4' />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className='font-medium overflow-ellipsis overflow-hidden'>
                      {ticket.title?.trim().substring(0, 30)}
                    </div>
                  </TableCell>
                  {!lite && (
                    <TableCell className=''>
                      {' '}
                      {ticket.status === 'Completed' ? (
                        <Badge className='text-xs' variant='default'>
                          {ticket.status}
                        </Badge>
                      ) : (
                        <Badge className='text-xs' variant='secondary'>
                          {ticket.status}
                        </Badge>
                      )}
                    </TableCell>
                  )}
                  <TableCell className='max-md:hidden'>
                    {ticket.category.slice(0, 3).map((category, index) => (
                      <Badge key={index} className='text-xs' variant='outline'>
                        {category}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell className='max-md:hidden'>
                    {ticket.priority === 'high' && (
                      <Badge variant='secondary'>
                        <ChevronsUp /> High
                      </Badge>
                    )}
                    {ticket.priority === 'medium' && (
                      <Badge variant='outline'>
                        <ChevronUp /> Medium
                      </Badge>
                    )}
                    {ticket.priority === 'low' && (
                      <Badge variant='outline'>
                        <Minus /> Low
                      </Badge>
                    )}
                  </TableCell>
                  {!lite && (
                    <TableCell className='text-right max-md:hidden'>
                      {formattedDate(ticket.createdAt)}
                    </TableCell>
                  )}
                </TableRow>
              </TableBody>
            ))
          ) : (
            <TableBody>
              <TableRow>
                <TableCell>
                  <SkeletonLoader />
                </TableCell>
                <TableCell>
                  <div className='font-medium'>
                    <SkeletonLoader />
                  </div>
                </TableCell>
                {!lite && (
                  <TableCell className=''>
                    <SkeletonLoader />
                  </TableCell>
                )}
                <TableCell className='max-md:hidden'>
                  <SkeletonLoader />
                </TableCell>
                <TableCell className='max-md:hidden'>
                  <SkeletonLoader />
                </TableCell>
                {!lite && (
                  <TableCell className='text-right'>
                    <SkeletonLoader />
                  </TableCell>
                )}
              </TableRow>
            </TableBody>
          )}
        </Table>
      </CardContent>
    </Card>
  );
};

export default TicketList;

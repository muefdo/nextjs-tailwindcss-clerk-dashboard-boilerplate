'use client';

import React, { use, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import DashSectionWrapper from '../DashSectionWrapper';
import { VscLoading } from 'react-icons/vsc';
import DashTitle from '../ui/dash-title';
import Link from 'next/link';
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
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
import DashboardCards from '../ui/DashboardCards';
import DashboardMessage from '../DashboardMessage';
import TicketList from '../TicketList';
import SkeletonLoader from '../ui/skeletonLoader';
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

const DashboardMain = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
  const [loadingTickets, setLoadingTickets] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        const data = await response.json();
        setLoadingProjects(false);
        setProjects(data);
        if (data.length === 0) {
          router.push('/tickets');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (projects.length > 0) {
          const projectId = projects[0].id;
          const response = await fetch(`/api/ticket?projectId=${projectId}`);
          const data = await response.json();
          setTickets(data);
          setLoadingTickets(false);

          if (data.length === 0) {
            router.push('/tickets');
          }
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [projects]);

  const noProject = projects[0] === undefined || projects[0] === null;
  const noTickets = tickets[0] === undefined || tickets[0] === null;

  const cardsData = [
    {
      index: 1,
      value: noTickets
        ? null
        : tickets.filter((ticket) => ticket.status === "Completed").length.toString(),
      subtitle: 'Total completed tickets!',
    },
    {
      index: 2,
      value: noTickets
        ? null
        : tickets.filter((ticket) => ticket.status?.length).length.toString(),
      subtitle: 'Total active tickets!',
    },
    {
      index: 3,
      value: noTickets ? null : tickets.length.toString(),
      subtitle: 'Total tickets!',
    },
    {
      index: 4,
      // value: noProject ? "0" : projects.length.toString(),
      value: noProject ? null : projects[0].projectName,
      subtitle: 'Great project name!',
    },
  ];

  return (
    <DashSectionWrapper>
      <DashboardCards cards={cardsData} />

      <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        <Card className='xl:col-span-2'>
          <CardHeader className='flex flex-row items-center'>
            <div className='grid gap-2'>
              <CardTitle>Tickets</CardTitle>
              <CardDescription>
                Active tickets for your great project:{' '}
                {noProject ? '' : projects[0].projectName}
              </CardDescription>
            </div>
            <Button asChild size='sm' className='ml-auto gap-1'>
              <Link href='/tickets'>
                View All
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <TicketList
              lite={true}
              tickets={tickets}
              projectName={noProject ? '' : projects[0].projectName}
            />
          </CardContent>
        </Card>
        <DashboardMessage />
      </div>
    </DashSectionWrapper>
  );
};

export default DashboardMain;

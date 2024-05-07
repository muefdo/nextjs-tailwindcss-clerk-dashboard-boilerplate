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
import { useToast } from '../ui/use-toast';
import NoThingHere from '../ui/no-thing';

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
  const { toast } = useToast();

  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === 'active' || ticket.status === 'inprogress'
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        const data = await response.json();
        setLoadingProjects(false);
        setProjects(data);
        console.log('projects:', data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0 && !loadingProjects) {
      router.push('/tickets');
      toast({
        title: 'You need to create project to get started!',
        description: <div>Lets create a project</div>,
      });
    }
  }, [projects, loadingProjects]);

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
            //   router.push('/tickets');
            toast({
              title: 'Create a ticket to get started!',
              description: <div>Lets create a ticket</div>,
            });
          }
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [projects]);

  const noTickets = tickets.length === 0;
  const noProject = projects.length === 0;

  const cardsData = [
    {
      index: 1,
      value: loadingTickets
        ? null
        : noTickets
        ? '0'
        : tickets.filter((ticket) => ticket.status === 'completed').length +
          tickets.filter((ticket) => ticket.status === 'archived').length,
      subtitle: 'Total completed tickets!',
    },
    {
      index: 2,
      value: loadingTickets
        ? null
        : noTickets
        ? '0'
        : tickets.filter((ticket) => ticket.status === 'inprogress').length +
          tickets.filter((ticket) => ticket.status === 'active').length,
      subtitle: 'Total active tickets!',
    },
    {
      index: 3,
      value: loadingTickets
        ? null
        : noTickets
        ? '0'
        : tickets.length.toString(),
      subtitle: 'Total tickets!',
    },
    {
      index: 4,
      value: loadingProjects
        ? null
        : noProject
        ? 'No Project'
        : projects[0]?.projectName || 'No Project',
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
                {noProject
                  ? ''
                  : 'Active tickets for your great project: ' +
                    projects[0].projectName}
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
            {loadingTickets ? (
              <TicketList
                lite={true}
                tickets={filteredTickets}
                projectName={noProject ? '' : projects[0].projectName}
              />
            ) : noTickets ? (
              <div>
                <div className='flex flex-1 items-center w-full h-full py-12 justify-center rounded-lg border border-dashed shadow-sm'>
                  <div className='flex flex-col items-center gap-1 text-center'>
                    <h3 className='text-2xl font-bold tracking-tight'>
                      You have no tickets
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      You can start building as soon as you add a ticket.
                    </p>
                    <a href='/createTicket' className='mt-4'>
                      <Button>Create Ticket</Button>
                    </a>
                  </div>
                </div>
              </div>
            ) : filteredTickets.length > 0 ? (
              <TicketList
                lite={true}
                tickets={filteredTickets}
                projectName={noProject ? '' : projects[0].projectName}
              />
            ) : (
              <div>
                <div className='flex flex-1 items-center w-full h-full py-12 justify-center rounded-lg border border-dashed shadow-sm'>
                  <div className='flex flex-col items-center gap-1 text-center'>
                    <h3 className='text-2xl font-bold tracking-tight'>
                      You have no active tickets
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      You can start track your tickets as soon as you add a
                      ticket.
                    </p>
                    <a href='/createTicket' className='mt-4'>
                      <Button>Create Ticket</Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <DashboardMessage />
      </div>
    </DashSectionWrapper>
  );
};

export default DashboardMain;
function asd() {
  throw new Error('Function not implemented.');
}

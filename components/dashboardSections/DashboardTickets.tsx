import React, { useEffect, useState } from 'react';
import DashSectionWrapper from '../DashSectionWrapper';
import DashTitle from '../ui/dash-title';
import NoThingHere from '../ui/no-thing';
import { VscLoading } from 'react-icons/vsc';

import TicketList from '../TicketList';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

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

const DashboardTickets = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
  const [loadingTickets, setLoadingTickets] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        const data = await response.json();
        setLoadingProjects(false);
        setProjects(data);
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
          console.log('DATATİCKET', data);
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [projects]);

  const noProject = projects[0] === undefined || projects[0] === null;
  const noTickets = tickets[0] === undefined || tickets[0] === null;

  console.log(noProject, noTickets);
  console.log('TİCEKTTSS', tickets);
  console.log('PrJECETTOO', projects);

  return (
    <DashSectionWrapper>
      <DashTitle title='Tickets' />
      {!noProject && !noTickets && (
        <Button asChild size='sm' className=' mr-auto gap-1'>
          <Link href='/createTicket'>
            Create New Ticket
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Button>
      )}
      <p className='md:hidden text-xs text-gray-500'>
        Some details are hidden on mobile. For more details, please visiton your
        computer.{' '}
      </p>
      {loadingProjects && loadingTickets ? (
        <div className='h-full flex justify-center items-center text-7xl '>
          <VscLoading className='animate-spin' />
        </div>
      ) : (
        <>
          {projects.length === 0 ? (
            <NoThingHere
              href='/createProject'
              name='project'
              subtitle='Create a project to get started!'
              title='No Project Found'
            />
          ) : loadingTickets ? (
            <TicketList
              lite={false}
              tickets={tickets}
              projectName={projects[0].projectName}
            />
          ) : tickets.length > 0 ? (
            <TicketList
              lite={false}
              tickets={tickets}
              projectName={projects[0].projectName}
            />
          ) : (
            <NoThingHere
              href='/createTicket'
              name='ticket'
              subtitle='Create a ticket to get started!'
              title='No Tickets Found'
            />
          )}
        </>
      )}
    </DashSectionWrapper>
  );
};

export default DashboardTickets;

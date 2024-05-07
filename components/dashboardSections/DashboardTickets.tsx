import React, { useEffect, useState } from 'react';
import DashSectionWrapper from '../DashSectionWrapper';
import DashTitle from '../ui/dash-title';
import NoThingHere from '../ui/no-thing';
import { VscLoading } from 'react-icons/vsc';

import TicketList from '../TicketList';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

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
  const [filter, setFilter] = useState<string>(''); // State to store the filter option


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
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [projects]);

  const noProject = projects[0] === undefined || projects[0] === null;
  const noTickets = tickets[0] === undefined || tickets[0] === null;


  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const filteredTickets = filter
    ? tickets.filter((ticket) => ticket.status === filter)
    : tickets.filter((ticket) => ticket.status !== 'archived');

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
      {!noProject && !noTickets && (
        <div className='flex gap-2 w-11/12 '>
          <Select value={filter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-5/12">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup >
                <SelectLabel>All</SelectLabel>
                <SelectItem value='inprogress'>In Progress</SelectItem>
                <SelectItem value='active'>Active</SelectItem>
                <SelectItem value='completed'>Completed</SelectItem>
                <SelectItem value='archived'>Archived</SelectItem>  
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button onClick={() => setFilter("")}>Reset Filter</Button>

        </div>
      )}
      <p className='md:hidden text-xs text-gray-500'>
        Some details are hidden on mobile. For more details, please visit on your
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
              tickets={filteredTickets}
              projectName={projects[0].projectName}
            />
          ) : filteredTickets.length > 0 ? (
            <TicketList
              lite={false}
              tickets={filteredTickets}
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

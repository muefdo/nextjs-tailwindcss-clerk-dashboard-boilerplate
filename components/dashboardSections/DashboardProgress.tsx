'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import DashSectionWrapper from '../DashSectionWrapper';
import { VscLoading } from 'react-icons/vsc';
import DashTitle from '../ui/dash-title';
import ProgressCard from '../ui/ProgressCard';
import DashboardCards from '../ui/DashboardCards';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

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

const DashboardProgress = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
  const [loadingTickets, setLoadingTickets] = useState<boolean>(true);
  const router = useRouter();
  const { toast } = useToast();

  const filteredTickets = tickets.filter((ticket) => ticket.status === 'active');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        const data = await response.json();
        setLoadingProjects(false);
        setProjects(data);
        console.log('projects:', data);

        if (data.length === 0) {
          router.push('/tickets');
          toast({
            title: 'You need to create project to get started!',
            description: <div>Lets create a project</div>,
          });
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
      value: loadingTickets ? null : noTickets ? "0" : tickets.filter((ticket) => ticket.status === "completed").length.toString(),
      status: 'completed',
      subtitle: 'Total completed tickets!',
    },
    {
      index: 2,
      value: loadingTickets ? null : noTickets ? "0" : tickets.filter((ticket) => ticket.status === "inprogress").length.toString(),
      status: 'In progress',
      subtitle: 'In progress tickets!',
    }, 
    {
      index: 3,
      value: loadingTickets ? null : noTickets ? "0" : tickets.filter((ticket) => ticket.status === "active").length.toString(),
      status: 'active',
      subtitle: 'Total active tickets!',
    },
    {
      index: 4,
      value: loadingTickets ? null : noTickets ? "0" : tickets.length.toString(),
      status: 'All',
      subtitle: 'Total tickets!',
    },

  ];

  return (
    <DashSectionWrapper>
      <DashTitle title='Progress' />
      <ProgressCard cards={cardsData} totalTickets={tickets.length} />

    </DashSectionWrapper>
  );
};

export default DashboardProgress;

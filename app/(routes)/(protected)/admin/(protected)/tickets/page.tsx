'use client';

import React, { useEffect, useState } from 'react';
import DashSectionWrapper from '@/components/DashSectionWrapper';
import DashTitle from '@/components/ui/dash-title';
import NoThingHere from '@/components/ui/no-thing';
import { VscLoading } from 'react-icons/vsc';
import Link from 'next/link';
import { ArrowUpRight, ChevronUp, ChevronsUp, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Project {
  projectName: string;
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
  tickets: Ticket[];
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

const TicketsAdmin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>(); // State to store the filter option

  const router = useRouter();

  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/admin/tickets');
        const data = await response.json();
        setLoading(false);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleButtonClick = (ticketId: string, projectName: string) => {
    router.push(
      `/admin/tickets/details?ticketId=${ticketId}&projectName=${projectName}`
    );
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const filteredProjects = filter
    ? projects.filter((project) =>
        project.tickets.some((ticket) => ticket.status === filter)
      )
    : projects;

  const sortedProjects = filteredProjects.map((project) => ({
    ...project,
    tickets: project.tickets
      .filter((ticket) => (filter ? ticket.status === filter : true)) // If filter is empty, show all tickets
      .sort(
        (a: Ticket, b: Ticket) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
  }));

  return (
    <DashSectionWrapper>
      <DashTitle title='All Tickets' />

      <div className='flex gap-2 w-11/12'>
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className='w-5/12'>
            <SelectValue placeholder='Select Status' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='inprogress'>In Progress</SelectItem>
              <SelectItem value='active'>Active</SelectItem>
              <SelectItem value='completed'>Completed</SelectItem>
              <SelectItem value='archived'>Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={() => setFilter('')}>Reset Filter</Button>
      </div>
      <p className='md:hidden text-xs text-gray-500'>
        Some details are hidden on mobile. For more details, please visit on
        your computer.
      </p>
      {loading ? (
        <div className='h-full flex justify-center items-center text-7xl'>
          <VscLoading className='animate-spin' />
        </div>
      ) : (
        <>
          {filteredProjects.length === 0 ? (
            <div className='h-96'>
              <NoThingHere
                href='/createProject'
                name='project'
                subtitle='Create a project to get started!'
                title='No Project Found'
              />
            </div>
          ) : (
            <Card className='xl:col-span-2'>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Actions</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Categories</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedProjects.map((project) =>
                      project.tickets.map((ticket, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Button
                              size='sm'
                              className='mr-2'
                              onClick={() =>
                                handleButtonClick(
                                  ticket.id,
                                  project.projectName
                                )
                              }
                            >
                              <ArrowUpRight className='h-4 w-4' />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <div className='font-medium overflow-ellipsis overflow-hidden'>
                              {project.projectName?.trim().substring(0, 30)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className='font-medium overflow-ellipsis overflow-hidden'>
                              {ticket.title?.trim().substring(0, 30)}
                            </div>
                          </TableCell>
                          <TableCell>
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
                          <TableCell>
                            {ticket.category
                              .slice(0, 3)
                              .map((category, index) => (
                                <Badge
                                  key={index}
                                  className='text-xs'
                                  variant='outline'
                                >
                                  {category}
                                </Badge>
                              ))}
                          </TableCell>
                          <TableCell>
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
                          <TableCell className='text-right'>
                            {formattedDate(ticket.createdAt)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </DashSectionWrapper>
  );
};

export default TicketsAdmin;

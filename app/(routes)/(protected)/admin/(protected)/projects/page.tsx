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

interface User {
  email?: string | null;
  userType?: string | null;
  projects: Project[];
}

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

const ProjectsAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);
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
        const response = await fetch('/api/admin/projects');
        const data = await response.json();
        setLoading(false);
        setUsers(data);
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

  return (
    <DashSectionWrapper>
      <DashTitle title='Users&Projects' />

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
          {users.length === 0 ? (
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
                      <TableHead>User Mail</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Tech Stack</TableHead>
                      <TableHead>User Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) =>
                      user.projects.map((project, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Button
                              size='sm'
                              className='mr-2'
                              onClick={() =>
                                handleButtonClick(
                                  project.id,
                                  project.projectName
                                )
                              }
                            >
                              <ArrowUpRight className='h-4 w-4' />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <div className='font-medium overflow-ellipsis overflow-hidden'>
                              {user.email?.trim().substring(0, 30)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className='font-medium overflow-ellipsis overflow-hidden'>
                              {project.projectName?.trim().substring(0, 30)}
                            </div>
                          </TableCell>

                          <TableCell>
                            {project.techStack
                              .slice(0, 3)
                              .map((techStack, index) => (
                                <Badge
                                  key={index}
                                  className='text-xs'
                                  variant='outline'
                                >
                                  {techStack}
                                </Badge>
                              ))}
                          </TableCell>
                          <TableCell>
                            <div className='font-medium overflow-ellipsis overflow-hidden'>
                              {user.userType !== 'free' ? (
                                <Badge>{user.userType}</Badge>
                              ) : (
                                <p>{user.userType}</p>
                              )}
                            </div>
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

export default ProjectsAdmin;

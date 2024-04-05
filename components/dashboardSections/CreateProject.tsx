import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react';
import DashSectionWrapper from '../DashSectionWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { set, useForm } from 'react-hook-form';
import { Textarea } from '../ui/textarea';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import DashTitle from '../ui/dash-title';
import { useRouter } from 'next/navigation';

const TechInfo = [
  {
    id: 'reactjs',
    label: 'ReactJS',
  },
  {
    id: 'nextjs',
    label: 'NextJS',
  },
  {
    id: 'tailwindcss',
    label: 'TailwindCSS',
  },
  {
    id: 'mui',
    label: 'MaterialUI',
  },
  {
    id: 'nodejs',
    label: 'NodeJS',
  },
  {
    id: 'expressjs',
    label: 'ExpressJS',
  },
  {
    id: 'postgres',
    label: 'PostgresSQL',
  },
  {
    id: 'mysql',
    label: 'MySQL',
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
  },
  {
    id: 'firebase',
    label: 'Firebase',
  },
] as const;

const FormSchema = z.object({
  projectName: z.string().nonempty('Project name is required.'),
  projectInfo: z.string().nonempty('Project Info   is required.'),
  projectUrl: z.string().optional(),
  techStack: z.array(z.string()).nonempty('Tech Stack Info is required.'),
});

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
const CreateProject = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      techStack: [],
    },
  });
  const router = useRouter();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length > 0) {
    router.push('/tickets');
    toast({
      title: 'Nooo! You have a project already!',
      description: <div>You have not access to create another project!</div>,
    });
  }

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    toast({
      title: 'Loading...',
      description: (
        <div>Your request is currently being processed. Please wait</div>
      ),
    });

    try {
      const { projectName, projectInfo, projectUrl, techStack } = data;

      const response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectName,
          projectInfo,
          projectUrl,
          techStack,
        }),
      });

      router.push('/tickets');
      setLoading(false);

      toast({
        title: 'Your project has been created!',
        description: <div>Welcome to bradiGO</div>,
      });
    } catch (error) {
      toast({
        title: 'Error!',
        description: (
          <div>We&apos;re experiencing an error. Please try again later.</div>
        ),
      });
    }
  };

  //   console.log(form.watch());

  return (
    <DashSectionWrapper>
      <DashTitle title='Create Project' />
      <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='gap-12 md:gap-24 w-11/12 md:w-6/12 my-6'
          >
            <div className='my-6'>
              <FormField
                control={form.control}
                name='projectName'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel className='text-base'>Project Name</FormLabel>
                      <FormDescription>Your project name</FormDescription>
                      <Input {...form.register('projectName')} />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='projectUrl'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel className='text-base'>Project Url</FormLabel>
                      <FormDescription>
                        Write the project link if exists.
                      </FormDescription>
                      <Input {...form.register('projectUrl')} />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='projectInfo'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel className='text-base'>Project Info</FormLabel>
                      <FormDescription>
                        Explain your project in detail.
                      </FormDescription>

                      <Textarea
                        {...form.register('projectInfo')}
                        className='w-full p-2 border rounded-md'
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='techStack'
              render={() => (
                <FormItem>
                  <div className='mb-4'>
                    <FormLabel className='text-base'>Tech Stack</FormLabel>
                    <FormDescription>Select your tech stack</FormDescription>
                  </div>
                  {TechInfo.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='techStack'
                      render={({
                        field,
                      }: {
                        field: { value: any; onChange: Function };
                      }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        item.id,
                                      ])
                                    : field.onChange(
                                        (field.value || []).filter(
                                          (value: any) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className='text-sm font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col mt-6 gap-3'>
              <Button type='submit' disabled={loading}>
                Create
              </Button>
              <Button
                variant='outline'
                onClick={() => router.push('/tickets')}
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </DashSectionWrapper>
  );
};

export default CreateProject;

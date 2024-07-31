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
import Link from 'next/link';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
  },
  {
    id: 'backend',
    label: 'Backend Development',
  },
  {
    id: 'fullstack',
    label: 'Fullstack Development',
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
  },
  {
    id: 'responsive',
    label: 'Responsive Design',
  },
  {
    id: 'wordpress',
    label: 'Wordpress Development',
  },
  {
    id: 'fromscratch',
    label: 'Web project from scratch',
  },
  {
    id: 'mobileapp',
    label: 'Mobile app with React Native',
  },
] as const;

const FormSchema = z.object({
  title: z.string().nonempty('Title is required.'),
  message: z.string().nonempty('messages is required.'),
  priority: z.string().optional(),
  category: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

interface Project {
  id: string;
  projectName: string;
  // projectInfo?: string | null;
  // techStack: string[];
  // projectUrl?: string | null;
  // githubUrl?: string | null;
  // completedTickets?: number | null;
  // tickets: Ticket[];
  // createdAt: Date;
  // updatedAt: Date;
  // userId?: string | null;
}

const CreateTicket = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: [],
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

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    toast({
      title: 'Loading...',
      description: (
        <div>Your request is currently being processed. Please wait</div>
      ),
    });

    try {
      if (projects[0]?.projectName) {
        const projectId = projects[0].id;
        const { title, message, category, priority } = data;
        const messages: string[] = [];
        messages[0] = message; 
        const response = await fetch('/api/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            messages: messages,
            priority,
            category,
            projectId,
          }),
        });
      }

      router.push('/tickets');
      setLoading(false);
      toast({
        title: 'Your ticket has been created!',
        description: <div>We will be start working</div>,
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

  return (
    <DashSectionWrapper>
      <DashTitle title='Create Ticket' />
      <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='gap-12 md:gap-24 w-11/12 md:w-6/12 my-6'
          >
            <div className='my-6'>
              <div className='text-2xl font-semibold mb-6'>
                {projects[0]?.projectName}
              </div>
              <FormField
                control={form.control}
                name='title'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel className='text-base'>Title</FormLabel>
                      <FormDescription>Ticket title</FormDescription>
                      <Input {...form.register('title')} />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={() => (
                  <FormItem>
                    <div className='mb-4'>
                      <FormLabel className='text-base'>Your Message</FormLabel>
                      <FormDescription>
                        Explain your ticket requirements in detail.
                      </FormDescription>

                      <Textarea
                        {...form.register('message')}
                        className='w-full p-2 border rounded-md'
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='priority'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a priority level' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='low'>Low</SelectItem>
                        <SelectItem value='medium'>Medium</SelectItem>
                        <SelectItem value='high'>High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>You can leave blank.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='category'
              render={() => (
                <FormItem>
                  <div className='mb-4'>
                    <FormLabel className='text-base'>Dev. Category</FormLabel>
                    <FormDescription>
                      What kind of a development you need
                    </FormDescription>
                  </div>
                  {categories.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='category'
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
                disabled={loading}
                onClick={() => router.push('/tickets')}
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

export default CreateTicket;

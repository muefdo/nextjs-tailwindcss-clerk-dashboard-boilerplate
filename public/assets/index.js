import {
  Bolt,
  Home,
  LineChart,
  Package,
  Pickaxe,
  ShoppingCart,
  TicketCheck,
  Users,
  Headset,
} from 'lucide-react';

export const sections = [
  {
    href: '/dashboard',
    icon: <Home className='h-4 w-4' />,
    label: 'Dashboard',
  },
  {
    href: '/tickets',
    icon: <Package className='h-4 w-4' />,
    label: 'Tickets',
  },
  {
    href: '/progress',
    icon: <Pickaxe className='h-4 w-4' />,
    label: 'Progress',
  },
  {
    href: '/schedule-meeting',
    icon: <Headset className='h-4 w-4' />,
    label: 'Schedule Meeting',
  },
  {
    href: '/settings',
    icon: <Bolt className='h-4 w-4' />,
    label: 'Settings',
  },
];

export const sectionsAdmin = [
  {
    href: '/admin/messages',
    icon: <Home className='h-4 w-4' />,
    label: 'Messages',
  },
  {
    href: '/admin/tickets',
    icon: <Package className='h-4 w-4' />,
    label: 'Tickets',
  },
  {
    href: '/admin/projects',
    icon: <Pickaxe className='h-4 w-4' />,
    label: 'Projects',
  },
  {
    href: '/admin/users',
    icon: <Headset className='h-4 w-4' />,
    label: 'Users',
  },
];

export const BrandDiff = [
  {
    title: 'Freelancers',
    data: [
      'Low Quality Deliverables',
      'Time-Consuming Project Management',
      'Inconsistent Results',
      'Limited Expertise in Specific Technologies',
      'No Dedicated Support Channels',
    ],
  },
  {
    title: 'go.bradi.tech',
    data: [
      'High-Quality Deliverables',
      'Efficient Project Management and Coordination',
      'Consistent and Reliable Results',
      'Access to a Team of Skilled Professionals',
      'Competitive Pricing',
      'Adaptability to Requirements',
      'Easy Scalability ',
      'No Need to Manage and Maintain an In-House Team',
    ],
  },
  {
    title: 'Owning a Team',
    data: [
      'High Operational Costs',
      'Hard to Find Talent',
      'Limited Flexibility in Team Size',
      'Huge Ongoing Expenses',
      'Responsibility for Team Performance',
    ],
  },
];

export const PricingPlans = [
  {
    type: 'Pro',
    value: '700',
    desc: 'One feature at a time. Pause or cancel anytime',
    shortDesc: 'One feature at a time',
    title: 'Freelancers',
    data: [
      'One request at a time',
      'Average 48-hour delivery',
      'Turn around in days, not weeks',
      'Pay with ACH or credit card',
      'Pause or cancel anytime',
    ],
  },
  {
    type: 'Super',
    value: '1500',
    desc: 'Full app development. No hidden fees. Pause or cancel anytime. ',
    shortDesc: 'Full app development.',
    title: 'go.bradi.tech',
    data: [
      'Complete app development',
      'Average 1-month delivery',
      'Unlimited features',
      'Easy credit-card payments',
      'Pause or cancel anytime',
    ],
  },
  {
    type: 'Enterprise',
    value: '4500',
    desc: 'Full app development. No hidden fees. Pause or cancel anytime. ',
    shortDesc: 'Full app development.',
    title: 'go.bradi.tech',
    data: [
      'Complete app development',
      'Average 1-month delivery',
      'Unlimited features',
      'Easy credit-card payments',
      'Pause or cancel anytime',
    ],
  },
];

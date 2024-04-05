import {
  Bolt,
  Home,
  LineChart,
  Package,
  Pickaxe,
  ShoppingCart,
  TicketCheck,
  Users,
} from "lucide-react";

export const sections = [
  {
    href: "/dashboard",
    icon: <Home className="h-4 w-4" />,
    label: "Dashboard",
  },
  {
    href: "/tickets",
    icon: <Package className="h-4 w-4" />,
    label: "Tickets",
  },
  {
    href: "/progress",
    icon: <Pickaxe className="h-4 w-4" />,
    label: "Progress",
  },
  {
    href: "/settings",
    icon: <Bolt className="h-4 w-4" />,
    label: "Settings",
  },
];



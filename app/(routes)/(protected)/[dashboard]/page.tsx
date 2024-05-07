'use client';

import DashMainWrapper from '@/components/DashMainWrapper';
import DashWrapper from '@/components/DashWrapper';
import Sidebar from '@/components/Sidebar';
import DashboardMain from '@/components/dashboardSections/DashboardMain';
import React from 'react';
import { usePathname } from 'next/navigation';
import DashboardTickets from '@/components/dashboardSections/DashboardTickets';
import DashboardProgress from '@/components/dashboardSections/DashboardProgress';
import CreateProject from '@/components/dashboardSections/CreateProject';
import CreateTicket from '@/components/dashboardSections/CreateTicket';
import TicketDetails from '@/components/dashboardSections/TicketDetails';
import SettingsPage from '@/components/dashboardSections/SettingsPage';
import DashboardScheduler from '@/components/dashboardSections/DashboardScheduler';

const Dashboard = () => {
  const pathname = usePathname();

  return (
    <>
      <DashWrapper>
        <Sidebar />
        <DashMainWrapper>
          {pathname === '/dashboard' && <DashboardMain />}
          {pathname === '/tickets' && <DashboardTickets />}
          {pathname === '/progress' && <DashboardProgress />}
          {pathname === '/settings' && <SettingsPage />}
          {pathname === '/createTicket' && <CreateTicket />}
          {pathname === '/createProject' && <CreateProject />}
          {pathname === '/ticketDetails' && <TicketDetails />}
          {pathname === '/schedule-meeting' && <DashboardScheduler />}
        </DashMainWrapper>
      </DashWrapper>
    </>
  );
};

export default Dashboard;

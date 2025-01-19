import { ReactNode } from 'react';
import '../globals.css';
import DashboardNavBar from '@/components/dashboardNavBar/DashboardNavBar';

interface RecruitDashboardLayoutProps {
  children: ReactNode;
}

const RecruitDashboardLayout = ({ children }: RecruitDashboardLayoutProps) => {
  return (
    <div>
      <DashboardNavBar />
      <main>{children}</main>
    </div>
  );
};

export default RecruitDashboardLayout;

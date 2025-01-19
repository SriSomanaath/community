import { ReactNode } from 'react';
import '../globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div >
      <NavBar />
      <div >
        <main className=''>{children}</main>
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

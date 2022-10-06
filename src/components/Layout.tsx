import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='flex justify-between bg-slate-400 px-8 py-4'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

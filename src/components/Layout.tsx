import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='flex justify-around bg-base-100 px-8 py-4'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

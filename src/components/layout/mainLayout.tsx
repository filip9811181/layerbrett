'use client';
import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { usePathname } from 'next/navigation';

export const MainLayout = ({ children }: any) => {
  const pathname = usePathname();

  // Add all the routes where you want to hide the footer
  const hideFooterRoutes = ['/staking', '/privacy', '/terms'];

  const hideFooter = hideFooterRoutes.includes(pathname);

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};

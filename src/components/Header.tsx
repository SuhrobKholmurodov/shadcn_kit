'use client';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from './mode-toggle';
import { LanguageSelector } from './LanguageSelector';

export default function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('Dashboard');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setPageTitle('Dashboard');
    } else {
      setPageTitle(path.substring(1).charAt(0).toUpperCase() + path.substring(2));
    }

    if (path === '/projects' && location.search) {
      const params = new URLSearchParams(location.search);
      const projectId = params.get('id');
      if (projectId) {
        setPageTitle(
          `Project: ${projectId
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}`,
        );
      }
    }

    if (path === '/tasks' && location.search) {
      const params = new URLSearchParams(location.search);
      const filter = params.get('filter');
      if (filter) {
        setPageTitle(
          `Tasks: ${filter
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}`,
        );
      }
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}

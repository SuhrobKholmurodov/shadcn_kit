'use client';

import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronsUpDown,
  Search,
  ChevronDown,
  BookOpenText,
  GalleryHorizontalEnd,
  Parentheses,
  Braces,
  FileJson,
  GitCompare,
  Code,
} from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  navMain: [
    {
      title: 'JS Tutorial',
      icon: BookOpenText,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS Versions',
      icon: GalleryHorizontalEnd,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS Objects',
      icon: Parentheses,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS Functions',
      icon: Braces,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS Classes',
      icon: FileJson,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS Async',
      icon: GitCompare,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
    {
      title: 'JS HTML DOM',
      icon: Code,
      url: '/tutorial',
      items: [
        {
          title: 'Content',
          url: '/tutorial?id=content',
        },
        {
          title: 'JS introduction',
          url: '/tutorial?id=introduction',
        },
        {
          title: 'JS Variables',
          url: '/tutorial?id=variables',
        },
        {
          title: 'JS Data Types',
          url: '/tutorial?id=marketing',
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Web App Redesign',
      description: 'Redesign the company website',
      progress: 75,
      url: '/tutorial?id=web-app',
    },
    {
      title: 'Mobile App Development',
      description: 'Build a new mobile app',
      progress: 40,
      url: '/tutorial?id=mobile-app',
    },
    {
      title: 'Marketing Campaign',
      description: 'Q3 marketing campaign',
      progress: 90,
      url: '/tutorial?id=marketing',
    },
    {
      title: 'Product Launch',
      description: 'Launch new product line',
      progress: 20,
      url: '/tutorial?id=product-launch',
    },
    {
      title: 'Customer Research',
      description: 'User interviews and surveys',
      progress: 60,
      url: '/tutorial?id=customer-research',
    },
  ],
};

export default function AppSidebar() {
  const location = useLocation();
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .sidebar-content::-webkit-scrollbar {
        width: 6px;
      }
  
      .sidebar-content::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-color);
        border-radius: 4px;
      }
  
      .sidebar-content::-webkit-scrollbar-track {
        background: transparent;
      }
  
      .sidebar-content {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-color) transparent;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  React.useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.style.setProperty('--scrollbar-color', isDark ? '#4B5563' : '#D1D5DB');
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="transition-all duration-200 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 border border-sidebar-border">
                    <AvatarImage src={'/placeholder.svg'} alt={'Suhrob'} />
                  </Avatar>
                  <div className="ml-2 flex flex-col text-sm font-medium leading-none">
                    <span className="text-primary">Suhrob</span>
                  </div>
                  <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-background pl-8 text-sm"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="sidebar-content">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive =
                  location.pathname === item.url ||
                  (item.items &&
                    item.items.some(
                      (subItem) => location.pathname + location.search === subItem.url,
                    ));

                return item.items ? (
                  <Collapsible key={item.title} className="w-full">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full hover:cursor-pointer justify-between group">
                          <div className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem
                              className={
                                location.pathname + location.search === subItem.url
                                  ? 'active-class'
                                  : ''
                              }
                              key={subItem.title}
                            >
                              <SidebarMenuSubButton
                                asChild
                                isActive={location.pathname + location.search === subItem.url}
                              >
                                <Link to={subItem.url} className="flex w-full justify-between">
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.url} className="flex justify-between">
                        <div className="flex items-center">
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  BarChart3,
  Calendar,
  ChevronsUpDown,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users2,
  FolderKanban,
  CheckSquare,
  PlusCircle,
  Search,
  User,
  LogOut,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Data object for the sidebar
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  teams: [
    { id: "1", name: "Acme Inc", role: "Admin" },
    { id: "2", name: "Globex Corp", role: "Member" },
    { id: "3", name: "Stark Industries", role: "Owner" },
  ],
  navMain: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      url: "/analytics",
    },
    {
      title: "Projects",
      icon: FolderKanban,
      url: "/projects",
      items: [
        {
          title: "Web App Redesign",
          url: "/projects?id=web-app",
        },
        {
          title: "Mobile App Development",
          url: "/projects?id=mobile-app",
        },
        {
          title: "Marketing Campaign",
          url: "/projects?id=marketing",
        },
      ],
    },
    {
      title: "Team",
      icon: Users2,
      url: "/team",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      url: "/messages",
      badge: "5",
    },
    {
      title: "Tasks",
      icon: CheckSquare,
      url: "/tasks",
      items: [
        {
          title: "To Do",
          url: "/tasks?filter=todo",
          badge: "12",
        },
        {
          title: "In Progress",
          url: "/tasks?filter=in-progress",
          badge: "3",
        },
        {
          title: "Completed",
          url: "/tasks?filter=completed",
        },
      ],
    },
    {
      title: "Calendar",
      icon: Calendar,
      url: "/calendar",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/settings",
    },
  ],
  projects: [
    {
      title: "Web App Redesign",
      description: "Redesign the company website",
      progress: 75,
      url: "/projects?id=web-app",
    },
    {
      title: "Mobile App Development",
      description: "Build a new mobile app",
      progress: 40,
      url: "/projects?id=mobile-app",
    },
    {
      title: "Marketing Campaign",
      description: "Q3 marketing campaign",
      progress: 90,
      url: "/projects?id=marketing",
    },
    {
      title: "Product Launch",
      description: "Launch new product line",
      progress: 20,
      url: "/projects?id=product-launch",
    },
    {
      title: "Customer Research",
      description: "User interviews and surveys",
      progress: 60,
      url: "/projects?id=customer-research",
    },
  ],
}

export default function AppSidebar() {
  const location = useLocation()
  // const { state } = useSidebar()
  const [selectedTeam, setSelectedTeam] = React.useState(data.teams[0])

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
                    <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
                    <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">{selectedTeam.name}</span>
                    <span className="text-xs text-muted-foreground">{selectedTeam.role}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[--radix-dropdown-menu-trigger-width]">
                <DropdownMenuLabel>Teams</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {data.teams.map((team) => (
                  <DropdownMenuItem
                    key={team.id}
                    className="flex items-center justify-between"
                    onSelect={() => setSelectedTeam(team)}
                  >
                    <span>{team.name}</span>
                    {team.id === selectedTeam.id && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 text-sm" />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive =
                  location.pathname === item.url ||
                  (item.items && item.items.some((subItem) => location.pathname + location.search === subItem.url))

                return item.items ? (
                  <Collapsible key={item.title} className="w-full">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between group">
                          <div className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          {/* {item.badge && (
                            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-2 text-xs text-primary-foreground">
                              {item.badge}
                            </span>
                          )} */}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={location.pathname + location.search === subItem.url}
                              >
                                <Link to={subItem.url} className="flex w-full justify-between">
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-2 text-xs text-primary-foreground">
                                      {subItem.badge}
                                    </span>
                                  )}
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
                        {item.badge && (
                          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-2 text-xs text-primary-foreground">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <span>Recent Projects</span>
            <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
              <PlusCircle className="h-4 w-4" />
              <span className="sr-only">Add project</span>
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.projects.slice(0, 3).map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild isActive={location.pathname + location.search === project.url}>
                    <Link to={project.url} className="flex flex-col items-start gap-1">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">{project.title}</span>
                        <span className="text-xs text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="w-full">
                        <div className="h-1.5 w-full rounded-full bg-muted">
                          <div
                            className="h-1.5 rounded-full bg-primary transition-all duration-300 ease-in-out"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/projects" className="text-muted-foreground hover:text-foreground">
                    View all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-6 w-6 border border-sidebar-border">
                    <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
                    <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">{data.user.name}</span>
                    <span className="text-xs text-muted-foreground">{data.user.email}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[--radix-dropdown-menu-trigger-width]">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

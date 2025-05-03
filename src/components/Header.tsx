"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Bell} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const location = useLocation()
  const [pageTitle, setPageTitle] = useState("Dashboard")

  useEffect(() => {
    // Set page title based on current route
    const path = location.pathname
    if (path === "/") {
      setPageTitle("Dashboard")
    } else {
      setPageTitle(path.substring(1).charAt(0).toUpperCase() + path.substring(2))
    }

    // Handle query params for projects
    if (path === "/projects" && location.search) {
      const params = new URLSearchParams(location.search)
      const projectId = params.get("id")
      if (projectId) {
        setPageTitle(
          `Project: ${projectId
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}`,
        )
      }
    }

    // Handle query params for tasks
    if (path === "/tasks" && location.search) {
      const params = new URLSearchParams(location.search)
      const filter = params.get("filter")
      if (filter) {
        setPageTitle(
          `Tasks: ${filter
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}`,
        )
      }
    }
  }, [location])

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-primary"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        <ModeToggle />
        {/* <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button> */}
      </div>
    </header>
  )
}

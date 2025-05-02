import { useLocation } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample project data
const projects = [
  {
    id: "web-app",
    title: "Web App Redesign",
    description: "Redesign the company website with a modern UI/UX approach",
    progress: 75,
    team: [
      { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Sarah Miller", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "David Chen", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    dueDate: "2023-12-15",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Build a cross-platform mobile application for our customers",
    progress: 40,
    team: [
      { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "James Brown", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    dueDate: "2024-02-28",
  },
  {
    id: "marketing",
    title: "Marketing Campaign",
    description: "Q3 marketing campaign for product launch",
    progress: 90,
    team: [
      { name: "Olivia Davis", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Noah Smith", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Sophia Martinez", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    dueDate: "2023-09-30",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    description: "Launch new product line with press release and event",
    progress: 20,
    team: [
      { name: "William Taylor", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Isabella Thomas", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    dueDate: "2024-04-15",
  },
  {
    id: "customer-research",
    title: "Customer Research",
    description: "Conduct user interviews and surveys for product feedback",
    progress: 60,
    team: [
      { name: "Benjamin Harris", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Mia Jackson", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    dueDate: "2023-11-10",
  },
]

export default function Projects() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const projectId = params.get("id")

  // If a specific project is selected, show its details
  if (projectId) {
    const project = projects.find((p) => p.id === projectId)

    if (!project) {
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Project Not Found</h2>
          <p>The requested project could not be found.</p>
          <Button asChild>
            <a href="/projects">Back to Projects</a>
          </Button>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
          <Button>Edit Project</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Team Members</h4>
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <Avatar key={i} className="border-2 border-background">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 ml-2">
                  +
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Due Date</h4>
              <p>
                {new Date(project.dueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View Tasks</Button>
            <Button>Mark as Complete</Button>
          </CardFooter>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Avatar className="mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Updated project files</p>
                      <p className="text-xs text-muted-foreground">
                        {i} hour{i > 1 ? "s" : ""} ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Tasks Completed</span>
                  <span className="text-sm font-medium">24/36</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Hours Logged</span>
                  <span className="text-sm font-medium">164h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Budget Used</span>
                  <span className="text-sm font-medium">$12,450/$20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Team Members</span>
                  <span className="text-sm font-medium">{project.team.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Otherwise, show all projects
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Button>New Project</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <Avatar key={i} className="border-2 border-background h-7 w-7">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {project.team.length > 3 && (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Due {new Date(project.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <a href={`/projects?id=${project.id}`}>View Details</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

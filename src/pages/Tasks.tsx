import { useLocation } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Plus } from "lucide-react"

// Sample tasks data
const tasks = {
  todo: [
    {
      id: 1,
      title: "Update user dashboard design",
      description: "Implement the new design for the user dashboard",
      priority: "high",
      dueDate: "2023-10-15",
      assignee: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Web App Redesign",
    },
    {
      id: 2,
      title: "Fix navigation bug on mobile",
      description: "The navigation menu doesn't work correctly on small screens",
      priority: "medium",
      dueDate: "2023-10-18",
      assignee: {
        name: "David Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Mobile App Development",
    },
    {
      id: 3,
      title: "Create content for social media",
      description: "Prepare posts for next week's campaign",
      priority: "low",
      dueDate: "2023-10-20",
      assignee: {
        name: "Olivia Davis",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Marketing Campaign",
    },
  ],
  inProgress: [
    {
      id: 4,
      title: "Implement authentication system",
      description: "Set up user authentication with JWT",
      priority: "high",
      dueDate: "2023-10-12",
      assignee: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Web App Redesign",
    },
    {
      id: 5,
      title: "Design product page",
      description: "Create mockups for the new product page",
      priority: "medium",
      dueDate: "2023-10-14",
      assignee: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Mobile App Development",
    },
    {
      id: 6,
      title: "Optimize database queries",
      description: "Improve performance of slow database queries",
      priority: "high",
      dueDate: "2023-10-16",
      assignee: {
        name: "James Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Web App Redesign",
    },
  ],
  completed: [
    {
      id: 7,
      title: "Set up CI/CD pipeline",
      description: "Configure automated testing and deployment",
      priority: "medium",
      dueDate: "2023-10-05",
      assignee: {
        name: "James Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Web App Redesign",
    },
    {
      id: 8,
      title: "Create project documentation",
      description: "Write technical documentation for developers",
      priority: "low",
      dueDate: "2023-10-08",
      assignee: {
        name: "David Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Mobile App Development",
    },
    {
      id: 9,
      title: "Conduct user interviews",
      description: "Interview 5 users for feedback on the prototype",
      priority: "medium",
      dueDate: "2023-10-10",
      assignee: {
        name: "Olivia Davis",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: "Customer Research",
    },
  ],
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    case "medium":
      return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
    case "low":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function Tasks() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const filter = params.get("filter")

  // Determine which tab to show based on the filter
  let defaultTab = "all"
  if (filter === "todo") defaultTab = "todo"
  if (filter === "in-progress") defaultTab = "in-progress"
  if (filter === "completed") defaultTab = "completed"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="todo">To Do ({tasks.todo.length})</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress ({tasks.inProgress.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({tasks.completed.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>To Do</CardTitle>
              <CardDescription>Tasks that need to be started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.todo.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In Progress</CardTitle>
              <CardDescription>Tasks currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.inProgress.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
              <CardDescription>Tasks that have been finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.completed.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="todo" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>To Do</CardTitle>
              <CardDescription>Tasks that need to be started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.todo.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>In Progress</CardTitle>
              <CardDescription>Tasks currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.inProgress.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
              <CardDescription>Tasks that have been finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.completed.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TaskItem({ task }: { task: { id: number; title: string; description: string; priority: string; dueDate: string; assignee: { name: string; avatar: string }; project: string } }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <Checkbox id={`task-${task.id}`} className="mt-1" />
      <div className="flex-1 space-y-2">
        <div>
          <label htmlFor={`task-${task.id}`} className="text-base font-medium cursor-pointer hover:underline">
            {task.title}
          </label>
          <p className="text-sm text-muted-foreground">{task.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className={getPriorityColor(task.priority)}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(task.dueDate).toLocaleDateString()}
          </Badge>
          <Badge variant="outline">{task.project}</Badge>
        </div>
      </div>
      <Avatar className="h-8 w-8">
        <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
        <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>
  )
}

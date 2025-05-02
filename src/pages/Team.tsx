import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Product Manager",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "active",
    department: "Product",
    joinedDate: "2021-03-15",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "UI/UX Designer",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "active",
    department: "Design",
    joinedDate: "2021-05-22",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Frontend Developer",
    email: "david@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "active",
    department: "Engineering",
    joinedDate: "2022-01-10",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Backend Developer",
    email: "emma@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "active",
    department: "Engineering",
    joinedDate: "2022-02-15",
  },
  {
    id: 5,
    name: "James Brown",
    role: "DevOps Engineer",
    email: "james@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "away",
    department: "Engineering",
    joinedDate: "2021-11-05",
  },
  {
    id: 6,
    name: "Olivia Davis",
    role: "Marketing Specialist",
    email: "olivia@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
    status: "active",
    department: "Marketing",
    joinedDate: "2022-04-18",
  },
]

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
        <Button>Invite Member</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their access.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{member.name}</p>
                      <Badge variant={member.status === "active" ? "default" : "outline"}>
                        {member.status === "active" ? "Active" : "Away"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Departments</CardTitle>
            <CardDescription>Team members by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Engineering", "Design", "Product", "Marketing"].map((dept) => {
                const count = teamMembers.filter((m) => m.department === dept).length
                return (
                  <div key={dept} className="flex items-center justify-between">
                    <span>{dept}</span>
                    <Badge variant="outline">{count} members</Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Recent team member activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "Sarah Miller", action: "updated their profile" },
                { user: "David Chen", action: "completed a task" },
                { user: "Emma Wilson", action: "joined a project" },
                { user: "James Brown", action: "marked as away" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-sm text-muted-foreground">{activity.action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

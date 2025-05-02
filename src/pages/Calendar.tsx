"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"

// Sample events data
const events = [
  {
    id: 1,
    title: "Team Meeting",
    description: "Weekly team sync",
    date: "2023-10-16",
    time: "10:00 AM - 11:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Deadline",
    description: "Web App Redesign final delivery",
    date: "2023-10-20",
    time: "All day",
    type: "deadline",
  },
  {
    id: 3,
    title: "Client Call",
    description: "Call with Acme Inc.",
    date: "2023-10-17",
    time: "2:00 PM - 3:00 PM",
    type: "call",
  },
  {
    id: 4,
    title: "Product Demo",
    description: "Demo of new features",
    date: "2023-10-18",
    time: "11:00 AM - 12:00 PM",
    type: "meeting",
  },
  {
    id: 5,
    title: "Marketing Review",
    description: "Review Q4 marketing plan",
    date: "2023-10-19",
    time: "3:00 PM - 4:00 PM",
    type: "meeting",
  },
]

// Generate calendar days
const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ day: null, date: null })
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    const dateString = date.toISOString().split("T")[0]
    const dayEvents = events.filter((event) => event.date === dateString)

    days.push({
      day: i,
      date: dateString,
      events: dayEvents,
    })
  }

  return days
}

const getEventBadgeColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
    case "deadline":
      return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    case "call":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function CalendarPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split("T")[0])

  const calendarDays = generateCalendarDays(currentYear, currentMonth)
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const selectedDateEvents = events.filter((event) => event.date === selectedDate)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>
              {monthName} {currentYear}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous month</span>
              </Button>
              <Button variant="outline" size="icon" onClick={goToNextMonth}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next month</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium py-2">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[100px] p-1 border rounded-md ${
                    day.date === selectedDate ? "border-primary bg-primary/5" : "border-border"
                  } ${day.day === null ? "bg-muted/30" : "cursor-pointer hover:bg-muted/50"}`}
                  onClick={() => day.date && setSelectedDate(day.date)}
                >
                  {day.day !== null && (
                    <>
                      <div className="text-right text-sm p-1">
                        {day.day === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear() ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {day.day}
                          </span>
                        ) : (
                          day.day
                        )}
                      </div>
                      <div className="space-y-1">
                        {day.events?.slice(0, 2).map((event) => (
                          <div key={event.id} className="text-xs truncate px-1 py-0.5 rounded bg-muted">
                            {event.title}
                          </div>
                        ))}
                        {day.events && day.events.length > 2 && (
                          <div className="text-xs text-muted-foreground px-1">+{day.events.length - 2} more</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <CardTitle className="text-base">
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="space-y-2 border-l-2 border-primary pl-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{event.title}</h4>
                      <Badge variant="outline" className={getEventBadgeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-center">
                <p className="text-muted-foreground">No events scheduled for this day</p>
                <Button variant="outline" className="mt-4">
                  <Plus className="mr-2 h-4 w-4" /> Add Event
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your schedule for the next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="flex justify-between items-start border-b pb-4 last:border-0">
                  <div className="space-y-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                    <Badge variant="outline" className={`mt-1 ${getEventBadgeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

// Sample messages data
const conversations = [
  {
    id: 1,
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you review the latest design?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've pushed the code changes",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Meeting scheduled for tomorrow",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    name: "James Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The server is back online now",
    time: "Monday",
    unread: false,
  },
  {
    id: 5,
    name: "Olivia Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Let's discuss the marketing plan",
    time: "Monday",
    unread: false,
  },
]

// Sample messages for a conversation
const messageHistory = [
  {
    id: 1,
    sender: "Sarah Miller",
    content: "Hi there! How's the project coming along?",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Hey Sarah! It's going well. I'm working on the final touches.",
    time: "10:18 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Miller",
    content: "Great to hear! Can you review the latest design I sent over?",
    time: "10:22 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Me",
    content: "Sure, I'll take a look at it right away.",
    time: "10:25 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Sarah Miller",
    content: "Thanks! Let me know if you have any feedback or suggestions for improvements.",
    time: "10:30 AM",
    isMe: false,
  },
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // In a real app, you would send the message to the server
      // and update the state with the new message
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Messages</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-12rem)]">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-16rem)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                    selectedConversation.id === conversation.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.unread && (
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">{conversation.name}</p>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} alt={selectedConversation.name} />
                <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{selectedConversation.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messageHistory.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

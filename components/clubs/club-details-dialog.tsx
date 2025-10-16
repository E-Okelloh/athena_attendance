"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Mail, TrendingUp } from "lucide-react"
import { CLUBS, SESSIONS } from "@/utils/mock-data"

interface ClubDetailsDialogProps {
  clubId: string
  open: boolean
  onOpenChange: (open: boolean) => void
  memberView?: boolean
}

export function ClubDetailsDialog({ clubId, open, onOpenChange, memberView = false }: ClubDetailsDialogProps) {
  const club = CLUBS.find((c) => c.id === clubId)
  const clubSessions = SESSIONS.filter((s) => s.clubId === clubId)

  if (!club) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className={`h-16 w-16 rounded-lg ${club.color} flex items-center justify-center`}>
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{club.name}</DialogTitle>
              <DialogDescription>{club.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{club.members}</p>
                      <p className="text-xs text-muted-foreground">Total Members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{clubSessions.length}</p>
                      <p className="text-xs text-muted-foreground">Sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">87%</p>
                      <p className="text-xs text-muted-foreground">Avg Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Club Leader</span>
                  <span className="text-sm text-muted-foreground">{club.leader}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/20">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Meeting Frequency</span>
                  <span className="text-sm text-muted-foreground">Weekly</span>
                </div>
              </CardContent>
            </Card>

            {!memberView && (
              <div className="flex gap-2">
                <Button className="flex-1">Edit Club</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Analytics
                </Button>
              </div>
            )}
            {memberView && (
              <Button className="w-full bg-transparent" variant="outline">
                Leave Club
              </Button>
            )}
          </TabsContent>

          <TabsContent value="sessions" className="space-y-3">
            {clubSessions.length > 0 ? (
              clubSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">{session.topic}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-accent flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(session.date).toLocaleDateString()} at {session.time}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {session.attendees} attended
                          </span>
                        </div>
                      </div>
                      <Badge variant={session.status === "completed" ? "secondary" : "default"}>{session.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">No sessions scheduled yet</p>
            )}
          </TabsContent>

          <TabsContent value="members" className="space-y-3">
            <div className="space-y-2">
              {[
                { name: "John Doe", email: "john@university.edu", role: "Member" },
                { name: "Jane Smith", email: "jane@university.edu", role: "Member" },
                { name: club.leader, email: "leader@university.edu", role: "Leader" },
                { name: "Mike Johnson", email: "mike@university.edu", role: "Member" },
                { name: "Sarah Williams", email: "sarah@university.edu", role: "Member" },
              ].map((member, i) => (
                <Card key={i}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {member.email}
                          </p>
                        </div>
                      </div>
                      <Badge variant={member.role === "Leader" ? "default" : "outline"}>{member.role}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

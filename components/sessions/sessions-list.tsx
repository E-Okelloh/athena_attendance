"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, QrCode, Clock } from "lucide-react"
import { SESSIONS } from "@/utils/mock-data"
import { SessionDetailsDialog } from "./session-details-dialog"

interface SessionsListProps {
  memberView?: boolean
}

export function SessionsList({ memberView = false }: SessionsListProps) {
  const [selectedSession, setSelectedSession] = useState<string | null>(null)

  const upcomingSessions = SESSIONS.filter((s) => s.status === "upcoming")
  const completedSessions = SESSIONS.filter((s) => s.status === "completed")

  const SessionCard = ({ session }: { session: (typeof SESSIONS)[0] }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{session.title}</h3>
              <Badge variant={session.status === "completed" ? "secondary" : "default"}>{session.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{session.topic}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{session.clubName}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(session.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{session.time}</span>
              </div>
              {session.status === "completed" && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{session.attendees} attendees</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setSelectedSession(session.id)}>
            View Details
          </Button>
          {!memberView && session.status === "upcoming" && (
            <Button className="flex-1">
              <QrCode className="h-4 w-4 mr-2" />
              QR Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingSessions.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedSessions.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcomingSessions.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No upcoming sessions scheduled</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-6">
          {completedSessions.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {completedSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No completed sessions yet</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {selectedSession && (
        <SessionDetailsDialog
          sessionId={selectedSession}
          open={!!selectedSession}
          onOpenChange={(open) => !open && setSelectedSession(null)}
          memberView={memberView}
        />
      )}
    </>
  )
}

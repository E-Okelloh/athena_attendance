"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users, QrCode, Download } from "lucide-react"
import { SESSIONS } from "@/utils/mock-data"
import { QRCodeDisplay } from "./qr-code-display"

interface SessionDetailsDialogProps {
  sessionId: string
  open: boolean
  onOpenChange: (open: boolean) => void
  memberView?: boolean
}

export function SessionDetailsDialog({ sessionId, open, onOpenChange, memberView = false }: SessionDetailsDialogProps) {
  const session = SESSIONS.find((s) => s.id === sessionId)

  if (!session) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">{session.title}</DialogTitle>
              <DialogDescription className="mt-1">{session.topic}</DialogDescription>
            </div>
            <Badge variant={session.status === "completed" ? "secondary" : "default"}>{session.status}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Club
                </span>
                <span className="text-sm text-muted-foreground">{session.clubName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date
                </span>
                <span className="text-sm text-muted-foreground">{new Date(session.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Time
                </span>
                <span className="text-sm text-muted-foreground">{session.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Leader</span>
                <span className="text-sm text-muted-foreground">{session.leader}</span>
              </div>
              {session.status === "completed" && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Attendance</span>
                  <span className="text-sm text-muted-foreground">{session.attendees} members</span>
                </div>
              )}
            </CardContent>
          </Card>

          {!memberView && session.status === "upcoming" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  QR Code for Attendance
                </h3>
                <QRCodeDisplay sessionId={session.id} />
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Members can scan this QR code to mark their attendance
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2">
            {!memberView && (
              <>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Export Attendance
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Edit Session
                </Button>
              </>
            )}
            {memberView && session.status === "upcoming" && (
              <Button className="w-full">
                <QrCode className="h-4 w-4 mr-2" />
                Scan to Check In
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import type React from "react"

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Calendar, Users, Clock } from "lucide-react"
import { SESSIONS } from "@/utils/mock-data"
import { logAttendance } from "@/utils/gsheets"

export default function AttendancePage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = use(params)
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    memberId: "",
  })

  const session = SESSIONS.find((s) => s.id === sessionId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await logAttendance({
        sessionId,
        name: formData.name,
        email: formData.email,
        memberId: formData.memberId,
        timestamp: new Date().toISOString(),
      })

      setIsSuccess(true)
      setTimeout(() => {
        router.push("/member")
      }, 2000)
    } catch (error) {
      console.error("[v0] Attendance logging error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center py-12">
            <p className="text-muted-foreground">Session not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Attendance Recorded!</h2>
            <p className="text-muted-foreground">Your attendance has been successfully logged.</p>
            <p className="text-sm text-muted-foreground mt-4">Redirecting to dashboard...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Athena</span>
          </div>
          <CardTitle className="text-2xl">Mark Your Attendance</CardTitle>
          <CardDescription>Fill in your details to check in to this session</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Card className="bg-muted/50">
            <CardContent className="pt-4 space-y-2">
              <h3 className="font-semibold text-lg">{session.title}</h3>
              <p className="text-sm text-muted-foreground">{session.topic}</p>
              <div className="flex flex-col gap-2 mt-3">
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
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID</Label>
              <Input
                id="memberId"
                placeholder="M001"
                value={formData.memberId}
                onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Recording Attendance..." : "Submit Attendance"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

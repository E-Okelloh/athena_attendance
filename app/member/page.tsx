import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, QrCode } from "lucide-react"

export default function MemberDashboard() {
  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">My Dashboard</h2>
          <p className="text-muted-foreground mt-1">View your clubs and upcoming sessions</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">My Clubs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground mt-1">Active memberships</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Sessions Attended</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground mt-1">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Rate</CardTitle>
              <QrCode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">92%</div>
              <p className="text-xs text-muted-foreground mt-1">Great participation!</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  club: "Blockchain & Web3",
                  topic: "Smart Contract Development",
                  date: "Today, 3:00 PM",
                  location: "Room 301",
                },
                {
                  club: "AI & ML",
                  topic: "Neural Networks Workshop",
                  date: "Tomorrow, 2:00 PM",
                  location: "Lab 205",
                },
                {
                  club: "Software Development",
                  topic: "Git & GitHub Collaboration",
                  date: "Mar 18, 4:00 PM",
                  location: "Room 401",
                },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{session.club}</p>
                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-accent">{session.date}</span>
                      <span className="text-xs text-muted-foreground">{session.location}</span>
                    </div>
                  </div>
                  <Button size="sm">Check In</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

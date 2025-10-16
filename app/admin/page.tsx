import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, TrendingUp, Activity } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Active Clubs",
      value: "8",
      icon: Users,
      description: "Tech clubs managed",
      trend: "+2 this semester",
    },
    {
      title: "Sessions Tracked",
      value: "124",
      icon: Calendar,
      description: "Total sessions",
      trend: "+18 this month",
    },
    {
      title: "Average Attendance",
      value: "87%",
      icon: TrendingUp,
      description: "Across all clubs",
      trend: "+5% from last month",
    },
    {
      title: "Total Members",
      value: "342",
      icon: Activity,
      description: "Active participants",
      trend: "+23 new members",
    },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground mt-1">Monitor your tech clubs performance and engagement</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                <p className="text-xs text-success mt-2 font-medium">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { club: "Blockchain & Web3", action: "Session completed", time: "2 hours ago" },
                  { club: "AI & ML", action: "New member joined", time: "5 hours ago" },
                  { club: "Cybersecurity", action: "Task assigned", time: "1 day ago" },
                  { club: "Cloud & DevOps", action: "Session scheduled", time: "2 days ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.club}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { club: "Software Development", topic: "React Best Practices", date: "Today, 3:00 PM" },
                  { club: "UI/UX Design", topic: "Figma Workshop", date: "Tomorrow, 2:00 PM" },
                  { club: "Robotics & IoT", topic: "Arduino Basics", date: "Mar 18, 4:00 PM" },
                  { club: "Innovation Hub", topic: "Pitch Practice", date: "Mar 20, 1:00 PM" },
                ].map((session, i) => (
                  <div key={i} className="py-2 border-b border-border last:border-0">
                    <p className="text-sm font-medium text-foreground">{session.club}</p>
                    <p className="text-xs text-muted-foreground">{session.topic}</p>
                    <p className="text-xs text-accent mt-1">{session.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

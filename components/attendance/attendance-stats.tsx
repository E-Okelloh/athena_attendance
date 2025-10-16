import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Calendar, CheckCircle } from "lucide-react"

export function AttendanceStats() {
  const stats = [
    {
      title: "Total Check-ins",
      value: "1,247",
      icon: CheckCircle,
      description: "This semester",
      trend: "+12% from last month",
    },
    {
      title: "Average Attendance",
      value: "87%",
      icon: TrendingUp,
      description: "Across all sessions",
      trend: "+5% improvement",
    },
    {
      title: "Active Members",
      value: "342",
      icon: Users,
      description: "Regular attendees",
      trend: "+23 new members",
    },
    {
      title: "Sessions This Month",
      value: "18",
      icon: Calendar,
      description: "Completed sessions",
      trend: "3 upcoming",
    },
  ]

  return (
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
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Calendar, Target } from "lucide-react"

export function ReportsOverview() {
  const metrics = [
    {
      title: "Overall Engagement",
      value: "89%",
      icon: TrendingUp,
      change: "+7% vs last month",
      positive: true,
    },
    {
      title: "Active Members",
      value: "342",
      icon: Users,
      change: "+23 new members",
      positive: true,
    },
    {
      title: "Sessions Completed",
      value: "124",
      icon: Calendar,
      change: "18 this month",
      positive: true,
    },
    {
      title: "Attendance Goal",
      value: "87%",
      icon: Target,
      change: "Target: 85%",
      positive: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{metric.value}</div>
            <p className={`text-xs mt-2 font-medium ${metric.positive ? "text-success" : "text-destructive"}`}>
              {metric.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

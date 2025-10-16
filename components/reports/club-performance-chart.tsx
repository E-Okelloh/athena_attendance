"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function ClubPerformanceChart() {
  const data = [
    { club: "Blockchain", attendance: 85, sessions: 12, members: 45 },
    { club: "AI & ML", attendance: 92, sessions: 15, members: 62 },
    { club: "Cybersecurity", attendance: 78, sessions: 10, members: 38 },
    { club: "Cloud", attendance: 88, sessions: 11, members: 41 },
    { club: "Software Dev", attendance: 90, sessions: 14, members: 58 },
    { club: "UI/UX", attendance: 82, sessions: 9, members: 34 },
    { club: "Robotics", attendance: 75, sessions: 8, members: 29 },
    { club: "Innovation", attendance: 86, sessions: 10, members: 35 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Club Performance Overview</CardTitle>
        <CardDescription>Attendance rates and session counts by club</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="club" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="attendance" fill="hsl(var(--primary))" name="Attendance %" radius={[4, 4, 0, 0]} />
            <Bar dataKey="sessions" fill="hsl(var(--accent))" name="Sessions" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

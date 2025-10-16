"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download } from "lucide-react"
import { CLUBS } from "@/utils/mock-data"

export function AttendanceTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClub, setSelectedClub] = useState<string>("all")

  const attendanceRecords = [
    {
      id: "1",
      name: "John Doe",
      email: "john@university.edu",
      memberId: "M001",
      session: "React Best Practices",
      club: "Software Development",
      date: "2025-03-14",
      time: "15:05",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@university.edu",
      memberId: "M002",
      session: "React Best Practices",
      club: "Software Development",
      date: "2025-03-14",
      time: "15:03",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@university.edu",
      memberId: "M003",
      session: "Penetration Testing",
      club: "Cybersecurity",
      date: "2025-03-13",
      time: "16:02",
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah@university.edu",
      memberId: "M004",
      session: "Penetration Testing",
      club: "Cybersecurity",
      date: "2025-03-13",
      time: "16:00",
    },
  ]

  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.memberId.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesClub = selectedClub === "all" || record.club === selectedClub
    return matchesSearch && matchesClub
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Attendance Records</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or member ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedClub} onValueChange={setSelectedClub}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by club" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clubs</SelectItem>
              {CLUBS.map((club) => (
                <SelectItem key={club.id} value={club.name}>
                  {club.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Member</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Member ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Session</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Club</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date & Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{record.name}</p>
                      <p className="text-xs text-muted-foreground">{record.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-foreground">{record.memberId}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-foreground">{record.session}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-muted-foreground">{record.club}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="text-sm text-foreground">{new Date(record.date).toLocaleDateString()}</p>
                      <p className="text-xs text-muted-foreground">{record.time}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/20">
                      Present
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredRecords.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No attendance records found</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

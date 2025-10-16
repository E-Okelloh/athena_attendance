"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Download, FileSpreadsheet } from "lucide-react"
import { CLUBS } from "@/utils/mock-data"

export function ReportGenerator() {
  const [reportType, setReportType] = useState<string>("")
  const [selectedClub, setSelectedClub] = useState<string>("all")
  const [dateRange, setDateRange] = useState<string>("month")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = async () => {
    setIsGenerating(true)
    console.log("[v0] Generating report:", { reportType, selectedClub, dateRange })

    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      // In production, this would trigger actual export to Google Sheets
      alert("Report generated successfully! Check your Google Sheets.")
    }, 2000)
  }

  const handleExportCSV = () => {
    console.log("[v0] Exporting CSV:", { reportType, selectedClub, dateRange })
    // In production, this would generate and download a CSV file
    alert("CSV export started! Download will begin shortly.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Reports</CardTitle>
        <CardDescription>Create custom reports and export to Google Sheets or CSV</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="report-type">Report Type</Label>
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger id="report-type">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="attendance">Attendance Summary</SelectItem>
              <SelectItem value="club-performance">Club Performance</SelectItem>
              <SelectItem value="member-engagement">Member Engagement</SelectItem>
              <SelectItem value="session-analytics">Session Analytics</SelectItem>
              <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="club-filter">Club Filter</Label>
          <Select value={selectedClub} onValueChange={setSelectedClub}>
            <SelectTrigger id="club-filter">
              <SelectValue placeholder="Select club" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clubs</SelectItem>
              {CLUBS.map((club) => (
                <SelectItem key={club.id} value={club.id}>
                  {club.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date-range">Date Range</Label>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger id="date-range">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 pt-4">
          <Button className="flex-1" onClick={handleGenerateReport} disabled={!reportType || isGenerating}>
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            {isGenerating ? "Generating..." : "Export to Sheets"}
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent" onClick={handleExportCSV} disabled={!reportType}>
            <Download className="h-4 w-4 mr-2" />
            Download CSV
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Reports will be exported to your connected Google Sheets account
        </p>
      </CardContent>
    </Card>
  )
}

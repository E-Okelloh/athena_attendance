import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ReportsOverview } from "@/components/reports/reports-overview"
import { ReportGenerator } from "@/components/reports/report-generator"
import { ClubPerformanceChart } from "@/components/reports/club-performance-chart"

export default function ReportsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
          <p className="text-muted-foreground mt-1">Generate reports and export data to Google Sheets</p>
        </div>

        <ReportsOverview />
        <div className="grid gap-6 lg:grid-cols-2">
          <ClubPerformanceChart />
          <ReportGenerator />
        </div>
      </div>
    </DashboardLayout>
  )
}

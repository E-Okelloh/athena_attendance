import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { AttendanceTable } from "@/components/attendance/attendance-table"
import { AttendanceStats } from "@/components/attendance/attendance-stats"

export default function AttendancePage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Attendance Tracking</h2>
          <p className="text-muted-foreground mt-1">Monitor and manage session attendance records</p>
        </div>

        <AttendanceStats />
        <AttendanceTable />
      </div>
    </DashboardLayout>
  )
}

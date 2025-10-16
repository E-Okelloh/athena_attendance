import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SessionsList } from "@/components/sessions/sessions-list"

export default function MemberSessionsPage() {
  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">My Sessions</h2>
          <p className="text-muted-foreground mt-1">View upcoming and past sessions</p>
        </div>

        <SessionsList memberView />
      </div>
    </DashboardLayout>
  )
}

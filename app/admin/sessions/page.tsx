import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SessionsList } from "@/components/sessions/sessions-list"
import { CreateSessionDialog } from "@/components/sessions/create-session-dialog"

export default function SessionsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Sessions Management</h2>
            <p className="text-muted-foreground mt-1">Plan and track club sessions with QR attendance</p>
          </div>
          <CreateSessionDialog />
        </div>

        <SessionsList />
      </div>
    </DashboardLayout>
  )
}

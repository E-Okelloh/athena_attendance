import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SettingsForm } from "@/components/settings/settings-form"

export default function MemberSettingsPage() {
  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your account preferences</p>
        </div>

        <SettingsForm memberView />
      </div>
    </DashboardLayout>
  )
}

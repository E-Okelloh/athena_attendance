import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { SettingsForm } from "@/components/settings/settings-form"

export default function SettingsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your account and platform preferences</p>
        </div>

        <SettingsForm />
      </div>
    </DashboardLayout>
  )
}

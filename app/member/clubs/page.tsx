import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ClubsGrid } from "@/components/clubs/clubs-grid"

export default function MemberClubsPage() {
  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">My Clubs</h2>
          <p className="text-muted-foreground mt-1">Browse and join tech clubs</p>
        </div>

        <ClubsGrid memberView />
      </div>
    </DashboardLayout>
  )
}

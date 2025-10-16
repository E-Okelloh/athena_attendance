import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ClubsGrid } from "@/components/clubs/clubs-grid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ClubsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Clubs Management</h2>
            <p className="text-muted-foreground mt-1">Manage all tech clubs and their members</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Club
          </Button>
        </div>

        <ClubsGrid />
      </div>
    </DashboardLayout>
  )
}

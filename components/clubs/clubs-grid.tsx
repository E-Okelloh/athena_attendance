"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp } from "lucide-react"
import { CLUBS } from "@/utils/mock-data"
import { ClubDetailsDialog } from "./club-details-dialog"

interface ClubsGridProps {
  memberView?: boolean
}

export function ClubsGrid({ memberView = false }: ClubsGridProps) {
  const [selectedClub, setSelectedClub] = useState<string | null>(null)

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CLUBS.map((club) => (
          <Card key={club.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-lg ${club.color} flex items-center justify-center mb-3`}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                {memberView && <Badge variant="outline">Joined</Badge>}
              </div>
              <CardTitle className="text-lg">{club.name}</CardTitle>
              <CardDescription className="line-clamp-2">{club.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{club.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Active</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Leader:</span> {club.leader}
              </div>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setSelectedClub(club.id)}>
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedClub && (
        <ClubDetailsDialog
          clubId={selectedClub}
          open={!!selectedClub}
          onOpenChange={(open) => !open && setSelectedClub(null)}
          memberView={memberView}
        />
      )}
    </>
  )
}

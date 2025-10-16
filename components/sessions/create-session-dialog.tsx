"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { CLUBS } from "@/utils/mock-data"

export function CreateSessionDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    clubId: "",
    title: "",
    topic: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Creating session:", formData)
    // TODO: Implement session creation with Google Sheets
    setOpen(false)
    setFormData({ clubId: "", title: "", topic: "", date: "", time: "" })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Session
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Session</DialogTitle>
          <DialogDescription>Schedule a new club session with QR attendance tracking</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="club">Club</Label>
            <Select value={formData.clubId} onValueChange={(value) => setFormData({ ...formData, clubId: value })}>
              <SelectTrigger id="club">
                <SelectValue placeholder="Select a club" />
              </SelectTrigger>
              <SelectContent>
                {CLUBS.map((club) => (
                  <SelectItem key={club.id} value={club.id}>
                    {club.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Session Title</Label>
            <Input
              id="title"
              placeholder="e.g., Introduction to React"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Topic Description</Label>
            <Textarea
              id="topic"
              placeholder="Brief description of what will be covered"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" className="flex-1 bg-transparent" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Session
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

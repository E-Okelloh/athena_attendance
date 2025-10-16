"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Calendar, FileText, Settings, QrCode } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  role: "admin" | "member"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const basePath = `/${role}`

  const navigation = [
    { name: "Dashboard", href: basePath, icon: LayoutDashboard },
    { name: "Clubs", href: `${basePath}/clubs`, icon: Users },
    { name: "Sessions", href: `${basePath}/sessions`, icon: Calendar },
    ...(role === "admin"
      ? [
          { name: "Attendance", href: `${basePath}/attendance`, icon: QrCode },
          { name: "Reports", href: `${basePath}/reports`, icon: FileText },
        ]
      : []),
    { name: "Settings", href: `${basePath}/settings`, icon: Settings },
  ]

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 bg-card border-r border-border">
      <div className="flex items-center gap-2 h-16 px-6 border-b border-border">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">A</span>
        </div>
        <span className="text-xl font-bold text-foreground">Athena</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "member"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")
    const storedEmail = localStorage.getItem("userEmail")

    if (!storedRole || !storedEmail) {
      router.push("/login")
      return
    }

    if (storedRole !== role) {
      router.push(`/${storedRole}`)
      return
    }

    setUserEmail(storedEmail)
    setIsLoading(false)
  }, [role, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Header userEmail={userEmail} role={role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

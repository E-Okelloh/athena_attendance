// Authentication utilities for client-side auth management

export interface User {
  email: string
  role: "admin" | "member"
  name?: string
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const email = localStorage.getItem("userEmail")
  const role = localStorage.getItem("userRole") as "admin" | "member" | null

  if (!email || !role) return null

  return { email, role }
}

export function logout() {
  localStorage.removeItem("userEmail")
  localStorage.removeItem("userRole")
  window.location.href = "/login"
}

export function requireAuth(allowedRoles?: ("admin" | "member")[]) {
  const user = getCurrentUser()

  if (!user) {
    window.location.href = "/login"
    return null
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    window.location.href = `/${user.role}`
    return null
  }

  return user
}

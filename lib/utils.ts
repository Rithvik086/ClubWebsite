import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from "uuid"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTicketId(): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8)
  return `TKT-${timestamp}-${randomStr}`.toUpperCase()
}

export function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export function isAdmin(userRole?: string): boolean {
  return userRole === "admin"
}

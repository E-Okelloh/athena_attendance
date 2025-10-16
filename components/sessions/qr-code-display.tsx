"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface QRCodeDisplayProps {
  sessionId: string
}

export function QRCodeDisplay({ sessionId }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const attendanceUrl = `${window.location.origin}/attendance/${sessionId}`
      QRCode.toCanvas(
        canvasRef.current,
        attendanceUrl,
        {
          width: 256,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        },
        (error) => {
          if (error) console.error("[v0] QR Code generation error:", error)
        },
      )
    }
  }, [sessionId])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} className="border border-border rounded-lg" />
    </div>
  )
}

"use client"

import { useState } from "react"
import { WeatherPanel } from "@/components/weather-panel"
import { MapBackground } from "@/components/map-background"

export default function Home() {
  const [panelPosition, setPanelPosition] = useState<"left" | "right">("left")

  return (
    <div className="relative h-screen w-screen overflow-hidden dark">
      <MapBackground />
      <WeatherPanel
        position={panelPosition}
        onPositionChange={() => setPanelPosition((prev) => (prev === "left" ? "right" : "left"))}
      />
    </div>
  )
}

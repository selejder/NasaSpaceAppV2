"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Cloud, Droplets, Wind, Route, Settings } from "lucide-react"
import { CloudRain } from "lucide-react" // Import CloudRain from lucide-react

interface WeatherSegment {
  id: number
  location: string
  temp: number
  condition: "sunny" | "cloudy" | "rainy"
  humidity: number
  precipitation: number
  windSpeed: number
  roadCondition: string
}

interface WeatherCardProps {
  segment: WeatherSegment
  options: {
    humidity: boolean
    precipitation: boolean
    windSpeed: boolean
    roadConditions: boolean
  }
}

export function WeatherCard({ segment, options }: WeatherCardProps) {
  const [tempUnit, setTempUnit] = useState<"C" | "F" | "K">("C")

  const convertTemp = (celsius: number) => {
    switch (tempUnit) {
      case "F":
        return Math.round((celsius * 9) / 5 + 32)
      case "K":
        return Math.round(celsius + 273.15)
      default:
        return celsius
    }
  }

  const getWeatherIcon = () => {
    switch (segment.condition) {
      case "sunny":
        return <Sun className="h-16 w-16 text-yellow-400" />
      case "cloudy":
        return <Cloud className="h-16 w-16 text-gray-400" />
      case "rainy":
        return <CloudRain className="h-16 w-16 text-blue-400" />
    }
  }

  const cycleTempUnit = () => {
    setTempUnit((prev) => {
      if (prev === "C") return "F"
      if (prev === "F") return "K"
      return "C"
    })
  }

  return (
    <Card className="bg-black/60 border-primary/30 p-4 space-y-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-white">{segment.location}</h4>
      </div>

      {/* Weather condition and temperature */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getWeatherIcon()}
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-white">
              {convertTemp(segment.temp)}°{tempUnit}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTempUnit}
              className="h-6 w-6 text-white/60 hover:text-white hover:bg-white/10"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* User-selected data */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
        {options.humidity && (
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-white/60">Nem</p>
              <p className="text-sm font-semibold text-white">{segment.humidity}%</p>
            </div>
          </div>
        )}

        {options.precipitation && (
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" /> {/* Changed Rain to Droplets */}
            <div>
              <p className="text-xs text-white/60">Yağış</p>
              <p className="text-sm font-semibold text-white">{segment.precipitation}%</p>
            </div>
          </div>
        )}

        {options.windSpeed && (
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-white/60">Rüzgar</p>
              <p className="text-sm font-semibold text-white">{segment.windSpeed} km/h</p>
            </div>
          </div>
        )}

        {options.roadConditions && (
          <div className="flex items-center gap-2">
            <Route className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-white/60">Yol</p>
              <p className="text-sm font-semibold text-white">{segment.roadCondition}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeftRight, Droplets, CloudRain, Wind, Route } from "lucide-react"
import { DateSelector } from "@/components/date-selector"
import { WeatherCard } from "@/components/weather-card"

interface WeatherPanelProps {
  position: "left" | "right"
  onPositionChange: () => void
}

export function WeatherPanel({ position, onPositionChange }: WeatherPanelProps) {
  const [startPoint, setStartPoint] = useState("")
  const [endPoint, setEndPoint] = useState("")
  const [selectedDate, setSelectedDate] = useState({ year: 2025, month: 1, day: 1 })
  const [showResults, setShowResults] = useState(false)

  const [options, setOptions] = useState({
    humidity: true,
    precipitation: true,
    windSpeed: false,
    roadConditions: true,
  })

  const handleGenerateRoute = () => {
    if (startPoint && endPoint) {
      setShowResults(true)
    }
  }

  // Mock weather data
  const weatherSegments = [
    {
      id: 1,
      location: "İstanbul",
      temp: 14,
      condition: "sunny",
      humidity: 65,
      precipitation: 10,
      windSpeed: 15,
      roadCondition: "İyi",
    },
    {
      id: 2,
      location: "Ankara",
      temp: 8,
      condition: "cloudy",
      humidity: 75,
      precipitation: 30,
      windSpeed: 20,
      roadCondition: "Orta",
    },
    {
      id: 3,
      location: "İzmir",
      temp: 18,
      condition: "rainy",
      humidity: 85,
      precipitation: 70,
      windSpeed: 25,
      roadCondition: "Kötü",
    },
  ]

  return (
    <div
      className={`absolute top-0 ${position === "left" ? "left-0" : "right-0"} z-10 h-screen w-full md:w-[25%] min-w-[320px] max-w-[480px] p-[5px] transition-all duration-500`}
    >
      <div
        className="relative h-full rounded-[2rem] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(10,10,30,0.95) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Space background with Saturn */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/deep-space-with-saturn-planet-and-bright-stars.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col p-6 overflow-hidden">
          {/* Header with position toggle */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold text-white neon-text">Will It Rain On My Parade?</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onPositionChange}
              className="text-white hover:bg-white/10 neon-glow"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
            {/* Route Input */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="start" className="text-white/90">
                  Başlangıç Noktası
                </Label>
                <Input
                  id="start"
                  value={startPoint}
                  onChange={(e) => setStartPoint(e.target.value)}
                  placeholder="Başlangıç konumunu girin"
                  className="bg-black/40 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end" className="text-white/90">
                  Varış Noktası
                </Label>
                <Input
                  id="end"
                  value={endPoint}
                  onChange={(e) => setEndPoint(e.target.value)}
                  placeholder="Varış konumunu girin"
                  className="bg-black/40 border-primary/30 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Date Selection */}
            <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />

            {/* Customizable Data Options */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white/90">Veri Seçenekleri</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-primary" />
                  <Label htmlFor="humidity" className="text-white/80">
                    Nem Oranı
                  </Label>
                </div>
                <Switch
                  id="humidity"
                  checked={options.humidity}
                  onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, humidity: checked }))}
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-red-900/50"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CloudRain className="h-5 w-5 text-primary" />
                  <Label htmlFor="precipitation" className="text-white/80">
                    Yağış Olasılığı
                  </Label>
                </div>
                <Switch
                  id="precipitation"
                  checked={options.precipitation}
                  onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, precipitation: checked }))}
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-red-900/50"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wind className="h-5 w-5 text-primary" />
                  <Label htmlFor="windSpeed" className="text-white/80">
                    Rüzgar Hızı
                  </Label>
                </div>
                <Switch
                  id="windSpeed"
                  checked={options.windSpeed}
                  onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, windSpeed: checked }))}
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-red-900/50"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Route className="h-5 w-5 text-primary" />
                  <Label htmlFor="roadConditions" className="text-white/80">
                    Yol Koşulları
                  </Label>
                </div>
                <Switch
                  id="roadConditions"
                  checked={options.roadConditions}
                  onCheckedChange={(checked) => setOptions((prev) => ({ ...prev, roadConditions: checked }))}
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-red-900/50"
                />
              </div>
            </div>

            {/* Results Section */}
            {showResults && (
              <div className="space-y-4 pb-4">
                <h3 className="text-sm font-semibold text-white/90">Güzergah Detayları</h3>
                {weatherSegments.map((segment) => (
                  <WeatherCard key={segment.id} segment={segment} options={options} />
                ))}
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-4 mt-auto">
            <Button
              onClick={handleGenerateRoute}
              disabled={!startPoint || !endPoint}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Güzergah Oluştur
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary);
          opacity: 0.8;
        }
      `}</style>
    </div>
  )
}

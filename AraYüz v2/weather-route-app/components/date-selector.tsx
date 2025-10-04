"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DateSelectorProps {
  selectedDate: { year: number; month: number; day: number }
  onDateChange: (date: { year: number; month: number; day: number }) => void
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const years = Array.from({ length: 5 }, (_, i) => 2025 + i)
  const months = [
    { value: 1, label: "Ocak" },
    { value: 2, label: "Şubat" },
    { value: 3, label: "Mart" },
    { value: 4, label: "Nisan" },
    { value: 5, label: "Mayıs" },
    { value: 6, label: "Haziran" },
    { value: 7, label: "Temmuz" },
    { value: 8, label: "Ağustos" },
    { value: 9, label: "Eylül" },
    { value: 10, label: "Ekim" },
    { value: 11, label: "Kasım" },
    { value: 12, label: "Aralık" },
  ]
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="space-y-4">
      <Label className="text-white/90">Tarih Seçimi</Label>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-2">
          <Label htmlFor="year" className="text-xs text-white/70">
            Yıl
          </Label>
          <Select
            value={selectedDate.year.toString()}
            onValueChange={(value) => onDateChange({ ...selectedDate, year: Number.parseInt(value) })}
          >
            <SelectTrigger id="year" className="bg-black/40 border-primary/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-primary/30">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()} className="text-white hover:bg-primary/20">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="month" className="text-xs text-white/70">
            Ay
          </Label>
          <Select
            value={selectedDate.month.toString()}
            onValueChange={(value) => onDateChange({ ...selectedDate, month: Number.parseInt(value) })}
          >
            <SelectTrigger id="month" className="bg-black/40 border-primary/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-primary/30">
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value.toString()} className="text-white hover:bg-primary/20">
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="day" className="text-xs text-white/70">
            Gün
          </Label>
          <Select
            value={selectedDate.day.toString()}
            onValueChange={(value) => onDateChange({ ...selectedDate, day: Number.parseInt(value) })}
          >
            <SelectTrigger id="day" className="bg-black/40 border-primary/30 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black/95 border-primary/30">
              {days.map((day) => (
                <SelectItem key={day} value={day.toString()} className="text-white hover:bg-primary/20">
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

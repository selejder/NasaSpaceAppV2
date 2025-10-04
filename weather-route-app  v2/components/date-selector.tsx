"use client"

import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { tr } from "date-fns/locale"

interface DateSelectorProps {
  selectedDate: { year: number; month: number; day: number }
  onDateChange: (date: { year: number; month: number; day: number }) => void
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const dateValue = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day)

  const formatDate = (date: Date) => {
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ]
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onDateChange({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      })
    }
  }

  return (
    <div className="space-y-4">
      <Label className="text-white/90">Tarih Seçimi</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-black/40 border-primary/30 text-white hover:bg-black/60 hover:text-white"
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
            {formatDate(dateValue)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-black/95 border-primary/30" align="start" side="bottom" sideOffset={5}>
          <Calendar
            mode="single"
            selected={dateValue}
            onSelect={handleDateSelect}
            locale={tr}
            captionLayout="dropdown-buttons"
            fromYear={2020}
            toYear={2026}
            className="rounded-md"
            classNames={{
              weekday: "text-white/70 text-xs w-9 font-normal",
              day_button:
                "text-white hover:bg-primary/20 data-[selected-single=true]:bg-primary data-[selected-single=true]:text-black w-9 h-9",
              month_caption: "flex justify-center items-center gap-2 mb-2",
              caption_label: "text-white",
              button_previous: "text-white hover:bg-primary/20",
              button_next: "text-white hover:bg-primary/20",
              dropdown_root: "flex gap-2",
              dropdown:
                "bg-black/90 border-primary/30 text-white px-3 py-1.5 rounded text-sm hover:bg-black/70 cursor-pointer",
              dropdown_month: "bg-black/90 border-primary/30 text-white px-3 py-1.5 rounded text-sm hover:bg-black/70",
              dropdown_year: "bg-black/90 border-primary/30 text-white px-3 py-1.5 rounded text-sm hover:bg-black/70",
              today: "bg-primary/20 text-white",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

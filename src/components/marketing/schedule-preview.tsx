import Link from "next/link"
import { ArrowRight } from "lucide-react"

const scheduleDays = [
  { day: "Mon", classes: ["6:00am Vinyasa", "9:00am Hatha", "12:00pm Yin", "5:30pm Power", "7:00pm Restorative"] },
  { day: "Tue", classes: ["6:00am Flow", "9:00am Ashtanga", "12:00pm Meditation", "5:30pm Vinyasa", "7:00pm Hatha"] },
  { day: "Wed", classes: ["6:00am Vinyasa", "9:00am Hatha", "12:00pm Power", "5:30pm Yin", "7:00pm Kundalini"] },
  { day: "Thu", classes: ["6:00am Flow", "9:00am Ashtanga", "12:00pm Restorative", "5:30pm Vinyasa", "7:00pm Meditation"] },
  { day: "Fri", classes: ["6:00am Vinyasa", "9:00am Hatha", "12:00pm Yin", "5:30pm Power", "7:00pm Restorative"] },
  { day: "Sat", classes: ["8:00am Flow", "10:00am Hatha", "12:00pm Kundalini", "2:00pm Yin"] },
  { day: "Sun", classes: ["8:00am Restorative", "10:00am Meditation", "12:00pm Vinyasa", "2:00pm Gentle Flow"] },
]

export function SchedulePreview() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 border-t border-[#0A3B2C]/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <p className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-4">
            Weekly Schedule
          </p>
          <h2 className="font-serif-zf text-4xl md:text-5xl text-[#0A3B2C] tracking-tight">
            This week&apos;s <span className="italic">classes</span>
          </h2>
        </div>
        <Link
          href="/classes"
          className="group flex items-center text-sm font-medium text-[#C5A059] hover:text-[#B38F46] transition-colors mt-4 md:mt-0 shrink-0"
        >
          View full schedule <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-flex gap-3 min-w-full px-4 sm:px-0">
          {scheduleDays.map((day) => (
            <div
              key={day.day}
              className="bg-white border border-[#0A3B2C]/10 min-w-[140px] flex-1 hover:shadow-md transition-shadow"
            >
              <div className="bg-[#0A3B2C] text-white text-center py-3">
                <p className="font-serif-zf text-lg">{day.day}</p>
              </div>
              <div className="p-3 space-y-2">
                {day.classes.map((cls) => {
                  const [time, ...nameParts] = cls.split(" ")
                  const name = nameParts.join(" ")
                  return (
                    <div key={cls} className="text-xs border-b border-[#0A3B2C]/5 pb-2 last:border-0 last:pb-0">
                      <p className="text-[#C5A059] font-medium">{time}</p>
                      <p className="text-[#0A3B2C]">{name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-[#64746B]">
          Times shown in PST · First class is always free · Mats and props provided
        </p>
      </div>
    </section>
  )
}

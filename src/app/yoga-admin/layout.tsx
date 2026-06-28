"use client"

import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/yoga-admin" },
  { label: "Enquiries", icon: MessageSquare, href: "/yoga-admin/enquiries" },
  { label: "Members", icon: Users, href: "/yoga-admin/members" },
  { label: "Classes", icon: Calendar, href: "/yoga-admin/classes" },
  { label: "Pages", icon: FileText, href: "/yoga-admin/pages" },
  { label: "Settings", icon: Settings, href: "/yoga-admin/settings" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans antialiased">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-[#E5E7EB] bg-white">
        <div className="flex h-14 items-center gap-2 border-b border-[#E5E7EB] px-5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#10B981] text-white text-xs font-bold">
            ZF
          </div>
          <span className="text-sm font-semibold text-[#111827]">ZenFlow Admin</span>
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                pathname === item.href
                  ? "bg-[#ECFDF5] text-[#047857]"
                  : "text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]"
              }`}
            >
              <item.icon className="size-4" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-[#E5E7EB] p-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all">
            <div className="flex size-7 items-center justify-center rounded-full bg-[#10B981] text-white text-xs font-medium">
              MK
            </div>
            <span className="flex-1 text-left">Manish K.</span>
            <ChevronDown className="size-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="flex h-14 items-center gap-4 border-b border-[#E5E7EB] bg-white px-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search enquiries, members..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] py-1.5 pl-9 pr-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
          <button className="relative rounded-lg p-2 text-[#6B7280] hover:bg-[#F3F4F6] transition-all">
            <Bell className="size-4" />
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#EF4444]" />
          </button>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span className="hidden sm:block">Last sync: 2m ago</span>
            <div className="size-2 rounded-full bg-[#10B981]" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

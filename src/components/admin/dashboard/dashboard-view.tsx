"use client"

import { useEffect, useRef } from "react"
import {
  Users,
  MessageSquare,
  CalendarCheck,
  MoreHorizontal,
  Eye,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  FileText,
} from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchEnquiries } from "@/redux/slices/enquiries/enquiriesThunk"
import { selectEnquiries, selectEnquiriesLoading } from "@/redux/slices/enquiries/enquiriesSlice"
import type { Enquiry, EnquiryStatus } from "@/redux/slices/enquiries/enquiriesType"

const statusConfig: Record<EnquiryStatus, { icon: typeof AlertCircle; class: string }> = {
  new: { icon: AlertCircle, class: "bg-[#FEF3C7] text-[#D97706]" },
  read: { icon: Eye, class: "bg-[#EFF6FF] text-[#2563EB]" },
  replied: { icon: CheckCircle2, class: "bg-[#ECFDF5] text-[#059669]" },
  closed: { icon: Clock, class: "bg-[#F3F4F6] text-[#6B7280]" },
}

function StatCard({ loading, icon, iconClass, value, label }: { loading: boolean; icon: React.ReactNode; iconClass: string; value: number; label: string }) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className={`rounded-lg p-2 ${iconClass}`}>{icon}</div>
      </div>
      {loading ? (
        <div className="space-y-2">
          <div className="h-7 w-20 animate-pulse rounded bg-[#E5E7EB]" />
          <div className="h-3 w-24 animate-pulse rounded bg-[#E5E7EB]" />
        </div>
      ) : (
        <>
          <p className="text-2xl font-semibold text-[#111827] tracking-tight">{value}</p>
          <p className="text-xs text-[#6B7280] mt-0.5">{label}</p>
        </>
      )}
    </div>
  )
}

function TableSkeleton() {
  return (
    <div className="divide-y divide-[#E5E7EB]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-5 py-4">
          <div className="flex-1 space-y-2">
            <div className="h-3 w-16 animate-pulse rounded bg-[#E5E7EB]" />
            <div className="h-3 w-40 animate-pulse rounded bg-[#E5E7EB]" />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-5 w-16 animate-pulse rounded-full bg-[#E5E7EB]" />
            <div className="h-3 w-14 animate-pulse rounded bg-[#E5E7EB]" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function DashboardView() {
  const dispatch = useAppDispatch()
  const enquiries = useAppSelector(selectEnquiries)
  const loading = useAppSelector(selectEnquiriesLoading)
  const fetched = useRef(false)

  useEffect(() => {
    if (!fetched.current) {
      fetched.current = true
      dispatch(fetchEnquiries())
    }
  }, [dispatch])

  const recentEnquiries = enquiries.slice(0, 5)
  const newThisMonth = enquiries.filter((e) => e.status === "new").length
  const pending = enquiries.filter((e) => e.status === "new" || e.status === "read").length

  const formatDate = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    return `${Math.floor(hrs / 24)}d ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[#111827] tracking-tight">Dashboard</h1>
          <p className="text-sm text-[#6B7280] mt-0.5">Welcome back, Manish. Here&apos;s your studio overview.</p>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#10B981] px-4 py-2 text-sm font-medium text-white hover:bg-[#059669] transition-all">
          <Plus className="size-4" />
          New Enquiry
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard loading={loading} icon={<Users className="size-4" />} iconClass="bg-[#ECFDF5] text-[#10B981]" value={enquiries.length} label="Total Enquiries" />
        <StatCard loading={loading} icon={<MessageSquare className="size-4" />} iconClass="bg-[#EFF6FF] text-[#3B82F6]" value={newThisMonth} label="New This Month" />
        <StatCard loading={loading} icon={<CalendarCheck className="size-4" />} iconClass="bg-[#FEF3C7] text-[#F59E0B]" value={pending} label="Pending Responses" />
        <StatCard loading={loading} icon={<Clock className="size-4" />} iconClass="bg-[#F3F4F6] text-[#6B7280]" value={enquiries.filter((e) => e.status === "closed").length} label="Closed" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_384px] gap-6">
        <div className="rounded-xl border border-[#E5E7EB] bg-white">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
            <h2 className="text-sm font-semibold text-[#111827]">Recent Enquiries</h2>
            <a href="/yoga-admin/enquiries" className="text-xs font-medium text-[#10B981] hover:text-[#059669] transition-colors">
              View all
            </a>
          </div>
          <div className="divide-y divide-[#E5E7EB]">
            {loading ? <TableSkeleton /> : recentEnquiries.map((enquiry) => {
              const StatusIcon = statusConfig[enquiry.status].icon
              return (
                <div key={enquiry.id} className="group flex items-center gap-4 px-5 py-3 hover:bg-[#F9FAFB] transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#9CA3AF]">{enquiry.id.slice(0, 8)}</span>
                      <span className="text-sm font-medium text-[#111827] truncate">{enquiry.name}</span>
                    </div>
                    <p className="text-xs text-[#6B7280] truncate mt-0.5">{enquiry.subject}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusConfig[enquiry.status].class}`}>
                      <StatusIcon className="size-3" />
                      {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                    </span>
                    <span className="text-xs text-[#9CA3AF] whitespace-nowrap">{formatDate(enquiry.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all">
                      <Eye className="size-3.5" />
                    </button>
                    <button className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all">
                      <CheckCircle2 className="size-3.5" />
                    </button>
                    <button className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#DC2626] transition-all">
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
            <h3 className="text-sm font-semibold text-[#111827] mb-3">Open Tasks</h3>
            <div className="space-y-2">
              {[
                { task: "Review membership cancellation", priority: "High" as const },
                { task: "Approve new instructor profile", priority: "Medium" as const },
                { task: "Update class schedule", priority: "Low" as const },
                { task: "Follow up on corporate inquiry", priority: "High" as const },
              ].map((item) => (
                <div key={item.task} className="flex items-start gap-3 rounded-lg border border-[#E5E7EB] p-3 hover:shadow-sm transition-shadow">
                  <div className={`mt-0.5 size-2 shrink-0 rounded-full ${
                    item.priority === "High" ? "bg-[#EF4444]" :
                    item.priority === "Medium" ? "bg-[#F59E0B]" : "bg-[#9CA3AF]"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#111827] truncate">{item.task}</p>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#6B7280]">{item.priority}</span>
                  </div>
                  <button className="shrink-0 rounded-lg p-1 text-[#9CA3AF] hover:bg-[#F3F4F6] transition-all">
                    <MoreHorizontal className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
            <h3 className="text-sm font-semibold text-[#111827] mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Add New Class", icon: CalendarCheck },
                { label: "Send Newsletter", icon: MessageSquare },
                { label: "Generate Report", icon: FileText },
              ].map((action) => (
                <button key={action.label} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all">
                  <action.icon className="size-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-sm">
          <span className="text-xs text-[#6B7280]">{pending} pending enquiries</span>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <a href="/yoga-admin/enquiries" className="text-xs font-medium text-[#10B981] hover:text-[#059669] transition-colors">Review now</a>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <button className="text-xs font-medium text-[#6B7280] hover:text-[#111827] transition-colors">Dismiss</button>
        </div>
      </div>
    </div>
  )
}

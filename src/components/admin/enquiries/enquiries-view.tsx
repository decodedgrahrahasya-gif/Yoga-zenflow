"use client"

import { useEffect, useState, useRef } from "react"
import {
  Eye,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  SlidersHorizontal,
  RefreshCw,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { fetchEnquiries } from "@/redux/slices/enquiries/enquiriesThunk"
import { selectEnquiries, selectEnquiriesLoading } from "@/redux/slices/enquiries/enquiriesSlice"
import type { Enquiry, EnquiryStatus } from "@/redux/slices/enquiries/enquiriesType"

const statusConfig: Record<EnquiryStatus, { icon: typeof AlertCircle; class: string; label: string }> = {
  new: { icon: AlertCircle, class: "bg-[#FEF3C7] text-[#D97706]", label: "New" },
  read: { icon: Eye, class: "bg-[#EFF6FF] text-[#2563EB]", label: "Read" },
  replied: { icon: CheckCircle2, class: "bg-[#ECFDF5] text-[#059669]", label: "Replied" },
  closed: { icon: Clock, class: "bg-[#F3F4F6] text-[#6B7280]", label: "Closed" },
}

export function EnquiriesView() {
  const dispatch = useAppDispatch()
  const enquiries = useAppSelector(selectEnquiries)
  const loading = useAppSelector(selectEnquiriesLoading)

  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<EnquiryStatus | "all">("all")
  const [sortField, setSortField] = useState<keyof Enquiry>("createdAt")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const fetched = useRef(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (!fetched.current) {
      fetched.current = true
      dispatch(fetchEnquiries())
    }
  }, [dispatch])

  if (!mounted) return null

  const filtered = enquiries
    .filter((e) => {
      if (statusFilter !== "all" && e.status !== statusFilter) return false
      if (!search) return true
      const q = search.toLowerCase()
      return (
        e.name.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.subject.toLowerCase().includes(q) ||
        e.id.toLowerCase().includes(q)
      )
    })
    .sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1
      const aVal = String(a[sortField] ?? "")
      const bVal = String(b[sortField] ?? "")
      return dir * aVal.localeCompare(bVal)
    })

  const toggleSort = (field: keyof Enquiry) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    else { setSortField(field); setSortDir("desc") }
  }

  const SortIcon = () => (sortDir === "asc" ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />)

  const selected = enquiries.find((e) => e.id === selectedId)

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex gap-6 h-full">
      {/* Left: Table */}
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-semibold text-[#111827] tracking-tight">Enquiries</h1>
            <p className="text-sm text-[#6B7280] mt-0.5">{loading ? "Loading..." : `${filtered.length} total enquiries`}</p>
          </div>
          <button
            onClick={() => dispatch(fetchEnquiries())}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm text-[#6B7280] hover:bg-[#F3F4F6] transition-all"
          >
            <RefreshCw className="size-3.5" />
            Refresh
          </button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, subject..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-white py-1.5 pl-9 pr-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-1.5">
            {(["all", "new", "read", "replied", "closed"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  statusFilter === s
                    ? "bg-[#10B981] text-white"
                    : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:bg-[#F3F4F6]"
                }`}
              >
                {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
          <button className="rounded-lg border border-[#E5E7EB] bg-white p-1.5 text-[#6B7280] hover:bg-[#F3F4F6] transition-all">
            <SlidersHorizontal className="size-3.5" />
          </button>
        </div>

        <div className="flex-1 rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                {[
                  { key: "id", label: "ID", sortable: true },
                  { key: "name", label: "Name", sortable: true },
                  { key: "email", label: "Email", sortable: false },
                  { key: "subject", label: "Subject", sortable: true },
                  { key: "status", label: "Status", sortable: false },
                  { key: "createdAt", label: "Date", sortable: true },
                ].map((col) => (
                  <th
                    key={col.key}
                    className={`px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] ${
                      col.sortable ? "cursor-pointer select-none hover:text-[#111827]" : ""
                    }`}
                    onClick={() => col.sortable && toggleSort(col.key as keyof Enquiry)}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {col.sortable && sortField === col.key && <SortIcon />}
                    </span>
                  </th>
                ))}
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {filtered.map((enquiry) => {
                const StatusIcon = statusConfig[enquiry.status].icon
                return (
                  <tr
                    key={enquiry.id}
                    onClick={() => setSelectedId(enquiry.id)}
                    className={`group cursor-pointer transition-colors ${
                      selectedId === enquiry.id ? "bg-[#ECFDF5]" : "hover:bg-[#F9FAFB]"
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className="text-xs font-mono text-[#9CA3AF]">{enquiry.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-[#111827]">{enquiry.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-[#6B7280]">{enquiry.email}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-[#6B7280] truncate max-w-[200px] inline-block">{enquiry.subject}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusConfig[enquiry.status].class}`}>
                        <StatusIcon className="size-3" />
                        {statusConfig[enquiry.status].label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-[#9CA3AF] whitespace-nowrap">{formatDate(enquiry.createdAt)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedId(enquiry.id) }}
                          className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] transition-all"
                        >
                          <Eye className="size-3.5" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#ECFDF5] hover:text-[#10B981] transition-all"
                        >
                          <CheckCircle2 className="size-3.5" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#DC2626] transition-all"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Detail Panel */}
      <div className="w-96 shrink-0">
        {selected ? (
          <div className="rounded-xl border border-[#E5E7EB] bg-white h-full">
            <div className="border-b border-[#E5E7EB] px-5 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#9CA3AF]">{selected.id}</span>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusConfig[selected.status].class}`}>
                  {statusConfig[selected.status].label}
                </span>
              </div>
              <h2 className="text-sm font-semibold text-[#111827]">{selected.subject}</h2>
            </div>
            <div className="p-5 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">{selected.name}</p>
                    <p className="text-xs text-[#6B7280]">{selected.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#F3F4F6] text-[#6B7280]">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <p className="text-[#111827]">{selected.phone ?? "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#F3F4F6] text-[#6B7280]">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <p className="text-[#111827]">{formatDate(selected.createdAt)}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Message</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{selected.message}</p>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#10B981] py-2 text-sm font-medium text-white hover:bg-[#059669] transition-all">
                  <MessageSquare className="size-4" />
                  Reply
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] transition-all">
                    <CheckCircle2 className="size-4" />
                    Mark Read
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#DC2626] hover:bg-[#FEF2F2] transition-all">
                    <Trash2 className="size-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[#E5E7EB] bg-white h-full flex items-center justify-center">
            <div className="text-center p-8">
              <MessageSquare className="size-8 mx-auto text-[#D1D5DB] mb-3" />
              <p className="text-sm text-[#9CA3AF]">Select an enquiry to view details</p>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-sm">
          <span className="text-xs text-[#6B7280]">{filtered.length} enquiries</span>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <span className="text-xs font-medium text-[#10B981]">
            {enquiries.filter((e) => e.status === "new").length} unread
          </span>
        </div>
      </div>
    </div>
  )
}

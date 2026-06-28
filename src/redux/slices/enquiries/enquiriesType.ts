export type EnquiryStatus = "new" | "read" | "replied" | "closed"

export interface Enquiry {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: EnquiryStatus
  reply?: string
  createdAt: string
  updatedAt: string
}

export interface EnquiryFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface EnquiriesState {
  items: Enquiry[]
  selectedEnquiry: Enquiry | null
  loading: boolean
  submitting: boolean
  error: string | null
    isfetchedEnquiry?:boolean

}

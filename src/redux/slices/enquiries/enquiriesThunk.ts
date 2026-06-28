import { createAsyncThunk } from "@reduxjs/toolkit"
import { Enquiry, EnquiryFormData } from "./enquiriesType"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const submitEnquiry = createAsyncThunk<
  Enquiry,
  EnquiryFormData,
  { rejectValue: string }
>("enquiries/submit", async (formData, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    if (!response.ok) throw new Error("Failed to submit enquiry")
    const json = await response.json()
    return json.data as Enquiry
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const fetchEnquiries = createAsyncThunk<
  Enquiry[],
  void,
  { rejectValue: string }
>("enquiries/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/enquiries`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to fetch enquiries")
    const json = await response.json()
    return json.data as Enquiry[]
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const fetchEnquiryById = createAsyncThunk<
  Enquiry,
  string,
  { rejectValue: string }
>("enquiries/fetchById", async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/enquiries/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to fetch enquiry")
    const json = await response.json()
    return json.data as Enquiry
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

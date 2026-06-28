import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { EnquiriesState } from "./enquiriesType"
import { submitEnquiry, fetchEnquiries, fetchEnquiryById } from "./enquiriesThunk"

const initialState: EnquiriesState = {
  items: [],
  selectedEnquiry: null,
  loading: false,
  submitting: false,
  error: null,
  isfetchedEnquiry:false,
}

const enquiriesSlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {
    clearEnquiryError: (state) => {
      state.error = null
    },
    setSelectedEnquiry: (state, action: PayloadAction<string | null>) => {
      state.selectedEnquiry =
        action.payload === null
          ? null
          : state.items.find((e) => e.id === action.payload) ?? null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEnquiry.pending, (state) => {
        state.submitting = true
        state.error = null
      })
      .addCase(submitEnquiry.fulfilled, (state, action) => {
        state.submitting = false
        state.items.unshift(action.payload)
      })
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.submitting = false
        state.error = action.payload ?? "Failed to submit enquiry"
      })

    builder
      .addCase(fetchEnquiries.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to fetch enquiries"
      })

    builder
      .addCase(fetchEnquiryById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEnquiryById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedEnquiry = action.payload
      })
      .addCase(fetchEnquiryById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to fetch enquiry"
      })
  },
})

export const { clearEnquiryError, setSelectedEnquiry } = enquiriesSlice.actions
export default enquiriesSlice.reducer

export const selectEnquiries = (state: RootState) => state.enquiries.items
export const selectSelectedEnquiry = (state: RootState) => state.enquiries.selectedEnquiry
export const selectEnquiriesLoading = (state: RootState) => state.enquiries.loading
export const selectEnquiriesSubmitting = (state: RootState) => state.enquiries.submitting
export const selectEnquiriesError = (state: RootState) => state.enquiries.error

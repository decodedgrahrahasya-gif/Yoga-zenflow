import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { Page, PagesState } from "./pagesType"
import {
  fetchPages,
  fetchPageBySlug,
  createPage,
  updatePage,
  deletePage,
} from "./pagesThunk"

const initialState: PagesState = {
  items: [],
  currentPage: null,
  loading: false,
  error: null,
}

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    clearPageError: (state) => {
      state.error = null
    },
    setCurrentPage: (state, action: PayloadAction<Page | null>) => {
      state.currentPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to fetch pages"
      })

    builder
      .addCase(fetchPageBySlug.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPageBySlug.fulfilled, (state, action) => {
        state.loading = false
        state.currentPage = action.payload
      })
      .addCase(fetchPageBySlug.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Page not found"
      })

    builder
      .addCase(createPage.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createPage.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(createPage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to create page"
      })

    builder
      .addCase(updatePage.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updatePage.fulfilled, (state, action) => {
        state.loading = false
        const index = state.items.findIndex((p) => p._id === action.payload._id)
        if (index !== -1) state.items[index] = action.payload
        if (state.currentPage?._id === action.payload._id) {
          state.currentPage = action.payload
        }
      })
      .addCase(updatePage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to update page"
      })

    builder
      .addCase(deletePage.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePage.fulfilled, (state, action) => {
        state.loading = false
        state.items = state.items.filter((p) => p._id !== action.payload)
        if (state.currentPage?._id === action.payload) {
          state.currentPage = null
        }
      })
      .addCase(deletePage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to delete page"
      })
  },
})

export const { clearPageError, setCurrentPage } = pagesSlice.actions
export default pagesSlice.reducer

export const selectPages = (state: RootState) => state.pages.items
export const selectCurrentPage = (state: RootState) => state.pages.currentPage
export const selectPagesLoading = (state: RootState) => state.pages.loading
export const selectPagesError = (state: RootState) => state.pages.error

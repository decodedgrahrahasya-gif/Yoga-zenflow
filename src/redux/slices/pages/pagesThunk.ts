import { createAsyncThunk } from "@reduxjs/toolkit"
import { Page } from "./pagesType"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchPages = createAsyncThunk<
  Page[],
  void,
  { rejectValue: string }
>("pages/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pages`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to fetch pages")
    const json = await response.json()
    return json.data as Page[]
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const fetchPageBySlug = createAsyncThunk<
  Page,
  string,
  { rejectValue: string }
>("pages/fetchBySlug", async (slug, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pages/${slug}`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Page not found")
    const json = await response.json()
    return json.data as Page
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const createPage = createAsyncThunk<
  Page,
  Partial<Page>,
  { rejectValue: string }
>("pages/create", async (pageData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pageData),
    })
    if (!response.ok) throw new Error("Failed to create page")
    const json = await response.json()
    return json.data as Page
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const updatePage = createAsyncThunk<
  Page,
  { id: string; data: Partial<Page> },
  { rejectValue: string }
>("pages/update", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update page")
    const json = await response.json()
    return json.data as Page
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const deletePage = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("pages/delete", async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/pages/${id}`, {
      method: "DELETE",
    })
    if (!response.ok) throw new Error("Failed to delete page")
    return id
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

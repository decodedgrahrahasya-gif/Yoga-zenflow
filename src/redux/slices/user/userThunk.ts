import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserProfile } from "./userType"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchUserProfile = createAsyncThunk<
  UserProfile,
  void,
  { rejectValue: string }
>("user/fetchProfile", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to fetch profile")
    const json = await response.json()
    return json.data as UserProfile
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const updateUserProfile = createAsyncThunk<
  UserProfile,
  Partial<UserProfile>,
  { rejectValue: string }
>("user/updateProfile", async (profileData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    })
    if (!response.ok) throw new Error("Failed to update profile")
    const json = await response.json()
    return json.data as UserProfile
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const loginUser = createAsyncThunk<
  { token: string; profile: UserProfile },
  { email: string; password: string },
  { rejectValue: string }
>("user/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (!response.ok) throw new Error("Invalid credentials")
    const json = await response.json()
    return json.data as { token: string; profile: UserProfile }
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

export const registerUser = createAsyncThunk<
  { token: string; profile: UserProfile },
  { email: string; password: string; firstName: string; lastName: string },
  { rejectValue: string }
>("user/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    if (!response.ok) throw new Error("Registration failed")
    const json = await response.json()
    return json.data as { token: string; profile: UserProfile }
  } catch (error) {
    return rejectWithValue((error as Error).message)
  }
})

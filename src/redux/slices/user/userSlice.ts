import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"
import { UserState } from "./userType"
import {
  fetchUserProfile,
  updateUserProfile,
  loginUser,
  registerUser,
} from "./userThunk"

const initialState: UserState = {
  profile: null,
  auth: { token: null, isAuthenticated: false },
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.profile = null
      state.auth = { token: null, isAuthenticated: false }
      state.error = null
    },
    clearUserError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to fetch profile"
      })

    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Failed to update profile"
      })

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload.profile
        state.auth = { token: action.payload.token, isAuthenticated: true }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Login failed"
      })

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload.profile
        state.auth = { token: action.payload.token, isAuthenticated: true }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Registration failed"
      })
  },
})

export const { logout, clearUserError } = userSlice.actions
export default userSlice.reducer

export const selectUserProfile = (state: RootState) => state.user.profile
export const selectUserAuth = (state: RootState) => state.user.auth
export const selectUserLoading = (state: RootState) => state.user.loading
export const selectUserError = (state: RootState) => state.user.error

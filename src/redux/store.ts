import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user/userSlice"
import enquiriesReducer from "./slices/enquiries/enquiriesSlice"
import pagesReducer from "./slices/pages/pagesSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    enquiries: enquiriesReducer,
    pages: pagesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

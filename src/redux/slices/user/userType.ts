export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: "customer" | "admin" | "instructor"
  addresses: Address[]
  membershipId?: string
  membershipTier?: "basic" | "premium" | "unlimited"
  createdAt: string
  updatedAt: string
}

export interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

export interface UserState {
  profile: UserProfile | null
  auth: AuthState
  loading: boolean
  error: string | null
}

import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'ems_user'

// Read the saved user from Local Storage when the app starts.
// If nothing is saved, or the saved text is broken, start logged out.
function loadUserFromStorage() {
  try {
    const savedUser = localStorage.getItem(STORAGE_KEY)
    return savedUser ? JSON.parse(savedUser) : null
  } catch {
    return null
  }
}

const initialState = {
  user: loadUserFromStorage(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Called after a successful login or registration.
    loginUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload))
    },
    // Clears the logged-in user and removes the saved copy.
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

export const { loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer
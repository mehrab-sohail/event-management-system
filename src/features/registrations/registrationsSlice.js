import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'ems_registrations'

function loadRegistrations() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const registrationsSlice = createSlice({
  name: 'registrations',
  initialState: {
    items: loadRegistrations(),
  },
  reducers: {
    // Adds an event, but only if this user hasn't registered it already.
    registerForEvent: (state, action) => {
      const { userEmail, event } = action.payload
      const alreadyRegistered = state.items.some(
        (item) => item.userEmail === userEmail && item.eventId === event.id
      )
      if (!alreadyRegistered) {
        state.items.push({
          userEmail,
          eventId: event.id,
          name: event.name,
          date: event.date,
          venue: event.venue,
          image: event.image,
        })
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },
    // Removes one event from this user's registrations.
    cancelRegistration: (state, action) => {
      const { userEmail, eventId } = action.payload
      state.items = state.items.filter(
        (item) => !(item.userEmail === userEmail && item.eventId === eventId)
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },
  },
})

export const { registerForEvent, cancelRegistration } = registrationsSlice.actions
export default registrationsSlice.reducer
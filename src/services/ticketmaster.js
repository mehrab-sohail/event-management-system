const API_KEY = import.meta.env.VITE_TICKETMASTER_KEY
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2'

// Fetches a short list of events. Returns an array, or throws an error.
export async function fetchEvents() {
  const url = `${BASE_URL}/events.json?apikey=${API_KEY}&size=5&countryCode=US`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Ticketmaster request failed with status ${response.status}`)
  }

  const data = await response.json()
  const events = data._embedded?.events ?? []

  return events.map((event) => ({
    id: event.id,
    name: event.name,
    date: event.dates?.start?.localDate ?? 'Date to be announced',
    venue: event._embedded?.venues?.[0]?.name ?? 'Venue to be announced',
    image: event.images?.[0]?.url ?? '',
  }))
}
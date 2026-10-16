const API_KEY = import.meta.env.VITE_TICKETMASTER_KEY
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2'

// Fetches events. Pass a keyword to search, or leave it empty for all events.
export async function fetchEvents(keyword = '') {
  const params = new URLSearchParams({
    apikey: API_KEY,
    size: '12',
    countryCode: 'US',
    sort: 'date,asc',
  })

  if (keyword.trim()) {
    params.set('keyword', keyword.trim())
  }

 

  const response = await fetch(`${BASE_URL}/events.json?${params.toString()}`)

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
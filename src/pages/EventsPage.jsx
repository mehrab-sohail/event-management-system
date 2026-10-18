import { useEffect, useState } from 'react'
import CategoryChips from '../components/CategoryChips.jsx'
import EventCard from '../components/EventCard.jsx'
import { fetchEvents } from '../services/ticketmaster.js'

const DATE_OPTIONS = [
  { label: 'All dates', days: 0 },
  { label: 'Next 7 days', days: 7 },
  { label: 'Next 30 days', days: 30 },
  { label: 'Next 90 days', days: 90 },
]

// Returns true if the event date falls within the chosen number of days from today.
// Returns true if the event date falls within the chosen number of days from today.
// Compares calendar dates, so events happening today are included.
function withinDays(dateString, days) {
  if (days === 0) return true
  if (!dateString || isNaN(new Date(dateString))) return false

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const eventDate = new Date(dateString + 'T00:00:00')
  const limit = new Date(today)
  limit.setDate(limit.getDate() + days)

  return eventDate >= today && eventDate <= limit
}

function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchText, setSearchText] = useState('')
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')
  const [dateRange, setDateRange] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError('')
    fetchEvents(keyword, category)
      .then((data) => setEvents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [keyword, category])

  function handleSearch(e) {
    e.preventDefault()
    setKeyword(searchText)
  }

  const visibleEvents = events.filter((event) => withinDays(event.date, dateRange))

  return (
    <section>
      <h1>Events</h1>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search events, artists, venues"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <CategoryChips selected={category} onSelect={setCategory} />

      <div className="date-filter">
        <label htmlFor="date-range">Show events:</label>
        <select
          id="date-range"
          value={dateRange}
          onChange={(e) => setDateRange(Number(e.target.value))}
        >
          {DATE_OPTIONS.map((option) => (
            <option key={option.label} value={option.days}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p>Could not load events: {error}</p>}
      {!loading && !error && visibleEvents.length === 0 && <p>No events found.</p>}

      {!loading && !error && (
        <div className="event-grid">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  )
}

export default EventsPage
import { useEffect, useState } from 'react'
import CategoryChips from '../components/CategoryChips.jsx'
import EventCard from '../components/EventCard.jsx'
import { fetchEvents } from '../services/ticketmaster.js'

function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchText, setSearchText] = useState('')
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')

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

      {loading && <p>Loading events...</p>}
      {error && <p>Could not load events: {error}</p>}
      {!loading && !error && events.length === 0 && <p>No events found.</p>}

      {!loading && !error && (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  )
}

export default EventsPage
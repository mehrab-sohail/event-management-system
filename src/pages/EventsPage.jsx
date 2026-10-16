import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { fetchEvents } from '../services/ticketmaster.js'

function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    fetchEvents(keyword)
      .then((data) => setEvents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [keyword])

  return (
    <section>
      <h1>Events</h1>
      <SearchBar onSearch={setKeyword} />

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
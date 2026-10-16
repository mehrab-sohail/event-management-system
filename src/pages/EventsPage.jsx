import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard.jsx'
import { fetchEvents } from '../services/ticketmaster.js'

function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading events...</p>
  if (error) return <p>Could not load events: {error}</p>

  return (
    <section>
      <h1>Events</h1>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default EventsPage
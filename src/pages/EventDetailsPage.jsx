import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchEventById } from '../services/ticketmaster.js'

function EventDetailsPage() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchEventById(id)
      .then((data) => setEvent(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading event...</p>
  if (error) return <p>Could not load event: {error}</p>
  if (!event) return null

  return (
    <section className="details">
      {event.image && <img src={event.image} alt={event.name} className="details-image" />}
      <h1>{event.name}</h1>
      <p><strong>Date:</strong> {event.date} {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      {event.url && (
        <a href={event.url} target="_blank" rel="noreferrer" className="details-link">
          Buy tickets on Ticketmaster
        </a>
      )}
    </section>
  )
}

export default EventDetailsPage
import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.image} alt={event.name} className="event-card-image" />
      <div className="event-card-body">
        <p className="event-card-date">{event.date}</p>
        <h3 className="event-card-title">{event.name}</h3>
        <p className="event-card-venue">{event.venue}</p>
        <Link to={`/events/${event.id}`} className="event-card-link">
          View details
        </Link>
      </div>
    </article>
  )
}

export default EventCard
import { useDispatch, useSelector } from 'react-redux'
import { cancelRegistration } from '../features/registrations/registrationsSlice.js'

function MyEventsPage() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const registrations = useSelector((state) => state.registrations.items)

  if (!user) {
    return <p>Please log in to see your events.</p>
  }

  const myEvents = registrations.filter((item) => item.userEmail === user.email)

  // Compare each event date with today to split Upcoming and Completed.
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = myEvents.filter((item) => item.date >= today)
  const completed = myEvents.filter((item) => item.date < today)

  function renderList(list, emptyText) {
    if (list.length === 0) return <p>{emptyText}</p>
    return (
      <div className="event-grid">
        {list.map((item) => (
          <article key={item.eventId} className="event-card">
            {item.image && <img src={item.image} alt={item.name} className="event-card-image" />}
            <div className="event-card-body">
              <p className="event-card-date">{item.date}</p>
              <h3 className="event-card-title">{item.name}</h3>
              <p className="event-card-venue">{item.venue}</p>
              <button
                type="button"
                className="details-link details-cancel"
                onClick={() => dispatch(cancelRegistration({ userEmail: user.email, eventId: item.eventId }))}
              >
                Cancel registration
              </button>
            </div>
          </article>
        ))}
      </div>
    )
  }

  return (
    <section>
      <h1>My Events</h1>
      <h2>Upcoming</h2>
      {renderList(upcoming, 'You have no upcoming events.')}
      <h2>Completed</h2>
      {renderList(completed, 'You have no completed events.')}
    </section>
  )
}

export default MyEventsPage
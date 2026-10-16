import EventCard from '../components/EventCard.jsx'

// Temporary sample data. We'll replace this with Ticketmaster results in step 9.
const sampleEvents = [
  {
    id: '1',
    name: 'Summer Music Festival',
    date: 'Sat, 15 Nov 2026 · 7:00 PM',
    venue: 'Lahore Expo Centre',
    image: 'https://placehold.co/600x400?text=Music+Festival',
  },
  {
    id: '2',
    name: 'Tech Conference 2026',
    date: 'Sun, 22 Nov 2026 · 10:00 AM',
    venue: 'Serena Hotel',
    image: 'https://placehold.co/600x400?text=Tech+Conference',
  },
  {
    id: '3',
    name: 'Stand-up Comedy Night',
    date: 'Fri, 5 Dec 2026 · 9:00 PM',
    venue: 'Alhamra Arts Council',
    image: 'https://placehold.co/600x400?text=Comedy+Night',
  },
]

function EventsPage() {
  return (
    <section>
      <h1>Events</h1>
      <div className="event-grid">
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default EventsPage
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/events" className="navbar-brand">
        EventHub
      </Link>
      <nav className="navbar-links">
        <Link to="/events">Events</Link>
        <Link to="/my-events">My Events</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Navbar

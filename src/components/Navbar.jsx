import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice.js'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  function handleLogout() {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <header className="navbar">
      <Link to="/events" className="navbar-brand">
        EventHub
      </Link>
      <nav className="navbar-links">
        <Link to="/events">Events</Link>
        <Link to="/my-events">My Events</Link>
        {user ? (
          <button type="button" className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  )
}

export default Navbar
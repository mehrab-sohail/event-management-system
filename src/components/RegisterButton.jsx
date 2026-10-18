import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerForEvent, cancelRegistration } from '../features/registrations/registrationsSlice.js'

function RegisterButton({ event }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const registrations = useSelector((state) => state.registrations.items)

  if (!user) {
    return (
      <p>
        <Link to="/login">Log in</Link> to register for this event.
      </p>
    )
  }

  const isRegistered = registrations.some(
    (item) => item.userEmail === user.email && item.eventId === event.id
  )

  if (isRegistered) {
    return (
      <button
        type="button"
        className="details-link details-cancel"
        onClick={() => dispatch(cancelRegistration({ userEmail: user.email, eventId: event.id }))}
      >
        Cancel registration
      </button>
    )
  }

  return (
    <button
      type="button"
      className="details-link"
      onClick={() => dispatch(registerForEvent({ userEmail: user.email, event }))}
    >
      Register for this event
    </button>
  )
}

export default RegisterButton
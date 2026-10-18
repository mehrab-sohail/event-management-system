import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import EventsPage from './pages/EventsPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/events" replace />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import EventsPage from './pages/EventsPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/events" replace />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
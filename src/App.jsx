import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EventsPage from './pages/EventsPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/events" replace />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
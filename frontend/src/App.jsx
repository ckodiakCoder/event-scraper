import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [events, setEvents] = useState([])
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Mock data with better visual contrast
  useEffect(() => {
    setEvents([
      {
        title: "Sydney Music Festival",
        date: "May 20, 2025",
        link: "#"
      },
      {
        title: "Tech Conference",
        date: "May 22, 2025",
        link: "#"
      }
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Upcoming Events in Sydney
        </h1>
        <p className="text-xl text-gray-600">
          Curated experiences in your city
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-500">📅 {event.date}</p>
            </div>
            <button
              onClick={() => {
                setSelectedEvent(event)
                setShowModal(true)
              }}
              className="w-full py-4 bg-gray-900 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              GET TICKETS
            </button>
          </div>
        ))}
      </div>

      {/* Email Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-xl p-8 w-full max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get tickets for {selectedEvent?.title}
            </h3>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Email registered: ${email}`)
                  window.open(selectedEvent?.link)
                  setShowModal(false)
                }}
                disabled={!email.includes('@')}
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
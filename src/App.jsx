import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Settings from './components/Settings'
import AppRoutes from './routes'

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenSettings={() => setSettingsOpen(true)} />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <Settings open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}

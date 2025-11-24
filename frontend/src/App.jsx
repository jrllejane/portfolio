import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutMe from './pages/AboutMe'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import UIDesigns from './pages/UIDesigns'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ui-designs" element={<UIDesigns />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

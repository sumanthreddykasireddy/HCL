import Landing from './pages/Landing'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Register from './components/Register'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Landing />
      <Routes>
        <Route path="/" element={<div style={{ padding: '1rem' }}><h2>Welcome</h2></div>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [hash])

  const showCoursesPage = hash === '#courses'
  const showContactPage = hash === '#contact'
  const showAboutPage = hash === '#about'

  return (
    <div className="page-shell">
      <Navbar />
      {showCoursesPage ? (
        <main className="home-section">
          <div className="home-content">
            <Courses />
          </div>
        </main>
      ) : showContactPage ? (
        <main className="home-section">
          <div className="home-content contact-page-container">
            <ContactUs />
          </div>
        </main>
      ) : showAboutPage ? (
        <main className="home-section">
          <div className="home-content about-page-container">
            <AboutUs />
          </div>
        </main>
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  )
}

export default App

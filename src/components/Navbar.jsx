import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Rendus logo" className="logo-image" />
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#courses" className="courses-link" onClick={closeMenu}>Courses</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

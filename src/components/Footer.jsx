function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <section className="footer-brand">
          <img src="/logo.png" alt="Rendus logo" className="footer-logo" />
          <p>
            Empowering the next generation with cutting-edge courses and exclusive internship
            opportunities. Building careers, one student at a time.
          </p>
          <ul className="footer-policy-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </section>

        <section>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="contact-icon-svg">
                  <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>645, 10th Main Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</span>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="contact-icon-svg">
                  <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1 .33 2.08.5 3.18.5a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3.5a1 1 0 011-1h3.54a1 1 0 011 1c0 1.1.17 2.18.5 3.18a1 1 0 01-.24 1z" />
                </svg>
              </span>
              <a href="tel:+919686201981">+91 9686201981</a>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="contact-icon-svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>
              <a href="mailto:support@RendusTechnologies.in">support@RendusTechnologies.in</a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Follow Us</h3>
          <div className="social-row">
            <a href="#" aria-label="LinkedIn" className="social-circle social-linkedin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 9H10v9H6.5zM8.2 5.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12 9h3.3v1.3h.1c.5-.9 1.7-1.6 3.4-1.6 3.3 0 3.9 2.1 3.9 4.9V18H19v-3.8c0-.9 0-2.1-1.4-2.1s-1.6 1-1.6 2V18H12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-circle">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-circle social-linkedin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h3l1-3h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="social-circle social-linkedin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 8.5c-.2-1.3-1.2-2.3-2.5-2.5C16.8 5.7 14.8 5.5 12 5.5s-4.8.2-6.5.5C4.2 6.2 3.2 7.2 3 8.5c-.3 1.9-.3 5.1 0 7 .2 1.3 1.2 2.3 2.5 2.5 1.7.3 3.7.5 6.5.5s4.8-.2 6.5-.5c1.3-.2 2.3-1.2 2.5-2.5.3-1.9.3-5.1 0-7zM10 15V9.8L15 12.4 10 15z" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      <div className="footer-meta">
        <p>&copy; {year} Rendus Technologies. All rights reserved.</p>
        <strong>Building Tomorrow&apos;s Leaders Today</strong>
      </div>
      <div className="footer-bottom-bar" />
    </footer>
  )
}

export default Footer


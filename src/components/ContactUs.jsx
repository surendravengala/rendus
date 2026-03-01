function ContactUs() {
  return (
    <section className="contact-page" id="contact-page">
      <div className="contact-page-grid">
        <div className="contact-left">
          <h3>Head Office</h3>
          <p className="contact-line">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="contact-icon-svg">
                <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            645, 10th Main Rd, 4th T Block East, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
          </p>

          <h3>Support Enquiries</h3>
          <p className="contact-line">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="contact-icon-svg">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>
            <a href="mailto:support@rendustechnologies.in">support@rendustechnologies.in</a>
          </p>
          <p className="contact-line">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="contact-icon-svg">
                <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1 .33 2.08.5 3.18.5a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3.5a1 1 0 011-1h3.54a1 1 0 011 1c0 1.1.17 2.18.5 3.18a1 1 0 01-.24 1z" />
              </svg>
            </span>
            <a href="tel:+919686201981">9686201981</a>
          </p>

          <div className="contact-map-wrap">
            <iframe
              title="Rendus Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684526266992!2d77.58309917358822!3d12.927986415835957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bcafc0949f%3A0x6348a3ade8d4f3ae!2sRENDUS%20Technologies!5e0!3m2!1sen!2sin!4v1771751198632!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-right">
          <h2>Connect with Us</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Enter your full name" />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" />

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message..." rows={6} />

            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

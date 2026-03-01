import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '10k+', label: 'Students Enrolled' },
  { value: '4.5', label: 'Rating' },
  { value: '98%', label: 'Success Rate' },
]

const courses = [
  {
    title: 'Full Stack Web Development',
    description:
      'Learn React, Node.js, APIs, and databases to build complete production-ready web applications from frontend to backend.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Science Foundations',
    description:
      'Build strong fundamentals in Python, data cleaning, visualization, and statistical analysis for data-driven decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'AI and Machine Learning',
    description:
      'Understand supervised and unsupervised learning, model evaluation, and deployment of practical AI solutions.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cloud and DevOps Essentials',
    description:
      'Master CI/CD pipelines, containerization, and cloud deployment on AWS, Azure, and Google Cloud platforms.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cybersecurity Analyst Track',
    description:
      'Learn network security, vulnerability assessment, incident response, and best practices to secure modern systems.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'UI/UX Product Design',
    description:
      'Design user-centered digital products using wireframes, prototypes, usability testing, and strong visual systems.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mobile App Development',
    description:
      'Create high-performance Android and iOS applications with modern architecture, API integration, and deployment workflows.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Digital Marketing Strategy',
    description:
      'Plan and execute SEO, social media, and paid campaigns using analytics to improve conversions and brand growth.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Business Analytics',
    description:
      'Transform business data into dashboards and actionable insights for operations, sales, and strategic decisions.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Java Programming Masterclass',
    description:
      'Build a solid core in Java, OOP, collections, multithreading, and enterprise application development practices.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Software Testing and QA',
    description:
      'Practice manual and automation testing, test case design, bug reporting, and quality assurance lifecycle workflows.',
    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Interview and Career Prep',
    description:
      'Prepare with resume building, mock interviews, communication training, and role-based technical assessment practice.',
    image:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80',
  },
]

const internships = [
  {
    title: 'Tech Startups',
    description:
      'Work in fast-paced startup teams, ship features quickly, and gain practical experience across product and engineering.',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fortune 500 Companies',
    description:
      'Join structured enterprise internship programs, collaborate with experienced mentors, and learn large-scale systems.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Remote Opportunities',
    description:
      'Contribute from anywhere through remote-first projects, global collaboration tools, and flexible internship schedules.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
]

function Home() {
  const statsRef = useRef(null)
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStats(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <main id="home" className="home-section home-main">
      <div className="home-content">
        <section className="home-hero-bg">
          <div className="home-hero-overlay">
            <h1>
              <span>Rendus</span>
              <span>Technologies</span>
            </h1>

            <p className="tagline">Synchronizing innovation with your vision</p>

            <p className="description">
              Unlock your potential with premium courses and exclusive internship opportunities. Join
              thousands of students building their future with Rendus Technologies.
            </p>

            <a href="#courses" className="cta-button">Explore Courses</a>
          </div>
        </section>

        <section ref={statsRef} className={`stats-grid ${showStats ? 'in-view' : ''}`}>
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section id="courses" className="courses-section">
          <h2 className="courses-heading">Premium Courses</h2>
          <div className="courses-grid">
            {courses.map((course) => (
              <article key={course.title} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" loading="lazy" />
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <button type="button" className="curriculum-btn">Curriculum</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="internships" className="internships-section">
          <h2 className="internships-heading">Exclusive Internships</h2>
          <div className="internships-grid">
            {internships.map((internship) => (
              <article key={internship.title} className="internship-card">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="internship-image"
                  loading="lazy"
                />
                <div className="internship-content">
                  <h3>{internship.title}</h3>
                  <p>{internship.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="contact-heading">Get In Touch</h2>
          <div className="contact-grid">
            <article className="contact-card demo-card">
              <h2>Request Demo</h2>
              <p>
                Get a personalized demo of our courses and see how we can help accelerate your career.
              </p>
              <a href="#" className="contact-pill">Request Demo</a>
            </article>

            <article className="contact-card call-card">
              <h2>Call Us</h2>
              <p>
                Have questions? Speak directly with our education consultants for personalized guidance.
              </p>
              <a href="tel:+916302655033" className="contact-pill">+91 6302655033</a>
            </article>

            <article className="contact-card email-card">
              <h2>Email Us</h2>
              <p>
                Send us your queries and we&apos;ll get back to you within 24 hours with detailed answers.
              </p>
              <a href="mailto:support@RendusTechnologies.in" className="contact-pill">
                support@RendusTechnologies.in
              </a>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home

const courseCards = [
  {
    title: 'JAVA',
    description:
      'Learn core Java, object-oriented programming, collections, and real-world application development fundamentals.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Web Development',
    description:
      'Build responsive websites and full-stack applications using HTML, CSS, JavaScript, React, and backend APIs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Python',
    description:
      'Master Python for automation, data handling, backend programming, and practical problem-solving projects.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'CFD/FEM',
    description:
      'Learn Computational Fluid Dynamics (CFD) and Finite Element Methods (FEM) for simulation, structural analysis, and engineering design validation.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Freshers Program',
    description:
      'Gain job-ready skills through aptitude, communication, coding fundamentals, and interview preparation for beginners.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'SQL-NoSQL',
    description:
      'Learn relational and NoSQL databases, query optimization, schema design, and scalable data management practices.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
  },
]

function Courses() {
  return (
    <section id="courses" className="courses-showcase">
      <h2 className="courses-showcase-title">Our Courses</h2>
      <p className="courses-showcase-subtitle">
        Learn in-demand skills with expert-led programs, designed to boost your career.
      </p>

      <div className="courses-showcase-grid">
        {courseCards.map((course) => (
          <article key={course.title} className="courses-showcase-card">
            <div className="courses-showcase-image-wrap">
              <img src={course.image} alt={course.title} className="courses-showcase-image" loading="lazy" />
            </div>

            <div className="courses-showcase-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button type="button" className="courses-showcase-btn">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Courses


(function () {
  const views = {
    home: document.getElementById('view-home'),
    courses: document.getElementById('view-courses'),
    about: document.getElementById('view-about'),
    contact: document.getElementById('view-contact'),
  }

  const navMenu = document.querySelector('.nav-menu')
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelectorAll('.nav-link')
  const statsGrid = document.querySelector('.stats-grid')
  const yearEl = document.getElementById('year')

  function pageFromHash() {
    const hash = (window.location.hash || '#home').replace('#', '')
    if (hash === 'courses' || hash === 'about' || hash === 'contact') return hash
    return 'home'
  }

  function setActiveNav(page) {
    navLinks.forEach((link) => {
      const linkHash = link.getAttribute('href').replace('#', '')
      link.style.color = linkHash === page ? '#6b68d8' : ''
      link.style.fontWeight = linkHash === page ? '700' : ''
    })
  }

  function showPage() {
    const page = pageFromHash()
    Object.keys(views).forEach((key) => {
      views[key].classList.toggle('hidden', key !== page)
    })
    setActiveNav(page)
    navMenu.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('open')
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open')
      menuToggle.setAttribute('aria-expanded', 'false')
    })
  })

  if (statsGrid) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statsGrid.classList.add('in-view')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(statsGrid)
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear())
  }

  window.addEventListener('hashchange', showPage)

  if (!window.location.hash) {
    window.location.hash = '#home'
  } else {
    showPage()
  }
})()

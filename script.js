const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const yearNode = document.getElementById('year');
const resumeStatus = document.getElementById('resume-status');
const resumePreview = document.getElementById('resume-preview');
const resumePath = 'Assets/Aryan-Dhasmana-Resume.pdf';

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (resumeStatus && resumePreview) {
  fetch(resumePath, { method: 'HEAD' })
    .then((response) => {
      if (!response.ok) {
        resumeStatus.hidden = false;
        resumePreview.hidden = true;
      }
    })
    .catch(() => {
      resumeStatus.hidden = false;
      resumePreview.hidden = true;
    });
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

  const menu = document.getElementById("mobile-menu");
  const navLinks1 = document.querySelector(".nav-links");

  // Toggle open/close on hamburger click
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks1.classList.toggle("active");
    menu.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks1.contains(e.target) && !menu.contains(e.target)) {
      navLinks1.classList.remove("active");
      menu.classList.remove("open");
    }
  });

  // Close when clicking nav link + make active underline
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-links a").forEach((a) =>
        a.classList.remove("active")
      );
      link.classList.add("active");
      navLinks1.classList.remove("active");
      menu.classList.remove("open");
    });
  });


window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-progress");
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 200);
      }
    });
  }, options);

  skillBars.forEach((bar) => observer.observe(bar));
});

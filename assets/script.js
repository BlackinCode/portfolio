    // Inicialização do AOS
    AOS.init({
        duration: 1000,
        once: true
      });
  
      // Configuração do Particles.js
      particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#233dff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#233dff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
  
      // Cursor personalizado
      const cursor = document.querySelector('.cursor');
      const cursorDot = document.querySelector('.cursor-dot');
  
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
      });
  
      document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
      });
  
      document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
      });
  
      // Scroll suave
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
  
      // Animações nos cards de projeto
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
          gsap.to(e.currentTarget, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });
  
        card.addEventListener('mouseleave', (e) => {
          gsap.to(e.currentTarget, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
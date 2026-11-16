/**
 * Tulashi Nayak - Portfolio JavaScript
 * Interactions, Animations, Modals & State Management
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 2. THEME SWITCHER (Dark / Light)
  // ==========================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

  // Check saved theme in localStorage
  const savedTheme = localStorage.getItem('tulashi_portfolio_theme');
  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.add('dark-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('tulashi_portfolio_theme', 'dark');
        showToast('Switched to Dark Theme');
      } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('tulashi_portfolio_theme', 'light');
        showToast('Switched to Light Theme');
      }
    });
  }

  // ==========================================
  // 3. NAVIGATION & MOBILE MENU
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinksContainer.classList.contains('mobile-open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('mobile-open')) {
          navLinksContainer.classList.remove('mobile-open');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // 4. ANIMATED SKILL BARS (IntersectionObserver)
  // ==========================================
  const skillCards = document.querySelectorAll('.skill-pill-card');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBar = entry.target.querySelector('.skill-bar-fill');
        if (fillBar) {
          fillBar.classList.add('animated');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillCards.forEach(card => skillObserver.observe(card));

  // ==========================================
  // 5. STATS COUNTER ANIMATION
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasCounted = false;

  const statsSection = document.querySelector('.stats-row');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true;
          statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10) || 0;
            animateCounter(stat, 0, target, 1200);
          });
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  function animateCounter(elem, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      elem.textContent = current;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        elem.textContent = end;
      }
    }
    window.requestAnimationFrame(step);
  }

  // ==========================================
  // 6. MODAL UTILITY CONTROLLER
  // ==========================================
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modals on clicking overlay outside container or close button
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });

    const closeBtn = overlay.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(overlay);
      });
    }
  });

  // Close modals on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  // ==========================================
  // 7. EDUCATION NAVIGATION HANDLERS
  // ==========================================
  const educationModal = document.getElementById('educationModal');
  const viewEducationBtn = document.getElementById('viewEducationBtn');
  const navEducationLink = document.getElementById('navEducationLink');
  const educationSection = document.getElementById('education');

  if (viewEducationBtn && educationSection) {
    viewEducationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      educationSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (navEducationLink && educationSection) {
    navEducationLink.addEventListener('click', (e) => {
      e.preventDefault();
      educationSection.scrollIntoView({ behavior: 'smooth' });
    });
  }



  // ==========================================
  // 9. RESUME (DOWNLOAD CV) MODAL
  // ==========================================
  const resumeModal = document.getElementById('resumeModal');
  const downloadCvBtn = document.getElementById('downloadCvBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================
  // 10. QUICK-COPY FOR CONTACT DETAILS
  // ==========================================
  const copyPhoneItem = document.getElementById('copyPhoneItem');
  const copyEmailItem = document.getElementById('copyEmailItem');

  if (copyPhoneItem) {
    copyPhoneItem.addEventListener('click', () => {
      navigator.clipboard.writeText('8018259637').then(() => {
        showToast('Phone number (+91 8018259637) copied to clipboard!');
      }).catch(() => {
        showToast('Phone: +91 8018259637');
      });
    });
  }

  if (copyEmailItem) {
    copyEmailItem.addEventListener('click', () => {
      navigator.clipboard.writeText('nayaktulashi981@gmail.com').then(() => {
        showToast('Email (nayaktulashi981@gmail.com) copied to clipboard!');
      }).catch(() => {
        showToast('Email: nayaktulashi981@gmail.com');
      });
    });
  }

  // ==========================================
  // 11. CONTACT FORM VALIDATION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!firstName) {
        showToast('Please enter your first name.');
        document.getElementById('firstName').focus();
        return;
      }

      if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address.');
        document.getElementById('email').focus();
        return;
      }

      if (!message) {
        showToast('Please enter your message.');
        document.getElementById('message').focus();
        return;
      }

      // Simulate sending with loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Message Sent!</span> <i class="fa-solid fa-check"></i>`;
        showToast(`Thank you, ${firstName}! Your message has been sent to Tulashi Nayak.`);
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3000);
      }, 1200);
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ==========================================
  // 12. TOAST NOTIFICATION UTILITY
  // ==========================================
  let toastTimer = null;
  window.showToast = function(msg) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  };
});

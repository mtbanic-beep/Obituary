// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
    }
  });
}

// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const sections = {
  'Obituary & Events': ['.obituary-section', '.events-section'],
  'Tribute Wall': ['.tribute-wall-section']
};

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.obituary-section, .events-section, .tribute-wall-section').forEach(section => {
      section.style.display = 'none';
    });
    
    // Show relevant sections
    const tabText = button.textContent.trim();
    if (sections[tabText]) {
      sections[tabText].forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
          section.style.display = 'block';
        }
      });
    }
  });
});

// Social sharing functionality
const shareButtons = document.querySelectorAll('.social-btn');

shareButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (button.classList.contains('facebook')) {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    } else if (button.classList.contains('twitter')) {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Patricia Mary Macdonald Obituary`, '_blank');
    } else if (button.classList.contains('email')) {
      window.location.href = `mailto:?subject=Patricia Mary Macdonald Obituary&body=${encodeURIComponent(window.location.href)}`;
    } else if (button.classList.contains('print')) {
      window.print();
    } else if (button.classList.contains('notifications')) {
      alert('Notification feature would be implemented with backend integration');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Sticky navigation scroll effect
let lastScroll = 0;
const stickyNav = document.querySelector('.sticky-nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    stickyNav.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !stickyNav.classList.contains('scroll-down')) {
    // Scrolling down
    stickyNav.classList.remove('scroll-up');
    stickyNav.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && stickyNav.classList.contains('scroll-down')) {
    // Scrolling up
    stickyNav.classList.remove('scroll-down');
    stickyNav.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});

// Load more tributes
const loadMoreBtn = document.querySelector('.tribute-wall-section .btn-secondary:last-of-type');
if (loadMoreBtn && loadMoreBtn.textContent.includes('Load more')) {
  loadMoreBtn.addEventListener('click', () => {
    alert('This would load more tribute messages from the server');
  });
}

// Initialize - show obituary section by default
document.addEventListener('DOMContentLoaded', () => {
  const tributeWall = document.querySelector('.tribute-wall-section');
  if (tributeWall) {
    tributeWall.style.display = 'none';
  }
});

'use client';

import { useEffect } from 'react';

export default function AppLogic() {
  useEffect(() => {
    // ===== SNOWFLAKE PARTICLES =====
    const container = document.getElementById('snowflakes');
    if (container && container.childNodes.length === 0) {
      const flakes = ['❄', '❅', '❆', '•'];
      for (let i = 0; i < 15; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = flakes[Math.floor(Math.random() * flakes.length)];
        flake.style.left = Math.random() * 100 + '%';
        flake.style.fontSize = (Math.random() * 10 + 6) + 'px';
        flake.style.animationDuration = (Math.random() * 15 + 10) + 's';
        flake.style.animationDelay = (Math.random() * 15) + 's';
        flake.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        container.appendChild(flake);
      }
    }

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetStr = entry.target.getAttribute('data-target');
          if (targetStr) {
            const target = parseInt(targetStr);
            animateCounter(entry.target as HTMLElement, target);
            counterObserver.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(element: HTMLElement, target: number) {
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString() + '+';
      }, 25);
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.borderBottomColor = 'rgba(14, 165, 233, 0.1)';
          nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
          nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
          nav.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        }
      }

      // Active Nav Highlight
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      let current = '';
      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop - 120;
        if (window.pageYOffset >= top) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-white');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-white');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="snowflakes" aria-hidden="true" className="fixed inset-0 pointer-events-none z-0"></div>
      <div id="toast" className="toast">
        <span id="toastIcon"></span>
        <span id="toastMessage" className="text-sm">Message sent successfully!</span>
      </div>
    </>
  );
}

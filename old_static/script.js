/* =============================================
   OASIS CARE — Landing Page Interactions
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initSmoothScroll();
    initCounterAnimation();
});

/* === STICKY NAVBAR === */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/* === MOBILE MENU TOGGLE === */
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('active');
        menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('active')) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

/* === SCROLL ANIMATIONS (Intersection Observer) === */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (!fadeElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
}

/* === BACK TO TOP BUTTON === */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* === SMOOTH SCROLL FOR ANCHOR LINKS === */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* === COUNTER ANIMATION === */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 2000; // 2 seconds

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return;

        const suffix = counter.textContent.replace(/[0-9]/g, '');
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(eased * target);

            counter.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

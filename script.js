/* ============================================================
   DEAN MASKELL — deanmaskell.com
   script.js
   ============================================================ */

(function () {
    'use strict';

    /* ===========================
       Mobile Navigation Toggle
    =========================== */
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        // Close on nav link click
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open navigation menu');
            });
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ===========================
       Smooth Scroll with Nav Offset
    =========================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const navbar = document.getElementById('navbar');
            const offset = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

})();

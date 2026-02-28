document.addEventListener('DOMContentLoaded', () => {
    // Preloader Logic (5 seconds artificial delay)
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        // Fade out preloader
        preloader.classList.add('hidden');

        // Trigger page entrance animations
        document.body.classList.add('loaded');

        // Remove from DOM to avoid overlapping elements blocking clicks
        setTimeout(() => {
            if (preloader) preloader.remove();
        }, 500); // Wait for the 0.5s CSS transition to finish
    }, 5000); // 5000ms delay as requested

    // Liquid Glass Card Glare Effect
    // This script calculates the mouse position relative to each card
    // and updates CSS custom properties to move the glare/gradient.

    const cards = document.querySelectorAll('.interactive-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();

            // Calculate mouse position relative to the element
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set variables dynamically
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        // Optional: Reset gradient when mouse leaves
        // card.addEventListener('mouseleave', () => {
        //    card.style.setProperty('--mouse-x', '50%');
        //    card.style.setProperty('--mouse-y', '50%');
        // });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

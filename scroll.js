document.addEventListener('DOMContentLoaded', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Update scroll progress
    const updateScrollProgress = () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
        
        // Show/hide scroll-to-top button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };

    // Smooth scroll to top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', updateScrollProgress);
});

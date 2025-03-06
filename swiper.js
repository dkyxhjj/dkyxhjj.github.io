// CardSwiper class - now simplified to avoid conflicts with projects.js
class CardSwiper {
    constructor(element) {
        console.log('CardSwiper initialized');
        // No-op constructor to prevent errors
    }
}

// Don't initialize the swiper as projects.js now handles this
document.addEventListener('DOMContentLoaded', () => {
    console.log('Swiper.js loaded but not initializing (handled by projects.js)');
});

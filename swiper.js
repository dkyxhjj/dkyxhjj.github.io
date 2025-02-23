class CardSwiper {
    constructor(element) {
        this.container = element;
        this.cards = Array.from(element.children);
        this.currentIndex = 0;
        
        // Set first card as active initially
        if (this.cards.length > 0) {
            this.cards[0].classList.add('active');
        }
        
        // Find navigation buttons
        const projectsContainer = element.closest('.projects-container');
        if (!projectsContainer) return;
        
        const prevButton = projectsContainer.querySelector('.nav-button.prev');
        const nextButton = projectsContainer.querySelector('.nav-button.next');
        
        if (!prevButton || !nextButton) return;
        
        // Update button states initially
        this.updateButtonStates(prevButton, nextButton);
        
        // Add button listeners
        prevButton.addEventListener('click', () => {
            this.navigate(-1);
            this.updateButtonStates(prevButton, nextButton);
        });
        
        nextButton.addEventListener('click', () => {
            this.navigate(1);
            this.updateButtonStates(prevButton, nextButton);
        });
        
        // Touch handling
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        const handleStart = (e) => {
            isDragging = true;
            startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        };
        
        const handleMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        };
        
        const handleEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = currentX - startX;
            const threshold = this.container.offsetWidth * 0.2;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0 && this.currentIndex > 0) {
                    this.navigate(-1);
                } else if (diff < 0 && this.currentIndex < this.cards.length - 1) {
                    this.navigate(1);
                }
                this.updateButtonStates(prevButton, nextButton);
            }
        };
        
        // Add event listeners
        this.container.addEventListener('mousedown', handleStart);
        this.container.addEventListener('touchstart', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove, { passive: false });
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchend', handleEnd);
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.currentIndex > 0) {
                this.navigate(-1);
                this.updateButtonStates(prevButton, nextButton);
            } else if (e.key === 'ArrowRight' && this.currentIndex < this.cards.length - 1) {
                this.navigate(1);
                this.updateButtonStates(prevButton, nextButton);
            }
        });
    }
    
    updateButtonStates(prevButton, nextButton) {
        prevButton.disabled = this.currentIndex === 0;
        nextButton.disabled = this.currentIndex === this.cards.length - 1;
        
        prevButton.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = this.currentIndex === this.cards.length - 1 ? '0.5' : '1';
    }
    
    navigate(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.cards.length) {
            this.currentIndex = newIndex;
            this.updateCards();
        }
    }
    
    updateCards() {
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            if (index === this.currentIndex) {
                card.classList.add('active');
            } else if (index < this.currentIndex) {
                card.classList.add('prev');
            } else {
                card.classList.add('next');
            }
        });
    }
}

// Initialize the swiper when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-swiper');
    if (projectsContainer) {
        new CardSwiper(projectsContainer);
    }
});

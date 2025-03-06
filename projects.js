document.addEventListener('DOMContentLoaded', function() {
    // Get all project slides
    const slides = document.querySelectorAll('.project-slide');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    
    // Hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    let currentIndex = 0;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Show the current slide
        slides[index].style.display = 'block';
        
        // Update button states
        prevButton.disabled = index === 0;
        nextButton.disabled = index === slides.length - 1;
        
        // Update current index
        currentIndex = index;
    }
    
    // Add click event listeners to navigation buttons
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            showSlide(currentIndex + 1);
        }
    });
    
    // Initialize the first slide
    showSlide(0);
});

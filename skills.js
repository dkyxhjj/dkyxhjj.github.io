document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillTags = document.querySelectorAll('.skill-tag');

    // Show only language skills initially
    filterSkills('language');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter skills
            filterSkills(button.getAttribute('data-filter'));
        });
    });

    function filterSkills(filterValue) {
        skillTags.forEach(skill => {
            const skillType = skill.getAttribute('data-type');
            if (skillType === filterValue) {
                skill.style.opacity = '1';
                skill.style.transform = 'scale(1)';
                skill.style.display = 'inline-block';
            } else {
                skill.style.opacity = '0';
                skill.style.transform = 'scale(0.8)';
                // Hide element after fade out
                setTimeout(() => {
                    if (skill.style.opacity === '0') {
                        skill.style.display = 'none';
                    }
                }, 300);
            }
        });
    }
});

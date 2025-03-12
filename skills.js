document.addEventListener("DOMContentLoaded", () => {
    // Skills filtering
    const filterButtons = document.querySelectorAll(".filter-btn")
    const skillTags = document.querySelectorAll(".skill-tag")
  
    // Function to filter skills
    const filterSkills = (filter) => {
      // Filter skill tags
      skillTags.forEach((tag) => {
        if (filter === "all" || tag.getAttribute("data-type") === filter) {
          tag.style.display = "inline-block"
          setTimeout(() => {
            tag.style.opacity = "1"
            tag.style.transform = "translateY(0)"
          }, 10)
        } else {
          tag.style.opacity = "0"
          tag.style.transform = "translateY(10px)"
          setTimeout(() => {
            tag.style.display = "none"
          }, 300)
        }
      })
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        const filter = button.getAttribute("data-filter")
        filterSkills(filter)
      })
    })
  
    // Filter to show only languages by default
    filterSkills("language")
});
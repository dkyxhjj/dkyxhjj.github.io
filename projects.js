const projectsData = [
    {
        title: 'iAssist',
        award: 'DevFest 2025 Winner',
        description: 'AI-powered vision assistant designed to provide real-time navigation for visually impaired individuals',
        image: 'images/iassist.jpg',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7294962916208898049/',
        placeholder: 'iAssist'
    },
    {
        title: 'Carbon Sequestration Estimation',
        award: 'Big Data Challenge 2024 Winner',
        description: 'A machine learning model leveraging LiDAR and tree species data improves carbon sequestration accuracy, reducing error to ±5% for reliable carbon credit calculations',
        image: 'images/carbon.jpg',
        link: 'https://www.linkedin.com/in/richardli14/overlay/1727913872637/single-media-viewer/?profileId=ACoAACwQIR8BckOiClGazYcR7ZjgWeIbAnoj-Qw',
        placeholder: 'Carbon+Sequestration'
    },
    {
        title: 'API Store',
        award: 'Personal Project',
        description: 'A full stack API directory with authentication and 20+ utility APIs free of use. Built with laravel, php and bootstrap',
        image: 'images/api.jpg',
        link: 'https://github.com/dkyxhjj/APIStoreNew',
        placeholder: 'API+Store'
    },
    {
        title: 'NBA Upsets Analysis',
        award: 'Bruin Sports Analytics - Data Journalism',
        description: 'analyzes NBA underdog performance from 2012-2019, revealing that while home-court advantage improves their chances, game outcomes remain highly unpredictable',
        image: 'images/nba.jpg',
        link: 'https://www.bruinsportsanalytics.com/post/nba-odds-upsets',
        placeholder: 'NBA+Analysis'
    }
];

function generateProjectCards() {
    const swiperContainer = document.querySelector('.projects-swiper');
    if (!swiperContainer) return;

    swiperContainer.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <a href="${project.link}" class="project-image-link" target="_blank">
                <div class="project-image">
                    <img src="${project.image}" 
                         alt="${project.title} Project" 
                         onerror="this.src='https://via.placeholder.com/300x200?text=${project.placeholder}'">
                    <div class="image-overlay">
                        <span>View Project</span>
                    </div>
                </div>
            </a>
            <h3 class="item-title">
                ${project.title}
            </h3>
            <p>${project.award}</p>
            <p class="item-subtitle">${project.description}</p>
        </div>
    `).join('');

    // Initialize the swiper after generating cards
    new CardSwiper(swiperContainer);
}

// Generate cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateProjectCards);

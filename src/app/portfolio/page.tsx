'use client'
import DarkVeil from '../components/DarkVeil'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const experiences = [
  {
    title: "Data Engineer Intern",
    org: "RBC Global Asset Management",
    time: "05 2025 -> 08 2025",
    description: "Data and Innovation team, designed a collaborative filtering recommendation model, improving data discovery and personalization for 500+ internal users",
    skills: ["Python", "PySpark", "Alternating Least Squares", "Jira", "Confluence"]
  },
  {
    title: "Undergraduate Researcher",
    org: "UCLA Bruin Sports Analytics",
    time: "09 2024 -> 05 2025",
    description: "EDA analysis on \"underdogs\" in NBA, research on wide receiver blocking effectiveness in NFL ",
    skills: ["EDA", "Pandas", "Seaborn", "Matplotlib", "Pytorch", "Tensorflow"]
  },
  {
    title: "Data Engineer Intern",
    org: "JuHe Data",
    time: "07 2024 -> 08 2024",
    description: "Backend API development",
    skills: ["PHP", "Laravel", "Livewire", "Backend"]
  }
];

const projects = [
  {
    title: "bruin vault",
    time: "09 2025",
    type: "personal",
    description1: "coming soon",
    description2: "lots of scraping and schema designing right now",
    image: "/images/portfolio/comingsoon.png",
    links: [
          { url: "https://www.shutterstock.com/image-vector/coming-soon-letter-hanging-door-600nw-2497993761.jpg", label: "coming soon" },
        ]
      },
  {
    title: "rps classification",
    time: "09 2025", 
    type: "personal",
    description1: "rock paper scissors classification model",
    description2: "100% accuracy model that converts hand motions to rps moves",
    image: "/images/portfolio/rps.png",
    links: [
        { url: "https://github.com/dkyxhjj/rps-classification", label: "github" },
    ]
  },
  {
    title: "ocr pdf scanner",
    time: "09 2025",
    type: "personal",
    description1: "transforms unscannable pdfs",
    description2: "scans pdfs and converting them to LLM ready text",
    image: "/images/portfolio/ocr-pdf-scanner.svg",
    links: [
      { url: "https://github.com/dkyxhjj/ocr-pdf-scanner", label: "github" },
      ]
    },
  {
    title: "cordial ai",
    time: "08 2025",
    type: "personal",
    description1: "smart email assistant google extension",
    description2: "it writes emails for you without that extra copy and paste step",
    image: "/images/portfolio/cordial.png",
    links: [
          { url: "https://chromewebstore.google.com/detail/cordial-ai-email-writing/ibknpcfcoehmhfocljpcepedijfpnjhk", label: "chrome extension" },
        ]
      },
  {
    title: "pocket pro",
    time: "07 2025",
    type: "personal",
    description1: "poker bank management tool & ledger",
    description2: "learned to connect frontend with backend fast + used auth",
    image: "/images/portfolio/poker.png",
    links: [
          { url: "https://pokerapp-flame.vercel.app/", label: "website" },
          { url: "https://github.com/dkyxhjj/pocketpro", label: "github" },
        ]
      },
  {
    title: "chengtai.info",
    time: "07 2025",
    type: "personal",
    description1: "personal website",
    description2: "built with next.js, tailwindcss, components from reactdev",
    image: "/images/portfolio/chengtai.png",
    links: [
          { url: "https://chengtai.info/", label: "website" },
          { url: "https://github.com/dkyxhjj/dkyxhjj.github.io", label: "github" },
        ]
      },
  {
    title: "embers | lahacks",
    time: "04 2025",
    type: "hackathon",
    description1: "best use of gemini, 1st in fintech",
    description2: "insurance evaluation platform for post disaster claims",
    image: "/images/portfolio/lahacks.png",
    links: [
      { url: "https://devpost.com/software/insurefire", label: "devpost" },
      { url: "https://github.com/dkyxhjj/insurefire", label: "github" },
      { url: "https://www.youtube.com/watch?v=t9eNwyadORQ&ab_channel=RichardLi", label: "demo" } 
    ]
  },
  {
    title: "iassist | devFest",
    time: "02 2025",
    type: "hackathon",
    description1: "best use of groq api",
    description2: "real-time navigation assistant for the visually impaired",
    image: "/images/portfolio/devfest.png",
    links: [
      { url: "https://devpost.com/software/iassist-qcnmbp", label: "devpost" },
      { url: "https://github.com/dkyxhjj/iassist", label: "github" }
    ]
  },
  {
    title: "api store",
    time: "08 2024",
    type: "hs",
    description1: "intern project @ juhe data",
    description2: "created a web app that allows users to search and compare APIs",
    image: "/images/portfolio/api-store.svg",
    links: [
      { url: "https://github.com/dkyxhjj/APIStoreNew", label: "github" }
    ]
  },
  {
    title: "big data challenge",
    time: "02 2024",
    type: "hs",
    description1: "digital research award",
    description2: "used LiDAR and remote sensing data to predict global carbon sequestion rate",
    image: "/images/portfolio/big-data-challenge.svg",
    links: [
      { url: "https://www.linkedin.com/in/chengtai/details/projects/1727913872637/single-media-viewer/?profileId=ACoAACwQIR8BckOiClGazYcR7ZjgWeIbAnoj-Qw", label: "Paper" }
    ]
  },
  {
    title: "paper abt dst",
    time: "09 2023",
    type: "hs",
    description1: "published on JSR",
    description2: "argumentative paper on ending daylight saving time due to its negative effects.",
    image: "/images/portfolio/dst-paper.svg",
    links: [
      { url: "https://www.jsr.org/hs/index.php/path/article/view/4259", label: "Paper" }
    ]
  }
];

export default function About() {
    const [activeFilter, setActiveFilter] = useState<string>('personal');
    const [currentFactIndex, setCurrentFactIndex] = useState<number>(0);
    
    const funFacts = [
        { label: "this past summer:", value: "i worked @ rbc as a data engineer intern" },
        { label: "from a small town called:", value: "toronto, canada!!!" },
        { label: "recent favs:", value: "the weeknd, laufey, men I trust, the marias" },
        { label: "certified big back:", value: "follow me on beli @dcky" },
        { label: "my favorite foods: ", value: "pho, khao soi, anything noodle " },
        { label: "favorite toronto restaurant:", value: "guigui korean skewers, so cheap so good" },
        { label: "guilty pleasure:", value: "watching poker vlogs at 2am" },
        { label: "random skill:", value: "i can distinguish different cuts of beef" },
        { label: "favorite algorithm:", value: "dijkstra's - shortest path to everything" },
        { label: "this song always gets me hype:", value: "9 - drake" },    
        { label: "best meal i have ever had:", value: "jeju noodle bar - new york city" },    
        { label: "my desert island album:", value: "trilogy - the weekend" },    
    ];
    
    const getRandomFact = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * funFacts.length);
        } while (newIndex === currentFactIndex && funFacts.length > 1);
        setCurrentFactIndex(newIndex);
    };
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 100; // 80px offset from top
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.type === activeFilter);
    
    const filterButtons = [
      { key: 'personal', label: 'Personal' },
      { key: 'hackathon', label: 'Hackathon' },
      { key: 'hs', label: 'High School' }
    ];

    return (
        <>
            <DarkVeil />
            
            <div className="min-h-screen flex flex-col items-center text-white font-mono relative z-20 pt-20 md:pt-32 pb-8 px-4 md:px-0">
                
                {/* Navigation Island */}
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl px-3 md:px-6 py-2 md:py-3 shadow-2xl">
                        <div className="flex items-center gap-1 justify-center">
                            <div className="hidden md:flex items-center gap-2 mr-4">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('experiences')}
                                className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                Projects
                            </button>
                        </div>
                    </div>
                </div>
                <section id="about" className="mb-12 md:mb-16 w-full">
                    <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-4 md:px-8 py-6 md:py-10 max-w-3xl mx-auto text-white text-center space-y-4 md:space-y-6">
                        {/* Name + Intro */}
                        <div className="space-y-2 md:space-y-3">
                            <h1 className="text-2xl md:text-4xl font-bold">Chengtai (Richard) Li</h1>
                            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
                                hello! i&apos;m a sophomore at UCLA studying data science & statistics and minoring in data science engineering
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            <span className="bg-blue-900/40 px-2 md:px-3 py-1 rounded-full text-blue-200 text-xs md:text-sm font-semibold">Data Science @ UCLA</span>
                            <span className="bg-green-900/40 px-2 md:px-3 py-1 rounded-full text-green-200 text-xs md:text-sm font-semibold">Top 0.001% Drake Listener</span>
                            <span className="bg-purple-900/40 px-2 md:px-3 py-1 rounded-full text-purple-200 text-xs md:text-sm font-semibold">Currently Unemployed</span>
                        </div>

                        {/* Fun Facts */}
                        <div className="border border-white/20 rounded-xl bg-black/30 backdrop-blur-md shadow-md px-4 md:px-6 py-4 md:py-6 text-left max-w-xl mx-auto">
                            <div className="flex items-center justify-between mb-3 md:mb-4">
                                <h3 className="text-lg md:text-xl font-bold text-white/90">get to know me a bit more :D</h3>
                                <button
                                    onClick={getRandomFact}
                                    className="bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
                                >
                                    new fact
                                </button>
                            </div>
                            <div className="text-white/80 text-sm md:text-base">
                                <div className="flex items-start space-x-2">
                                    <span className="text-blue-400">•</span>
                                    <div>
                                        <span className="font-semibold text-blue-400">{funFacts[currentFactIndex].label}</span>{' '}
                                        <span className="text-blue-200">{funFacts[currentFactIndex].value}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Outro */} 
                        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
                            i&apos;m always interested in working on new projects—reach out if you have any questions or want to collaborate!
                        </p>

                        {/* Now Link */}
                        <div className="text-center">
                            <Link href="/now" className="inline-block bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105">
                                what i&apos;m doing now →
                            </Link>
                        </div>

                        {/* Links */}
                        <div className="text-blue-300 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm">
                            <Link href="mailto:richardli1@g.ucla.edu" className="underline hover:text-blue-400">richardli1@g.ucla.edu</Link>
                            <span className="hidden md:inline">·</span>
                            <Link href="https://linkedin.com/in/chengtai" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">LinkedIn</Link>
                            <span className="hidden md:inline">·</span>
                            <Link href="https://github.com/dkyxhjj" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">GitHub</Link>
                            <span className="hidden md:inline">·</span>
                            <Link href="https://devpost.com/richardli-060411" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Devpost</Link>
                        </div>
                    </div>
                </section>


                <section id="experiences" className="mt-12 md:mt-16 w-full">
                  <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-4 md:px-8 py-6 md:py-8 max-w-3xl mx-auto w-full">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">experiences</h2>
                    <div className="grid gap-4">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="border border-white/20 rounded-lg p-3 md:p-4 flex flex-col">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-1">
                                    <span className="font-bold text-lg md:text-xl tracking-wide text-white">{exp.title}</span>
                                    <span className="text-xs text-white/60 font-mono mt-1 md:mt-0">{exp.time}</span>
                                </div>
                                <div className="text-white/80 text-base md:text-lg font-semibold mb-1 italic">{exp.org}</div>
                                <div className="text-white/90 text-sm mb-2">{exp.description}</div>
                                <div className="flex flex-wrap gap-2 mb-1">
                                  {exp.skills && exp.skills.map((skill, i) => (
                                    <span key={i} className="bg-blue-900/40 text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </section>

                <section id="projects" className="mt-12 md:mt-16 w-full">
                  <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-4 md:px-8 py-6 md:py-8 max-w-4xl mx-auto w-full">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">projects</h2>
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                        {filterButtons.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                                    activeFilter === filter.key
                                        ? 'bg-blue-600/80 text-white border-2 border-blue-400/60 shadow-lg'
                                        : 'bg-white/10 text-white/70 border-2 border-white/20 hover:bg-white/20 hover:text-white/90 hover:border-white/30'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                    
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                        {filteredProjects.map((project, idx) => (
                            <div key={idx} className="group relative h-64 md:h-72 [perspective:1000px]">
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front of card */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] border border-white/20 rounded-2xl p-4 md:p-6 bg-gradient-to-br from-black/10 via-black/5 to-transparent backdrop-blur-sm shadow-lg">
                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-2xl"></div>
                                        
                                        {/* Header with consistent spacing */}
                                        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4 w-full">
                                            <div className="flex flex-col flex-1 min-w-0">
                                                <h3 className="font-bold text-lg md:text-xl text-white transition-all duration-300 tracking-tight mb-2 md:mb-3">{project.title}</h3>
                                                {/* Awards section with fixed height for alignment */}
                                                <div className="flex gap-2 items-center">
                                                    {(project.description1) ? (
                                                        <span className="inline-block px-3 md:px-4 py-1 md:py-2 rounded-full bg-gradient-to-r from-white/15 to-white/10 text-white/90 text-xs font-semibold border border-white/25 backdrop-blur-sm shadow-sm transition-all duration-200 whitespace-nowrap">
                                                            {project.description1}
                                                        </span>
                                                    ) : (
                                                        <div className="h-6"></div>
                                                    )}
                                                </div>
                                            </div>
                                            <span className="text-xs md:text-sm text-white/50 font-mono md:ml-6 flex-shrink-0 bg-white/5 px-2 md:px-3 py-1 rounded-md border border-white/10 self-start mt-2 md:mt-0">{project.time}</span>
                                        </div>
                                        
                                        {/* Description, Tags, Links Aligned */}
                                        <div className="relative flex flex-col items-start w-full space-y-3 md:space-y-4">
                                            <div className="text-white/75 text-sm leading-relaxed w-full font-medium">{project.description2}</div>
                                            <div className="flex justify-center gap-2 mt-auto flex-wrap">
                                                {project.links.map((l: { url: string; label: string }, i: number) => (
                                                    <a
                                                        key={i}
                                                        href={l.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block text-blue-300 hover:text-blue-200 text-xs px-3 py-1 rounded border border-blue-400/30 transition-colors mb-1"
                                                    >
                                                        {l.label || 'External Link'}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Back of card */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/20 rounded-2xl overflow-hidden bg-gradient-to-br from-black/20 via-black/10 to-transparent backdrop-blur-sm shadow-lg">
                                        <a 
                                            href={project.links[0]?.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="relative w-full h-full block cursor-pointer hover:scale-105 transition-transform duration-300"
                                        >
                                            <Image 
                                                src={project.image} 
                                                alt={project.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                                <h3 className="font-bold text-lg md:text-xl text-white mb-2">{project.title}</h3>
                                                <p className="text-white/90 text-sm">{project.description1}</p>
                                            </div>
                                            {/* Click indicator */}
                                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </section>
            </div>
        </>
    )   
}
'use client'
import DarkVeil from '../components/DarkVeil'
import Link from 'next/link';

const experiences = [
  {
    title: "data engineer intern",
    org: "RBC Global Asset Management",
    time: "05 -> 08 2025",
    description: "under data analytics innovations team, working on making a recommendation model for its internal g.r.i.d. platform"
  },
  {
    title: "undergraduate researcher",
    org: "UCLA Bruin Sports Analytics",
    time: "09 2024 -> 05 2025",
    description: "eda analysis on \"underdogs\" in nba, research on wide receiver blocking effectiveness in nfl "
  },
  {
    title: "data engineer intern",
    org: "JuHe Data",
    time: "07 -> 08 2025",
    description: "backend api development"
  }
];

const projects = [
  {
    title: "embers",
    time: "04 2025",
    description1: "best use of gemeni api & first overall fintech @ lahacks",
    description2: "insurance evaluation platform for post disaster claims",
    tags: ["opencv", "nextjs", "supabase", "fastapi", "Gemini API"],
    links: [
      { url: "https://devpost.com/software/insurefire", label: "devpost" },
      { url: "https://github.com/dkyxhjj/insurefire", label: "github" }
    ]
  },
  {
    title: "iassist",
    time: "02 2025",
    description1: "best use of groq api @ devfest                                        ",
    description2: "real-time navigation assistant for the visually impaired",
    tags: ["opencv", "nextjs", "groq API", "flask"],
    links: [
      { url: "https://devpost.com/software/iassist-qcnmbp", label: "devpost" },
      { url: "https://github.com/dkyxhjj/iassist", label: "github" }
    ]
  },
  {
    title: "api store",
    time: "08 2024",
    description1: "intern project @ juhe data",
    description2: "created a web app that allows users to search and compare APIs",
    tags: ["Full Stack", "PHP", "Laravel", "API"],
    links: [
      { url: "https://github.com/dkyxhjj/APIStoreNew", label: "GitHub" }
    ]
  },
  {
    title: "big data challenge",
    time: "02 2024",
    description1: "digital research award",
    description2: "used LiDAR and remote sensing data to predict global carbon sequestion rate",
    tags: ["Python", "LiDAR", "Remote Sensing", "Research"],
    links: [
      { url: "https://www.linkedin.com/in/chengtai/details/projects/1727913872637/single-media-viewer/?profileId=ACoAACwQIR8BckOiClGazYcR7ZjgWeIbAnoj-Qw", label: "Paper" }
    ]
  }
];

export default function About() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <DarkVeil />    
            <div className="min-h-screen flex flex-col items-center text-white font-mono relative z-20 pt-24 md:pt-32 pb-16">
                
                {/* Navigation Island */}
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-3 shadow-2xl">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-2 mr-4">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('experiences')}
                                className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                Experiences
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                Projects
                            </button>
                        </div>
                    </div>
                </div>
                <section id="about">
                    <h1 className="text-4xl md:text-2xl font-bold mb-4 text-center">chengtai (richard) li</h1>
                    <p className="text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">hello! im a data science student @ UCLA</p>
                    <p className="mt-2 text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">interested in data/software engineering</p>
                    <p className="mt-2 text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">reach out to me here <Link className="text-blue-500" href="https://linkedin.com/in/chengtai" target="_blank" rel="noopener noreferrer">linkedin</Link></p>
                </section>

                <section id="experiences" className="mt-16 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">experiences</h2>
                    <div className="grid gap-4">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="border border-white/20 rounded-lg p-4 flex flex-col">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-base text-white">{exp.title}</span>
                                    <span className="text-xs text-white/60 font-mono">{exp.time}</span>
                                </div>
                                <div className="text-white/80 text-xs mb-1 italic">{exp.org}</div>
                                <div className="text-white/80 text-sm">{exp.description}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="projects" className="mt-16 w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-6 text-center">cool stuff</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 flex flex-col min-h-[220px] hover:border-white/50 hover:bg-black/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-bold text-xl text-white group-hover:text-white/90 transition-colors">{project.title}</span>
                                    <span className="text-xs text-white/60 font-mono bg-white/10 px-2 py-1 rounded-full">{project.time}</span>
                                </div>
                                
                                {/* Descriptions */}
                                <div className="text-white/90 text-sm mb-2 font-medium">{project.description1}</div>
                                <div className="text-white/70 text-xs mb-4 leading-relaxed">{project.description2}</div>
                                
                                {/* Tags */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag: string, tagIdx: number) => (
                                            <span
                                                key={tagIdx}
                                                className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 rounded-full font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Links */}
                                {project.links && project.links.length > 0 && (
                                    <div className="flex justify-center gap-3 mt-auto flex-wrap">
                                        {project.links.map((l: { url: string; label: string }, i: number) => (
                                            <a
                                                key={i}
                                                href={l.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-green-300 hover:text-green-200 text-xs px-4 py-2 rounded-full border border-green-400/40 hover:border-green-400/60 hover:bg-green-400/10 transition-all font-medium"
                                            >
                                                {l.label || 'External Link'}
                                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )   
}
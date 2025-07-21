'use client'
import DarkVeil from '../components/DarkVeil'
import Link from 'next/link';

const experiences = [
  {
    title: "data engineer intern",
    org: "RBC Global Asset Management",
    time: "05 2025 -> 08 2025",
    description: "under data analytics innovations team, working on making a recommendation model for its internal g.r.i.d. platform",
    skills: ["Python", "PySpark", "Alternating Least Squares", "Jira", "Confluence"]
  },
  {
    title: "undergraduate researcher",
    org: "UCLA Bruin Sports Analytics",
    time: "09 2024 -> 05 2025",
    description: "eda analysis on \"underdogs\" in nba, research on wide receiver blocking effectiveness in nfl ",
    skills: ["EDA", "Pandas", "Seaborn", "Matplotlib", "Pytorch", "Tensorflow"]
  },
  {
    title: "data engineer intern",
    org: "JuHe Data",
    time: "07 2025 -> 08 2025",
    description: "backend api development",
    skills: ["PHP", "Laravel", "Livewire", "Backend"]
  }
];

const projects = [
  {
    title: "pocket pro",
    time: "07 2025",
    description1: "poker bank management tool & ledger",
    description2: "learned to connect frontend with backend fast + used auth",
    links: [
          { url: "https://pokerapp-flame.vercel.app/", label: "website" },
          { url: "https://github.com/dkyxhjj/pocketpro", label: "github" },
        ]
      },
  {
    title: "chengtai.info",
    time: "07 2025",
    description1: "personal website",
    description2: "built with next.js, tailwindcss, components from reactdev",
    links: [
          { url: "https://chengtai.info/", label: "website" },
          { url: "https://github.com/dkyxhjj/dkyxhjj.github.io", label: "github" },
        ]
      },
  {
    title: "embers | lahacks 2025",
    time: "04 2025",
    description1: "best use of gemini, 1st in fintech",
    description2: "insurance evaluation platform for post disaster claims",
    links: [
      { url: "https://devpost.com/software/insurefire", label: "devpost" },
      { url: "https://github.com/dkyxhjj/insurefire", label: "github" },
      { url: "https://github.com/dkyxhjj/insurefire", label: "demo" } 
    ]
  },
  {
    title: "iassist",
    time: "02 2025",
    description1: "best use of groq api @ devfest",
    description2: "real-time navigation assistant for the visually impaired",
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
    links: [
      { url: "https://github.com/dkyxhjj/APIStoreNew", label: "github" }
    ]
  },
  {
    title: "big data challenge",
    time: "02 2024",
    description1: "digital research award",
    description2: "used LiDAR and remote sensing data to predict global carbon sequestion rate",
    links: [
      { url: "https://www.linkedin.com/in/chengtai/details/projects/1727913872637/single-media-viewer/?profileId=ACoAACwQIR8BckOiClGazYcR7ZjgWeIbAnoj-Qw", label: "Paper" }
    ]
  },
  {
    title: "paper abt dst",
    time: "09 2023",
    description1: "published on JSR",
    description2: "argumentative paper on ending daylight saving time due to its negative effects.",
    links: [
      { url: "https://www.jsr.org/hs/index.php/path/article/view/4259", label: "Paper" }
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
                <section id="about" className="mb-12">
                    <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-8 py-8 max-w-3xl mx-auto w-full">
                    <h1 className="text-4xl md:text-3xl font-bold mb-3 text-center">Chengtai (Richard) Li</h1>
                    <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto mb-2">
                        hello! i&apos;m a rising sophomore at UCLA studying data science & statistics and minoring in data science engineering
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
                        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-blue-200 text-sm font-semibold">Data Science @ UCLA</span>
                        <span className="bg-green-900/40 px-3 py-1 rounded-full text-green-200 text-sm font-semibold">Reinforcement ML</span>
                        <span className="bg-purple-900/40 px-3 py-1 rounded-full text-purple-200 text-sm font-semibold">Computer Vision</span>
                    </div>
                    
                   

                    {/* fun facts */}
                    <div className="w-full flex justify-center mb-4">
                        <div className="border border-white/20 rounded-xl bg-black/30 backdrop-blur-md shadow-lg px-6 py-4 max-w-xl w-full">
                            <h3 className="text-xl font-bold mb-4 text-center text-white-400">get to know me a bit more :D</h3>
                            <ul className="list-disc list-inside text-lg space-y-2 text-white/80">
                                <li><span className="font-bold text-blue-500">currently @ rbc</span> as a <span className="font-semibold text-blue-300">data engineer</span></li>
                                <li><span className="font-bold text-blue-400">from a small town called <span className='text-blue-300'>toronto, canada!!!</span></span></li>
                                <li><span className="font-bold text-blue-400">recent favs:</span> <span className="text-blue-200">laufey, clipse, black thought, men I trust, the marias</span></li>
                                <li><span className="font-bold text-blue-400">certified big back: </span> <span className="text-blue-200">follow me on beli @dcky</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto mb-2">
                        im always interested on working on new projects, reach out to me if you have any questions or want to collaborate!
                    </p>
                    <p className="mt-2 text-md text-center text-blue-300">
                        <Link href="mailto:chengtai.li@ucla.edu" className="underline hover:text-blue-400">richardli1@g.ucla.edu</Link> ·
                        <Link href="https://linkedin.com/in/chengtai" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 ml-2">LinkedIn</Link> ·
                        <Link href="https://github.com/dkyxhjj" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 ml-2">GitHub</Link> ·
                        <Link href="https://devpost.com/richardli-060411" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 ml-2">Devpost</Link>
                    </p>
                </div>
                </section>

                <section id="experiences" className="mt-16 w-full">
                  <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-8 py-8 max-w-3xl mx-auto w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-center">experiences</h2>
                    <div className="grid gap-4">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="border border-white/20 rounded-lg p-4 flex flex-col">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-xl tracking-wide text-white">{exp.title}</span>
                                    <span className="text-xs text-white/60 font-mono">{exp.time}</span>
                                </div>
                                <div className="text-white/80 text-lg font-semibold mb-1 italic">{exp.org}</div>
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
                <section id="projects" className="mt-16 w-full">
                  <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-8 py-8 max-w-4xl mx-auto w-full">
                    <h2 className="text-2xl font-semibold mb-8 text-center">projects</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 bg-gradient-to-br from-black/10 via-black/5 to-transparent backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1">
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                                
                                {/* Header with consistent spacing */}
                                <div className="relative flex items-start justify-between mb-4 w-full">
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <h3 className="font-bold text-xl text-white group-hover:text-white/95 transition-all duration-300 tracking-tight mb-3">{project.title}</h3>
                                        {/* Awards section with fixed height for alignment */}
                                        <div className="flex gap-2 items-center">
                                            {(project.description1) ? (
                                                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-white/15 to-white/10 text-white/90 text-xs font-semibold border border-white/25 backdrop-blur-sm shadow-sm hover:from-white/20 hover:to-white/15 transition-all duration-200 whitespace-nowrap">
                                                    {project.description1}
                                                </span>
                                            ) : (
                                                <div className="h-6"></div> // Spacer for projects without awards
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-sm text-white/50 font-mono ml-6 flex-shrink-0 bg-white/5 px-3 py-1 rounded-md border border-white/10 self-start">{project.time}</span>
                                </div>
                                
                                {/* Description, Tags, Links Aligned */}
                                <div className="relative flex flex-col items-start w-full space-y-4">
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
                        ))}
                    </div>
                  </div>
                </section>
            </div>
        </>
    )   
}
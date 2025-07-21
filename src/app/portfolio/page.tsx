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
      { url: "https://github.com/dkyxhjj/APIStoreNew", label: "GitHub" }
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
  }
];

export default function About() {
    return (
        <>
            <DarkVeil />    
            <div className="min-h-screen flex flex-col items-center text-white font-mono relative z-20 pt-24 md:pt-32 pb-16">
                <section>
                    <h1 className="text-4xl md:text-2xl font-bold mb-4 text-center">chengtai (richard) li</h1>
                    <p className="text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">hello! im a data science student @ UCLA</p>
                    <p className="mt-2 text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">interested in data/software engineering</p>
                    <p className="mt-2 text-lg md:text-xl text-gray-200 text-center max-w-xl px-4">reach out to me here <Link className="text-blue-500" href="https://linkedin.com/in/chengtai" target="_blank" rel="noopener noreferrer">linkedin</Link></p>
                </section>

                <section className="mt-16 w-full max-w-2xl">
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
                <section className="mt-16 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">cool stuff</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {projects.map((project, idx) => (
                            <div key={idx} className="border border-white/20 rounded-lg p-5 flex flex-col min-h-[170px]">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-lg text-white">{project.title}</span>
                                    <span className="text-xs text-white/60 font-mono">{project.time}</span>
                                </div>
                                <div className="text-white/90 text-sm mb-1">{project.description1}</div>
                                <div className="text-white/70 text-xs mb-2">{project.description2}</div>
                                {project.links && project.links.length > 0 && (
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
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )   
}
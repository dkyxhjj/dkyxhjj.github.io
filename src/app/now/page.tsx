'use client'

import DarkVeil from '../components/DarkVeil'
import Link from 'next/link'
const courses = [
  "STAT 100A - Intro to Probability",
  "ANTHRO 2 - Archaeology: Introduction",
  "ASTRO 3 - Nature of the Universe",
  "CHIN 50 - Chinese Civilization"
]

export default function Now() {
    return (
        <>
            <DarkVeil />
            
            <div className="min-h-screen flex flex-col items-center text-white font-mono relative z-20 pt-20 md:pt-32 pb-8 px-4 md:px-0">
                <div className="border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md shadow-xl px-4 md:px-8 py-6 md:py-10 max-w-2xl mx-auto text-white space-y-6">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">What I&apos;m Up To Now</h1>
                    
                    <div className="space-y-6">
                        {/* Picture Box */}
                        <div className="flex justify-center gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-36 h-36 rounded-lg overflow-hidden border border-white/20">
                                    <img 
                                        src="/images/now/corn.png" 
                                        alt="Latte"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-xs text-white/60 mt-2">Corn Latte!</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-36 h-36 rounded-lg overflow-hidden border border-white/20">
                                    <img 
                                        src="/images/now/suzhou.png" 
                                        alt="Suzhou"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-xs text-white/60 mt-2">Suzhou&apos;s Skyline</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-36 h-36 rounded-lg overflow-hidden border border-white/20">
                                    <img 
                                        src="/images/now/food.png" 
                                        alt="Food"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-xs text-white/60 mt-2">Ricecake and Ribs</p>
                            </div>
                        </div>
                        
                        <div className="text-lg">
                            <ul className = "space-y-2">
                                <li>• Currently in Suzhou, China, where I grew up from</li>
                                <li>• Learning theories behind reinforcement learning</li>
                                <li>• Getting ready for the new school year</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Current Courses (Fall 2025)</h2>
                        <p className = "mb-4">Taking mostly General Education courses to finish the requirement</p>
                        <ul className="space-y-2">
                            {courses.map((course, idx) => (
                                <li key={idx} className="text-white/80">• {course}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center mt-8 space-y-4">
                        <div className="text-sm text-white/60">
                            Last updated: September 10, 2025
                        </div>
                        <Link href="/portfolio" className="inline-block bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105">
                            ← back to portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )   
}

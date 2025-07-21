'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkVeil from './components/DarkVeil';
import JokeIsland from './components/JokeIsland';


export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // Animation effect when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <DarkVeil />
      <div className="min-h-screen flex flex-col justify-center items-center text-white font-mono relative z-20">
        <div className={`max-w-4xl w-full px-6 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Richard Li
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">Data Science @ UCLA</p>
            
            {/* Dynamic Island with Programming Jokes */}
            <div className="my-12">
              <JokeIsland />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link 
                href="/portfolio" 
                className="px-16 py-6 border border-white border-opacity-30 hover:border-opacity-60 hover:bg-white hover:bg-opacity-10 text-white font-medium transition-all rounded-full"
                >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

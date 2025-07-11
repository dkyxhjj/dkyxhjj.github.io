'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  
  // Animation effect when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 font-mono">
      <div className={`max-w-4xl w-full px-6 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Richard Li
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">Software Developer • UCLA Student</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/portfolio" 
              className="px-8 py-3 border border-gray-200 hover:bg-gray-100 text-gray-900 font-medium transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

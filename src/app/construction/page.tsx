'use client';

import DarkVeil from '../components/DarkVeil';

import { useState } from 'react';

export default function Construction() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <DarkVeil />
      <div className="min-h-screen flex flex-col justify-center items-center text-white font-mono relative z-20">
        <div className={`max-w-4xl w-full px-6 transition-all duration-1000 ease-out`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Under Construction
            </h1>
            
            <form
              className="flex flex-col items-center gap-4"
              onSubmit={e => {
                e.preventDefault();
                if (password === 'ucla') {
                  window.location.href = '/portfolio';
                } else {
                  setError('Incorrect password.');
                }
              }}
            >
              <input
                type="password"
                placeholder="Enter password"
                className="px-4 py-2 rounded-md border border-white/30 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/40 mb-2"
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
              />
              <button
                type="submit"
                className="px-8 py-3 border border-white hover:bg-white hover:bg-opacity-20 text-white font-medium transition-all"
              >
                Early Access
              </button>
              {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

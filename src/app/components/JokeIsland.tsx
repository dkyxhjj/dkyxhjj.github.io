'use client';

import { useState, useEffect } from 'react';

interface Joke {
  setup: string;
  punchline: string;
  id: number;
}

export default function JokeIsland() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      setJoke(data[0]); // API returns an array with one joke
    } catch (err) {
      setError('Failed to load joke');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mb-16 px-4">
      <div className="bg-black bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="px-4 py-2 text-sm border border-white border-opacity-30 hover:border-opacity-60 hover:bg-white hover:text-black hover:bg-opacity-10 text-white font-medium transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '...' : 'New Joke'}
          </button>
        </div>
        
        <div className="text-center min-h-[100px] flex flex-col justify-center">
          {error ? (
            <p className="text-red-400 text-sm">{error}</p>
          ) : joke ? (
            <div className="space-y-3">
              <p className="text-white text-lg leading-relaxed">
                {joke.setup}
              </p>
              <p className="text-green-400 text-lg font-medium">
                {joke.punchline}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

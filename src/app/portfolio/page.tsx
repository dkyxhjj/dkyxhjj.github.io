
'use client';
import DecryptedText from '../components/DecryptedText';

export default function Portfolio() {
  const projects = [
    {
      title: "Embers",
      description: "A platform that processes home videos to create insurance valuation reports, assisting in claims and recovery.",
      tech: "OpenCV, YoloV11, Google Gemini, Flask, Supabase, NextJS",
      link: "https://devpost.com/software/insurefire",
      award: "Best use of Gemini API, First Place Overall in FinTech Track @LAHacks"
    },
    {
      title: "iAssist", 
      description: "Object detection vision assistant for real-time navigation using object detection, identifying obstacles, safe pathways, and providing audio guidance on smartphones.",
      tech: "OpenCV, Ultralytics, Groq, Flask, Supabase, NextJS",
      link: "https://devpost.com/software/iassist-qcnmbp",
      award: "Best use of Groq API @ devFest"
    },
    {
      title: "Achieving Carbon Credit Accuracy Using Generative AI",
      description: "ML Model that leverages advanced Geographic Data (LiDAR) to improve precision in predicting carbon sequestration rates for global carbon credit programs",
      tech: "Rasterio, Python",
      link: "https://www.linkedin.com/in/richardli14/details/projects/1737504844627/single-media-viewer/?profileId=ACoAACwQIR8BckOiClGazYcR7ZjgWeIbAnoj-Qw",
      award: "National Research Council: Digital Research Award @BigDataChallenge"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Richard Li</h1>
          <p className="text-gray-600 mt-1">Data Engineer @ RBC</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">About</h2>
          <DecryptedText 
            text="Rising sophomore @ UCLA majoring in Statistics and Data Science and minoring in Data Science Engineering (DSE), interested in geospatial engineering, software engineering and deep machine learning."
            sequential={true}
            speed={20}
            className="text-gray-600 leading-relaxed mb-4"
            encryptedClassName="text-gray-400"
            animateOn="view"
            parentClassName="block mb-4"
          />
          <DecryptedText 
            text="This summer I'll be working on"
            sequential={true}
            speed={20}
            className="text-gray-600 leading-relaxed mb-4"
            encryptedClassName="text-gray-400"
            animateOn="view"
            parentClassName="block mb-4"
          />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <DecryptedText 
                text="Data Engineering Internship @ RBC"
                sequential={true}
                speed={100}
                className="text-gray-600 leading-relaxed"
                encryptedClassName="text-gray-400"
                animateOn="view"
                parentClassName="block"
              />
            </li>
            <li>
              <DecryptedText 
                text="CS 32: Data Structures & Algorithms"
                sequential={true}
                speed={100}
                className="text-gray-600 leading-relaxed"
                encryptedClassName="text-gray-400"
                animateOn="view"
                parentClassName="block"
              />
            </li>
            <li>
              <DecryptedText 
                text="Recruitment Prep: Blind 75"
                sequential={true}
                speed={100}
                className="text-gray-600 leading-relaxed"
                encryptedClassName="text-gray-400"
                animateOn="view"
                parentClassName="block"
              />
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (

              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <h6 className="text-sm font-semibold text-gray-700 mb-3">{project.award}</h6>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
                
                <a 
                  href={project.link} 
                  className="text-blue-600 hover:text-blue-800 text-sm underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg mb-2 text-gray-800">Programming Languages</h3>
              <div className="space-y-2">
                {["JavaScript", "TypeScript", "Python","C++"].map((skill) => (
                  <div key={skill} className="text-gray-600 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg mb-2 text-gray-800">Frontend</h3>
              <div className="space-y-2">
                {["React", "Next.js", "Tailwind CSS","ShadCN"].map((skill, index) => (
                  <div key={index} className="text-gray-600 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg mb-2 text-gray-800">Backend</h3>
              <div className="space-y-2">
                {["Flask","FastAPI","OpenCV","Node.js"].map((skill, index) => (
                  <div key={index} className="text-gray-600 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg mb-2 text-gray-800">Databases & Tools</h3>
              <div className="space-y-2">
                {["MongoDB","Supabase","Git","Docker"].map((skill) => (
                  <div key={skill} className="text-gray-600 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact</h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="text-gray-500">Email:</span> richardli1@g.ucla.edu
            </p>
            <p className="text-gray-600">
              <span className="text-gray-500">GitHub:</span> 
              <a href="https://github.com/dkyxhjj" className="text-blue-600 hover:text-blue-800 underline ml-1">
                github.com/dkyxhjj
              </a>
            </p>
            <p className="text-gray-600">
              <span className="text-gray-500">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/richardli14/" className="text-blue-600 hover:text-blue-800 underline ml-1">
                linkedin.com/in/richardli14
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 text-sm">© 2025 Richard Li</p>
        </div>
      </footer>
    </div>
  );
}

'use client';
import TiltedTile from '../components/TiltedTile';
import Aurora from '../components/Aurora';

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
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <Aurora
          colorStops={["#0a0f3d", "#1b2ea0", "#5a1d84"]}
          blend={0.2}
          amplitude={1.0}
          speed={1.0}
        />
      </div>
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-10 relative z-10">
        {/* About */}
        <section className="mb-16">
          <div className="mb-6 pl-4">  
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="flex flex-col items-center space-y-6">
              <TiltedTile
                imageSrc="/headshot1.png"
                altText="Richard Li headshot"
                captionText="yoooooo"
                containerHeight="280px"
                containerWidth="280px"
                imageHeight="280px"
                imageWidth="280px"
                scaleOnHover={1.1}
                rotateAmplitude={14}
                showMobileWarning={true}
                showTooltip={true}
                overlayContent={null}
                displayOverlayContent={false}
              />  
      
              <div className="text-center mt-6">
                <h1 className="text-lg font-normal text-white">Richard Li</h1>
                <p className="text-white/60 mt-2 text-sm">Data Engineer @ RBC</p>
              </div>
            </div>
            <div className="text-center md:ml-6">
            <h2 className="text-2xl font-light mb-6 text-white tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white/40">About</h2>
              <p className="text-white/70 leading-relaxed mb-4 text-left text-md">
                Rising sophomore @ UCLA majoring in Statistics and Data Science and minoring in Data Science Engineering (DSE), interested in geospatial engineering, software engineering and deep machine learning.
              </p>
              <p className="text-white/70 leading-relaxed mb-4 text-left text-md">
                This summer I&apos;m locking in on my 9-5 Data Engineering Internship @ RBC, working under their Data Analytics and Innovation team. Also taking CS32 (Data Structures and Algorithms) and on that Neetcode Grind
              </p>
              
              
            </div>
          </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-light mb-10 text-white tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white/40">Projects</h2>
          
            <div className="space-y-10">
            {projects.map((project, index) => (

              <div key={index} className="mb-10 text-left">
                <h3 className="text-xl font-light text-white mb-3">{project.title}</h3>
                <h6 className="text-sm font-medium text-white/90 mb-3">{project.award}</h6>
                <p className="text-white/80 mb-4 text-lg leading-relaxed">{project.description}</p>
                <p className="text-sm text-white/70 mb-4 font-medium">{project.tech}</p>
                
                <a 
                  href={project.link} 
                  className="text-blue-300 hover:text-blue-200 text-sm px-4 py-2 rounded-md border border-blue-400/30 inline-block transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Skills */}
        
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-light text-center mb-10 text-white tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto after:w-16 after:h-px after:bg-white/40">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 md:col-span-1 text-center">
                <h3 className="text-md font-bold mb-2 text-white/80">Languages</h3>
                <div className="space-y-1">
                  {["JavaScript", "TypeScript", "Python","C++"].map((skill) => (
                    <div 
                      key={skill} 
                      className="text-white/70 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 text-center">
                <h3 className="text-md font-bold mb-2 text-white/80">Frontend</h3>
                <div className="space-y-1">
                  {["React", "Next.js", "Tailwind CSS","ShadCN"].map((skill, index) => (
                    <div 
                      key={index} 
                      className="text-white/70 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 text-center">
                <h3 className="text-md font-bold mb-2 text-white/80">Backend</h3>
                <div className="space-y-1">
                  {["Flask","FastAPI","OpenCV","Node.js"].map((skill, index) => (
                    <div 
                      key={index} 
                      className="text-white/70 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 text-center">
                <h3 className="text-md font-bold mb-2 text-white/80">Databases & Tools</h3>
                <div className="space-y-1">
                  {["MongoDB","Supabase","Git","Docker"].map((skill) => (
                    <div 
                      key={skill} 
                      className="text-white/70 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="pl-4 text-center">
            <h2 className="text-2xl font-light mb-6 text-white tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white/40">Contact</h2>
            <div className="space-y-2">
            <p className="text-white/70 text-md">
              <span className="text-white/50">Email:</span> richardli1@g.ucla.edu
            </p>
            <p className="text-white/70 text-md">
              <span className="text-white/50">GitHub:</span> 
              <a href="https://github.com/dkyxhjj" className="text-blue-300 hover:text-blue-200 ml-1">
                github.com/dkyxhjj
              </a>
            </p>
            <p className="text-white/70 text-md">
              <span className="text-white/50">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/richardli14/" className="text-blue-300 hover:text-blue-200 ml-1">
                linkedin.com/in/richardli14
              </a>
            </p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}

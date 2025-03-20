import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const Experience = () => {
  const parallax = useParallax({
    speed: -5,
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl rotate-12">💼</div>
        <div className="absolute bottom-20 right-20 text-9xl -rotate-12">⚡</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            Experience
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div className="space-y-16">
          {data.experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700 ml-6 md:ml-0"></div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex flex-col items-start">
                  <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center z-10 mb-4">
                    <span className="text-2xl">{exp.emoji}</span>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg transform hover:rotate-2 transition-transform duration-300 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg transform hover:-rotate-2 transition-transform duration-300 mb-2">
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg transform hover:rotate-2 transition-transform duration-300">
                    <p className="text-gray-300">{exp.period}</p>
                  </div>
                </div>
                
                <div ref={index === 0 ? parallax.ref : null} className="md:w-3/4 bg-gray-800 rounded-lg p-6 transform hover:scale-[1.01] transition-transform duration-300">
                  <ul className="space-y-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-2 h-2 bg-accent rounded-full"></div>
                        <p className="text-gray-300 mb-2">{highlight.text}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {highlight.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx} 
                              className="bg-gray-700 px-2 py-1 rounded-md text-xs text-accent font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const Projects = () => {
  const parallax = useParallax({
    speed: 5,
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-20 text-9xl rotate-12">🚀</div>
        <div className="absolute bottom-20 left-20 text-9xl -rotate-12">💡</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            Projects
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div ref={parallax.ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg transform hover:scale-[1.03] transition-transform duration-300 shadow-xl"
              style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{project.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mt-4">{project.description}</p>
              
              <div className="mt-6 flex justify-end">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transform hover:rotate-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">View Details</span>
                  <span>👁️</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
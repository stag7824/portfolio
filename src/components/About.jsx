import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const About = () => {
  const parallax = useParallax({
    speed: 5,
  });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-20 text-9xl rotate-12">{data.about.emoji}</div>
        <div className="absolute bottom-20 left-20 text-9xl -rotate-12">💫</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            About Me
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div ref={parallax.ref} className="bg-gray-800 p-8 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4 transform -rotate-12">
              <span className="text-3xl">{data.about.emoji}</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {data.about.summary}
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {['Passionate', 'Problem Solver', 'Team Player', 'Innovative', 'Detail-Oriented'].map((trait, index) => (
              <span 
                key={index} 
                className="bg-gray-700 px-4 py-2 rounded-lg text-white transform hover:rotate-2 transition-transform duration-300"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
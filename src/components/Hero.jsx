import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';
import GlitchLogo from './GlitchLogo';

const Hero = () => {
  const parallax = useParallax({
    speed: 10,
  });

  const { personalInfo } = data;

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 text-[20rem] opacity-5 transform -rotate-12">{personalInfo.emoji}</div>
        <div className="absolute bottom-1/4 right-1/4 text-[15rem] opacity-5 transform rotate-12">🔥</div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left column with name and title */}
        <div className="flex flex-col justify-center">
          <div ref={parallax.ref} className="mb-6">
            <div className="mb-4">
              {personalInfo.name.split(' ').map((word, index) => (
                <GlitchLogo key={index} text={word} />
              ))}
            </div>
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10">
                Software Engineer
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
            </div>
          </div>
        </div>

        {/* Right column with contact info */}
        <div className="flex flex-col justify-center">
          <div className="bg-gray-800 p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">{personalInfo.emoji}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Get in touch</h3>
                <p className="text-gray-400">Let's build something amazing together</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📱</span>
                </div>
                <p className="text-gray-300">{personalInfo.phone}</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📧</span>
                </div>
                <p className="text-gray-300">{personalInfo.email}</p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg transform hover:-rotate-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">LinkedIn</span>
                  <span>👥</span>
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transform hover:rotate-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">GitHub</span>
                  <span>🐙</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
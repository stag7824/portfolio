import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const Education = () => {
  const parallax = useParallax({
    speed: 5,
  });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl rotate-12">🎓</div>
        <div className="absolute bottom-20 right-20 text-9xl -rotate-12">📚</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            Education
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div className="space-y-12">
          {data.education.map((edu, index) => (
            <div 
              key={index} 
              ref={index === 0 ? parallax.ref : null}
              className="bg-gray-800 p-6 rounded-lg transform hover:scale-[1.02] transition-transform duration-300 shadow-xl"
              style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{edu.emoji}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution} | {edu.period}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-white transform hover:rotate-2 transition-transform duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
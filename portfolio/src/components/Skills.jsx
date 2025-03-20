import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const Skills = () => {
  const parallax = useParallax({
    speed: 5,
  });

  const { skills } = data;
  
  // Categories to display
  const categories = [
    { key: 'backend', title: 'Backend', emoji: '🖥️' },
    { key: 'frontend', title: 'Frontend', emoji: '🎨' },
    { key: 'mobile', title: 'Mobile', emoji: '📱' },
    { key: 'database', title: 'Database', emoji: '🗄️' },
    { key: 'stateManagement', title: 'State Management', emoji: '🔄' },
    { key: 'devOps', title: 'DevOps', emoji: '🚀' },
    { key: 'design', title: 'Design', emoji: '✏️' },
    { key: 'versionControl', title: 'Version Control', emoji: '📊' },
    { key: 'other', title: 'Other', emoji: '🛠️' },
    { key: 'languages', title: 'Languages', emoji: '🗣️' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl rotate-12">{skills.emoji}</div>
        <div className="absolute bottom-20 right-20 text-9xl -rotate-12">🔧</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            Skills
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div ref={parallax.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg transform hover:scale-[1.02] transition-transform duration-300 shadow-xl"
              style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills[category.key]?.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-white transform hover:rotate-2 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { useParallax } from 'react-scroll-parallax';
import data from '../data.json';

const Contact = () => {
  const parallax = useParallax({
    speed: -5,
  });

  const { personalInfo } = data;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-20 text-9xl rotate-12">📱</div>
        <div className="absolute bottom-20 left-20 text-9xl -rotate-12">✉️</div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-extrabold text-white relative z-10">
            Contact Me
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent opacity-70 transform -rotate-1"></div>
        </div>
        
        <div ref={parallax.ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
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
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">Send Message</span>
                <span>📤</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
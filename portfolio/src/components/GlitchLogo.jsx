import { useEffect, useState } from 'react';
import '../components/GlitchEffect.css';

const GlitchLogo = ({ text }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Randomly trigger glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 2000);
    }, 1 + Math.random() * 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative inline-block">
      <h1 className={`text-5xl md:text-7xl font-black text-white mb-4 leading-tight ${isGlitching ? 'glitch' : ''}`}>
        {text}
        {isGlitching && (
          <>
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true">{text}</span>
          </>
        )}
      </h1>
    </div>
  );
};

export default GlitchLogo;
import { useEffect, useRef, useState } from 'react';
import '../components/GlitchEffect.css';

const HexRain = () => {
  const containerRef = useRef(null);
  const [hexDrops, setHexDrops] = useState([]);
  const [lightnings, setLightnings] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  
  // Generate random hex code
  const generateHex = () => {
    const chars = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  // Create a new hex drop
  const createHexDrop = () => {
    if (!containerRef.current || !isVisible) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    
    const newDrop = {
      id: Date.now() + Math.random(),
      left: Math.random() * containerWidth,
      animationDuration: 2 + Math.random() * 3 + 's',
      value: generateHex(),
    };
    
    setHexDrops(prev => [...prev, newDrop]);
    
    // Remove the drop after animation completes
    setTimeout(() => {
      setHexDrops(prev => prev.filter(drop => drop.id !== newDrop.id));
    }, 5000);
  };

  // Create a new lightning
  const createLightning = () => {
    if (!containerRef.current || !isVisible) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    
    const newLightning = {
      id: Date.now() + Math.random(),
      left: Math.random() * containerWidth,
      height: 50 + Math.random() * (containerHeight - 100),
      animationDelay: Math.random() * 5 + 's',
    };
    
    setLightnings(prev => [...prev, newLightning]);
    
    // Remove the lightning after animation completes
    setTimeout(() => {
      setLightnings(prev => prev.filter(lightning => lightning.id !== newLightning.id));
    }, 6000);
  };

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Create hex drops and lightnings at intervals when visible
  useEffect(() => {
    if (!isVisible) return;

    const hexInterval = setInterval(createHexDrop, 200);
    const lightningInterval = setInterval(createLightning, 2000);

    return () => {
      clearInterval(hexInterval);
      clearInterval(lightningInterval);
    };
  }, [isVisible]);

  return (
    <div className="hex-container" ref={containerRef}>
      {hexDrops.map(drop => (
        <div
          key={drop.id}
          className="hex-drop"
          style={{
            left: `${drop.left}px`,
            animationDuration: drop.animationDuration,
          }}
        >
          {drop.value}
        </div>
      ))}
      
      {lightnings.map(lightning => (
        <div
          key={lightning.id}
          className="lightning"
          style={{
            left: `${lightning.left}px`,
            height: `${lightning.height}px`,
            animationDelay: lightning.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default HexRain;
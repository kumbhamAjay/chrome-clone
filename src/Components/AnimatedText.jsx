import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedText = () => {
  const texts = ['Text 1', 'Text 2', 'Text 3'];
  const backgroundColors = ['#FF5733', '#33FF57', '#3357FF'];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    texts.forEach((_, i) => {
      timeline
        .to(`.text-${i}`, {
          y: 0,
          backgroundColor: backgroundColors[i],
          duration: 0.5,
          ease: 'power1.inOut',
        })
        .to(`.text-${i}`, {
          delay: 1.5,
          y: '-100%',
          duration: 0.5,
          ease: 'power1.inOut',
        });
    });

    return () => {
      timeline.kill();
    };
  }, [texts, backgroundColors]);

  const containerStyle = {
    overflow: 'hidden',
    height: '50px',
    position: 'relative',
    width: '200px',
    textAlign: 'center',
  };

  const textStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '100%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      {texts.map((text, index) => (
        <span key={index} className={`text-${index}`} style={textStyle}>
          {text}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;

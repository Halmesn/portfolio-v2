import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

interface BirdsProps {
  theme: 'dark' | 'light';
}

interface VantaEffect {
  destroy: () => void;
  setOptions: (options: Record<string, any>) => void;
  restart: () => void;
}

const Birds: React.FC<BirdsProps> = React.memo((props) => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          quantity: 5,
          birdSize: 1,
          wingSpan: 30,
          separation: 20,
          speedLimit: 5,
          alignment: 20,
          cohesion: 20,
          backgroundColor: '#fefaf6',
          color1: 0xff0000,
        }) as VantaEffect,
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (vantaEffect) {
      if (props.theme === 'dark') {
        vantaEffect.setOptions({
          backgroundColor: '#0a192f',
          color1: 0x232e74,
        });
      } else if (props.theme === 'light') {
        vantaEffect.setOptions({
          backgroundColor: '#fefaf6',
          color1: 0xff0000,
        });
      }
      vantaEffect.restart();
    }
  }, [props.theme, vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        height: '100%',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '0',
      }}
    ></div>
  );
});

export default Birds;

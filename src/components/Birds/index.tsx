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
      const initialOptions = {
        el: myRef.current,
        quantity: 5,
        birdSize: 1,
        wingSpan: 30,
        separation: 20,
        speedLimit: 5,
        alignment: 20,
        cohesion: 20,
        backgroundColor: props.theme === 'dark' ? '#0a192f' : '#fefaf6',
        color1: props.theme === 'dark' ? 0x232e74 : 0xff0000,
      };

      setVantaEffect(BIRDS(initialOptions) as VantaEffect);
    } else if (vantaEffect) {
      const options =
        props.theme === 'dark'
          ? {
              backgroundColor: '#0a192f',
              color1: 0x232e74,
            }
          : {
              backgroundColor: '#fefaf6',
              color1: 0xff0000,
            };
      vantaEffect.setOptions(options);
      vantaEffect.restart();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, props.theme]);

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

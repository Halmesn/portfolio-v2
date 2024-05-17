import { useState, useEffect } from 'react';

export const useViewport = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width;
};

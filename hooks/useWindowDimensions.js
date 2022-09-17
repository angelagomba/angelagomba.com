import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';
  const getDimensions = {
    width: hasWindow ? window.innerWidth : null,
    height: hasWindow ? innerHeight : null
  }
  const [dimensions, setDimensions] = useState(getDimensions)

  useEffect(() => {
    if (hasWindow) {
      const handleResize = setDimensions(getDimensions)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow]);

  return dimensions;
}
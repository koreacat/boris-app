import { useState, useEffect } from 'react';

function useCyclingIndex(length: number, intervalDuration: number): number {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % length);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [length, intervalDuration]);

  return currentIndex;
}

export default useCyclingIndex;

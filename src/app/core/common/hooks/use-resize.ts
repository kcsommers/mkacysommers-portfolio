import { useState, useEffect } from 'react';
import { useDebounce } from './use-debounce';

interface IResizeHook {
  width: number;
  height: number;
}

export const useResize = (debounce = false): IResizeHook => {
  const [windowDims, setWindowSize] = useState<IResizeHook>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [debouncedDims, setDebouncedDims] = useState<IResizeHook>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const debouncer = useDebounce(windowDims, 100);

  useEffect(() => {
    setDebouncedDims(debouncer);
  }, [debouncer]);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return debounce ? debouncedDims : windowDims;
};

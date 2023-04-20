import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

type WindowDims = {
  width: number;
  height: number;
};

export const useWindowSize = (listen = true, debounceDelay = 0): WindowDims => {
  const [windowDims, setWindowDims] = useState<WindowDims>({
    width: undefined,
    height: undefined,
  });

  const [debouncedWindowDims, setDebouncedWindowDims] = useState<WindowDims>({
    width: undefined,
    height: undefined,
  });

  const debouncer = useDebounce(windowDims, debounceDelay);

  useEffect(() => {
    setDebouncedWindowDims(debouncer);
  }, [debouncer]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDims({
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      });
    };
    if (listen) {
      window.addEventListener('resize', handleResize);
    }
    // Call handler right away so state gets updated with initial window size
    handleResize();
    return () => {
      if (listen) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return debounceDelay ? debouncedWindowDims : windowDims;
};

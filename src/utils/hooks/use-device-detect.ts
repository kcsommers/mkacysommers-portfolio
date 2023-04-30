import { useEffect, useState } from 'react';
import { isMobile as detectMobile } from 'react-device-detect';

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(detectMobile);
  }, []);

  return { isMobile };
};

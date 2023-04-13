import Image from 'next/image';
import { useMemo, useRef } from 'react';
import { useWindowSize } from '../../app/utils/hooks/use-window-size';

export const MainBackground = () => {
  const windowDims = useWindowSize();
  const logoCount = useMemo(() => {
    if (windowDims.width > 1600) {
      return 5;
    }
    if (windowDims.width > 600) {
      return 4;
    }
    return 3;
  }, [windowDims.width]);
  const logoRefs = useRef<HTMLDivElement[]>([]);
  const logoHeght = useMemo(() => {
    return logoRefs.current[0]?.offsetWidth * 1.455;
  }, [windowDims.width]);

  return (
    <div className="fixed top-0 left-0 w-full z-10 h-screen overflow-hidden">
      <div
        className={`absolute left-0 w-full top-1/2 -translate-y-1/2 flex justify-center`}
      >
        <div
          className="flex justify-center"
          style={{
            minWidth: `calc(100% + ${logoRefs.current[0]?.offsetWidth || 0}px)`,
          }}
        >
          {[...Array(logoCount).keys()].map((i) => (
            <div
              key={`mkacy-logo-${i}`}
              className="flex-1 relative m-4"
              ref={(ref) => logoRefs.current.push(ref)}
              style={{
                height: `${logoHeght}px`,
                opacity: i === logoCount - 2 ? 0.25 : 0,
                minWidth: '350px',
                maxWidth: '420px',
              }}
            >
              <Image
                src="https://res.cloudinary.com/kcsommers/image/upload/v1644788416/M%20Kacy%20Sommers/mkacysommers_logo2.png"
                alt="M Kacy Sommers logo"
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

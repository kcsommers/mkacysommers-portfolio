import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useAssetCache } from '../../context/use-asset-cache';
import { logger } from '../../utils/logger';

const JONI_VIDEO_URL =
  'https://res.cloudinary.com/kcsommers/video/upload/v1682388514/M%20Kacy%20Sommers/joni.mov';

type JoniVideoProps = {
  isVisible: boolean;
  isSelected: boolean;
};

export const JoniVideo = ({ isVisible, isSelected }: JoniVideoProps) => {
  const { videoCache } = useAssetCache();
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (isSelected && videoRef.current) {
      videoRef.current.play();
    }
  }, [isSelected]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 bottom-0 left-[10%] right-[10%] flex items-center justify-center z-50"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 10,
              },
            },
            exit: {
              opacity: 0,
            },
          }}
        >
          <video
            ref={videoRef}
            className="w-full bg-neutral-200 object-cover h-full"
            autoPlay
            loop
            onError={(e) => logger.error('joni video error:::: ', e)}
            onLoadStart={() => logger.log('joni vid load started:::::')}
            onLoadedData={() => logger.log('joni vid data loaded::::')}
          >
            <source
              src={videoCache.get(JONI_VIDEO_URL) || JONI_VIDEO_URL}
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

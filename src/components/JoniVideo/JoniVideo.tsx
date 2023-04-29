import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useAssetCache } from '../../context/use-asset-cache';
import { logger } from '../../utils/logger';
import classNames from 'classnames';

const JONI_VIDEO_URL =
  'https://res.cloudinary.com/kcsommers/video/upload/v1682388514/M%20Kacy%20Sommers/joni.mov';

type JoniVideoProps = {
  isVisible: boolean;
  isSelected: boolean;
};

export const JoniVideo = ({ isVisible, isSelected }: JoniVideoProps) => {
  const { videoCache } = useAssetCache();
  const [videoRef, setVideoRef] = useState<HTMLVideoElement>();

  useEffect(() => {
    if (!videoRef) {
      return;
    }
    if (isSelected) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  }, [isSelected]);

  useEffect(() => {
    if (videoRef && isSelected) {
      videoRef.play();
    }
  }, [videoRef, isSelected]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={classNames(
            'fixed top-1/2 -translate-y-1/2 left-[10%] right-[10%] flex items-center justify-center z-50'
          )}
          style={{
            aspectRatio: '800 / 450',
          }}
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
                duration: 3,
              },
            },
            exit: {
              opacity: 0,
            },
          }}
        >
          <video
            ref={(ref) => setVideoRef(ref)}
            className="w-full bg-neutral-200 object-cover h-full"
            poster="https://res.cloudinary.com/kcsommers/image/upload/v1682438827/M%20Kacy%20Sommers/joni-still.jpg"
            loop
            muted
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

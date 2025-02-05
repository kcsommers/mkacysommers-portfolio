import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { Button } from '../components/Button/Button';
import { JoniVideo } from '../components/JoniVideo/JoniVideo';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import DownloadIcon from '../components/svg/download-solid.svg';
import { useAssetCache } from '../context/use-asset-cache';
import { useDeviceDetect } from '../utils/hooks/use-device-detect';

const RESUME_IMG_URL =
  'https://res.cloudinary.com/kcsommers/image/upload/v1735403392/M%20Kacy%20Sommers/nlsqm0ocdkdsgxizgt8u.png';

const ResumePage = () => {
  const { imageCache } = useAssetCache();
  const [showJoni, setShowJoni] = useState(false);
  const [joniSelected, setJoniSelected] = useState(false);
  const { isMobile } = useDeviceDetect();

  const downloadResume = () => {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = '/MKacySommers_resume.pdf';
    a.download = 'M Kacy Sommers Resume';
    a.target = '_blank';
    a.click();
  };

  return (
    <>
      <SharedHead
        metaTitle="M Kacy Sommers | Resume"
        metaImage=""
        pagePath="/resume"
      />
      <AppGutters
        setShowJoni={setShowJoni}
        joniSelected={joniSelected}
        setJoniSelected={setJoniSelected}
      />
      {!isMobile && (
        <JoniVideo isVisible={showJoni} isSelected={joniSelected} />
      )}
      <AppBackground />
      <div className="flex flex-1 min-w-[80%] max-w-[80%] mx-auto">
        <MainLayout
          pageTitle="Resume"
          leftContent={
            <div className="my-8">
              <Button
                text="Download"
                onClick={downloadResume}
                isFullWidth={false}
                // @ts-ignore
                icon={<DownloadIcon width={18} className="fill-inherit" />}
              />
            </div>
          }
          rightContent={
            <div
              className="relative shadow-mat tablet-landscape-up:mt-[20vh]"
              style={{
                aspectRatio: '588 / 761',
              }}
            >
              <Image
                src={imageCache.get(RESUME_IMG_URL) || RESUME_IMG_URL}
                alt="M Kacy Sommers Resume"
                fill={true}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = context.req.headers;
  return {
    props: {
      theme: headers['x-theme'] || 'LIGHT',
    },
  };
};

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default ResumePage;

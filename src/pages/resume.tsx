import Image from 'next/image';
import { ReactElement } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { Button } from '../components/Button/Button';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import DownloadIcon from '../components/svg/download-solid.svg';
import { useAssetCache } from '../context/use-asset-cache';

const RESUME_IMG_URL =
  'https://res.cloudinary.com/kcsommers/image/upload/v1674185811/M%20Kacy%20Sommers/MKacySommers-resume.png';

const ResumePage = () => {
  const { imageCache } = useAssetCache();

  const downloadResume = () => {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = '/MKacySommers-resume.pdf';
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
      <AppGutters />
      <AppBackground />
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
    </>
  );
};

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default ResumePage;

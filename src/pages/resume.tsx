import Image from 'next/image';
import { ReactElement } from 'react';
import { Button } from '../components/Button/Button';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { TransitionView } from '../components/TransitionView/TransitionView';
import DownloadIcon from '../components/svg/download-solid.svg';

const ResumePage = () => {
  const downloadResume = () => {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = '/MKacySommers-resume.pdf';
    a.download = 'M Kacy Sommers Resume';
    a.target = '_blank';
    a.click();
  };

  return (
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
            src="https://res.cloudinary.com/kcsommers/image/upload/v1674185811/M%20Kacy%20Sommers/MKacySommers-resume.png"
            alt="M Kacy Sommers Resume"
            fill={true}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      }
    />
  );
};

ResumePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default ResumePage;

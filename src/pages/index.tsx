import { GetServerSideProps } from 'next';
import { ReactElement, useState } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { JoniVideo } from '../components/JoniVideo/JoniVideo';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SharedHead } from '../components/SharedHead/SharedHead';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { useDeviceDetect } from '../utils/hooks/use-device-detect';

const HomePage = () => {
  const [showJoni, setShowJoni] = useState(false);
  const [joniSelected, setJoniSelected] = useState(false);
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <SharedHead metaTitle="M Kacy Sommers" metaImage="" pagePath="/" />
      <AppBackground />
      <AppGutters
        setShowJoni={setShowJoni}
        joniSelected={joniSelected}
        setJoniSelected={setJoniSelected}
      />
      {!isMobile && (
        <JoniVideo isVisible={showJoni} isSelected={joniSelected} />
      )}
      <div className="flex flex-1 min-w-[80%] max-w-[80%] mx-auto">
        <MainLayout
          pageTitle={
            <>
              <span className="text-primary">M</span> Kacy Sommers
            </>
          }
          pageSubtext="Web Developer. Javascript Professional."
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default HomePage;

import { ReactElement } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { TransitionView } from '../components/TransitionView/TransitionView';
import { SharedHead } from '../components/SharedHead/SharedHead';

const HomePage = () => {
  return (
    <>
      <SharedHead metaTitle="M Kacy Sommers" metaImage="" pagePath="/" />
      <AppGutters />
      <AppBackground />
      <MainLayout
        pageTitle={
          <>
            <span className="text-primary">M</span> Kacy Sommers
          </>
        }
        pageSubtext="Web Developer. Javascript Professional."
      />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default HomePage;

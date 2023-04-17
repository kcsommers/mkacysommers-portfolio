import { ReactElement } from 'react';
import { AppBackground } from '../components/AppBackground/AppBackground';
import { AppGutters } from '../components/AppGutters/AppGutters';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { TransitionView } from '../components/TransitionView/TransitionView';

const HomePage = () => {
  return (
    <>
      <AppGutters />
      <AppBackground />
      <MainLayout
        pageTitle="M Kacy Sommers"
        pageSubtext="Web Developer. Javascript Professional."
      />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default HomePage;

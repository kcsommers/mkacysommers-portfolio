import { AnimatePresence } from 'framer-motion';
import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  ResumePage,
} from '@pages';
import { Navigator } from '@components';
import { Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  const location = useLocation();
  return (
    <main className={styles.appWrap}>
      <Navigator />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path="/about"
            render={(props) => <AboutPage {...props} />}
          />
          <Route
            exact
            path="/projects"
            render={(props) => <ProjectsPage {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} />}
          />
          <Route
            exact
            path="/resume"
            render={(props) => <ResumePage {...props} />}
          />
        </Switch>
      </AnimatePresence>
    </main>
  );
};

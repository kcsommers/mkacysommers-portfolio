import { AnimatePresence } from 'framer-motion';
import { AboutPage, ContactPage, ProjectsPage, ResumePage } from '@pages';
import { Home, Work } from './views';
import { Navigator } from '@components';
import { Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  const location = useLocation();
  return (
    <main className={styles.appWrap}>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/about"
            render={(props) => <AboutPage {...props} />}
          />
          <Route exact path="/work" component={Work} />
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

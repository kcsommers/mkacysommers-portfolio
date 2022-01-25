import { AboutPage, ContactPage, ResumePage } from '@pages';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { Home, TransitionView, Work } from './views';

export const App = () => {
  const location = useLocation();
  return (
    <main className={styles.appWrap}>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => (
              <TransitionView>
                <Home />
              </TransitionView>
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => <AboutPage {...props} />}
          />
          <Route
            exact
            path="/work"
            render={() => (
              <TransitionView>
                <Work />
              </TransitionView>
            )}
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

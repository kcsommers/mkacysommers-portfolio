import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { useTransition } from './core';
import {
  About,
  Contact,
  Home,
  ProjectView,
  ResumeView,
  TransitionView,
  Work,
} from './views';

export const App = () => {
  const location = useLocation();
  const { inTransition, setInTransition } = useTransition();
  return (
    <main className={styles.appWrap}>
      <AnimatePresence onExitComplete={() => setInTransition(false)}>
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
            render={() => (
              <TransitionView>
                <About />
              </TransitionView>
            )}
          />
          <Route
            path="/work/:projectTitle?"
            render={() => (
              <TransitionView>
                <Work />
              </TransitionView>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <TransitionView>
                <Contact />
              </TransitionView>
            )}
          />
          <Route
            exact
            path="/resume"
            render={() => (
              <TransitionView>
                <ResumeView />
              </TransitionView>
            )}
          />
        </Switch>
        <div className={styles.logoWrap} key="logo-light">
          <img
            src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
            alt="M Kacy Sommers logo"
          />
        </div>
      </AnimatePresence>
    </main>
  );
};

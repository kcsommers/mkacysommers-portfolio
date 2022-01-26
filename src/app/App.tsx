import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { About, Contact, Home, Resume, TransitionView, Work } from './views';

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
            render={() => (
              <TransitionView>
                <About />
              </TransitionView>
            )}
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
                <Resume />
              </TransitionView>
            )}
          />
        </Switch>
      </AnimatePresence>
      <div className={styles.logoWrap}>
        <img
          src="https://res.cloudinary.com/kcsommers/image/upload/v1643178708/mkacysommerslogo-light.png"
          alt="M Kacy Sommers logo"
        />
      </div>
    </main>
  );
};

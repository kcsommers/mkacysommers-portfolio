import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { TransitionView } from './components';
import { About, Contact, Home, ResumeView, Work } from './views';

export const App = () => {
  const location = useLocation();

  return (
    <main className={styles.appWrap}>
      <div className={styles.socialNavWrap}>
        <a href="https://www.linkedin.com/in/kacy-sommers/">linkedin</a>
        <a href="https://github.com/kcsommers?tab=repositories">github</a>
        <span className={styles.socialNavSlash}>\</span>
        <span>&copy; 2022</span>
      </div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <TransitionView>
                <Home />
              </TransitionView>
            }
          />
          <Route
            path="/about"
            element={
              <TransitionView>
                <About />
              </TransitionView>
            }
          />
          <Route
            path="/work/*"
            element={
              <TransitionView>
                <Work />
              </TransitionView>
            }
          />
          <Route
            path="/contact"
            element={
              <TransitionView>
                <Contact />
              </TransitionView>
            }
          />
          <Route
            path="/resume"
            element={
              <TransitionView>
                <ResumeView />
              </TransitionView>
            }
          />
        </Routes>
        <div className={styles.logoWrap}>
          <img
            src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
            alt="M Kacy Sommers logo"
          />
        </div>
      </AnimatePresence>
    </main>
  );
};

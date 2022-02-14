import {
  faGithub,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { TransitionView } from './components';
import { useTransition } from './core';
import { About, Contact, Home, ResumeView, Work } from './views';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const App = () => {
  const location = useLocation();

  const { inTransition, setInTransition } = useTransition();

  useEffect(() => {
    emailjs.init('user_oe7QXUZo6RbkfylkjBt5j');
  }, []);

  return (
    <main className={styles.appWrap}>
      <div className={styles.initialsWrap}>
        <Link
          to="/"
          onClick={() => location.pathname !== '/' && setInTransition(true)}
        >
          MKS
        </Link>
      </div>
      <div className={styles.socialNavWrap}>
        <a href="https://www.linkedin.com/in/kacy-sommers/">
          <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
        </a>
        <a href="https://github.com/kcsommers?tab=repositories">
          <FontAwesomeIcon icon={faGithub as IconProp} />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.emailWrap}>
        <a href="mailto:kacysommers@gmail.com">kacysommers@gmail.com</a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.appWrapInner}>
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
          <div
            className={`${styles.logoWrap}${
              inTransition ? ` ${styles.transitioning}` : ''
            }`}
          >
            <img
              src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
              alt="M Kacy Sommers logo"
            />
            <img
              src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
              alt="M Kacy Sommers logo"
            />
            <img
              src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
              alt="M Kacy Sommers logo"
            />
            <img
              src="https://res.cloudinary.com/kcsommers/image/upload/v1643329476/M%20Kacy%20Sommers/mksommerslogo-gray1.png"
              alt="M Kacy Sommers logo"
            />
          </div>
        </AnimatePresence>
      </div>
    </main>
  );
};

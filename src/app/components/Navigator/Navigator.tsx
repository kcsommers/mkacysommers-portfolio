import {
  FOR_TABLET_PORTRAIT_UP,
  Page,
  PageColors,
  shiftColor,
  useResize,
} from '@core';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Navigator.module.scss';

interface INavLink {
  display: string;
  link: string;
}

const navLinks: INavLink[] = [
  {
    display: 'About',
    link: '/about',
  },
  {
    display: 'Projects',
    link: '/projects',
  },
  {
    display: 'Contact',
    link: '/contact',
  },
  {
    display: 'Resume',
    link: '/resume',
  },
];

export const Navigator = () => {
  const history = useHistory();

  const location = useLocation();

  const _bgColor = useMemo(() => {
    const _page = location.pathname.replace('/', '') as Page;
    return shiftColor(PageColors[_page || 'home'], 50);
  }, [location.pathname]);

  const windowDims = useResize(true);

  const [mounted, setMounted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(
    windowDims.width <= FOR_TABLET_PORTRAIT_UP
  );

  const [isCollapsible, setIsCollapsible] = useState(
    windowDims.width <= FOR_TABLET_PORTRAIT_UP
  );

  const navigate = (path: string): void => {
    history.push(path);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // resize effect
  useEffect(() => {
    if (!windowDims.width) {
      return;
    }
    if (windowDims.width <= FOR_TABLET_PORTRAIT_UP && !isCollapsible) {
      setIsCollapsible(true);
      return;
    }
    if (windowDims.width > FOR_TABLET_PORTRAIT_UP && isCollapsible) {
      setIsCollapsible(false);
    }
  }, [windowDims]);

  useEffect(() => {
    setIsCollapsed(isCollapsible);
  }, [isCollapsible]);

  return (
    <motion.div className={`${styles.navigatorWrap}`}>
      <div
        className={styles.navigatorInner}
        style={{
          backgroundColor: _bgColor,
        }}
      >
        <div className={styles.navigatorListWrap}>
          <motion.h1
            className={`${
              mounted && location.pathname === '/'
                ? ` ${styles.active}`
                : ` ${styles.inactive}`
            }`}
            initial="enter"
            animate="center"
            exit="exit"
            key={'M Kacy Sommers'}
            onClick={(e) => {
              e.stopPropagation();
              navigate('/');
            }}
            variants={{
              enter: {
                opacity: 0,
                scale: 1.25,
              },
              center: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 1,
                scale: 1.25,
              },
            }}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            <motion.span
              key="initials"
              className={styles.linkBorder}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: {
                  opacity: 0,
                },
                center: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
              }}
            >
              <span>M Kacy</span>
              <br />
              <span>Sommers</span>
            </motion.span>
          </motion.h1>
          {navLinks.map((l, i) => (
            <motion.div
              className={`${styles.navigatorListItem}${
                mounted && location.pathname === l.link
                  ? ` ${styles.active}`
                  : ` ${styles.inactive}`
              }`}
              initial="enter"
              animate="center"
              exit="exit"
              key={l.display}
              variants={{
                enter: {
                  opacity: 0,
                  y: '200%',
                },
                center: {
                  opacity: 1,
                  y: '0%',
                },
                exit: {
                  opacity: 1,
                  y: '0%',
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(l.link);
              }}
              transition={{
                delay: 0.25 * i,
                duration: 1,
                type: 'spring',
              }}
            >
              <span className={styles.linkBorder}>
                <span className={styles.pageLink}>{l.display}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

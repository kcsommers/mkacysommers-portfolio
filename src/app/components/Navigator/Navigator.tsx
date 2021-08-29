import { FOR_TABLET_LANDSCAPE_UP, useResize } from '@core';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
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

  const windowDims = useResize(true);

  const [mounted, setMounted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(
    windowDims.width <= FOR_TABLET_LANDSCAPE_UP
  );

  const [isCollapsible, setIsCollapsible] = useState(
    windowDims.width <= FOR_TABLET_LANDSCAPE_UP
  );

  const navigate = (path: string): void => {
    history.push(path);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!windowDims.width) {
      return;
    }
    if (windowDims.width <= FOR_TABLET_LANDSCAPE_UP && !isCollapsible) {
      setIsCollapsible(true);
      return;
    }
    if (windowDims.width > FOR_TABLET_LANDSCAPE_UP && isCollapsible) {
      setIsCollapsible(false);
    }
  }, [windowDims]);

  useEffect(() => {
    setIsCollapsed(isCollapsible);
  }, [isCollapsible]);

  return (
    <motion.div
      className={`${styles.navigatorWrap}`}
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={{
        collapsed: {
          width: '100px',
          padding: '0px',
          minWidth: '0px',
        },
        expanded: {
          width: '30%',
          padding: '3rem 4%',
          minWidth: '200px',
        },
      }}
      transition={{
        duration: 1,
        type: 'spring',
      }}
      onClick={isCollapsible ? toggleCollapse : undefined}
    >
      <div className={styles.navigatorInner}>
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
            <span className={styles.linkBorder}>
              <span>M Kacy</span>
              <br />
              <span>Sommers</span>
            </span>
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

import { FC } from 'react';
import { Nav } from '../../components';
import styles from './About.module.scss';

export const About: FC = () => {
  return (
    <div className={styles.aboutIntroWrap}>
      <h3>About</h3>
      <Nav />
      <p>
        Hi, I'm Kacy I'm a Seattle based developer who loves to create full
        stack, fully responsive web applications that focus strongly on user
        experience. With a diverse background in education, leadership roles,
        creative work and customer service I have cultivated the logical and
        creative skills necessary to bring ideas to life online. Using
        technologies such as Node, React, Django, Postgres and MongoDB, I have
        written a variety of unique and helpful applications. I keep a curious
        and an open mind, and I'm learning more every day. When I'm not coding,
        I'm usually walking my dog Joni and thinking about coding.
      </p>
    </div>
  );
};

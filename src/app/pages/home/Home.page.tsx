import React from 'react';
import styles from './Home.module.scss';
import { TextComponent } from 'app/lib/components/text/text.component';
import { CtaComponent } from 'app/lib/components/cta/cta.component';
import Face from 'app/assets/images/mkacysommers_logo.png';
import LookLeft from 'app/assets/images/look_left.jpeg';
import { Colors } from 'app/core/Colors.enum';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.appHeader}>
        <div className={styles.appHeaderLogoContainer}>
          <span className={styles.logoSpan}>
            <TextComponent content={'MKS'}></TextComponent>
          </span>
        </div>
        <nav className={styles.appHeaderMenuContainer}>
          <a className={styles.menuLink} href="#"><TextComponent content={'About'}></TextComponent></a>
          <a className={styles.menuLink} href="#"><TextComponent content={'Projects'}></TextComponent></a>
          <a className={styles.menuLink} href="#"><TextComponent content={'Resume'}></TextComponent></a>
          <a className={styles.menuLink} href="#"><TextComponent content={'Contact'}></TextComponent></a>
        </nav>
      </header>

      <section className={styles.landingContainer}>
        <div className={styles.faceContainer}>
          <img src={Face} alt="M Kacy Sommers Face" />
        </div>
        <div className={styles.ctaContainer}>
          <CtaComponent title={'M Kacy Sommers'} body={'Full Stack Web Developer'} buttonText={'See Projects'}></CtaComponent>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        <div className={styles.aboutPhotoContainer}>
          <img className={styles.aboutPhoto} src={LookLeft} alt="Kacy Looking Left" />
        </div>
        <div className={styles.aboutBioContainer}>
          <TextComponent color={Colors.$background} content={'Hi, I\'m Kacy'}></TextComponent>
          <TextComponent color={Colors.$background} content={'I\'m a Seattle based developer who loves to create full stack, fully responsive web applications that focus strongly on user experience.'}></TextComponent>
          <TextComponent color={Colors.$background} content={'With a diverse background in education, leadership roles, creative work and customer service I have cultivated the logical and creative skills necessary to bring ideas to life online. Using technologies such as Node, React, Django, Postgres and MongoDB, I have written a variety of unique and helpful applications. I keep a curious and an open mind, and I\'m learning more every day.'}></TextComponent>
          <TextComponent color={Colors.$background} content={'When I\'m not coding, I\'m usually walking my dog Joni and thinking about coding.'}></TextComponent>
        </div>
      </section>

      <section className={styles.projectsContainer}></section>
    </div>
  );
}

export default Home;
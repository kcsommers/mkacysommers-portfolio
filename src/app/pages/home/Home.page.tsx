import React from 'react';
import styles from './Home.module.scss';
import { TextComponent } from 'app/lib/components/text/text.component';
import { CtaComponent } from 'app/lib/components/cta/cta.component';
import Face from 'app/assets/images/mkacysommers_logo.png';
import LookLeft from 'app/assets/images/look_left.jpg';
import { Colors } from 'app/core/Colors.enum';
import { SliderComponent } from 'app/lib/components/slider/slider.component';
import { toolIcons } from 'app/core/toolIcons';
import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { FooterComponent } from 'app/lib/components/footer/footer.component';
import { HeaderComponent } from 'app/lib/components/header/header.component';

const toolImages = toolIcons.map((tool: string) => (
  <div key={Math.floor(Math.random() * 10000)} className={styles.toolIconContainer}>
    <LazyLoadedImage
      folder={'tools'}
      imageName={tool}
    ></LazyLoadedImage>
  </div>
));

export class Home extends React.Component<{}, {}> {
  private projectsScrollMark: React.RefObject<HTMLDivElement>;
  private aboutScrollMark: React.RefObject<HTMLDivElement>;
  constructor(props: {}) {
    super(props);
    this.projectsScrollMark = React.createRef();
    this.aboutScrollMark = React.createRef();
  }
  public scrollTo(event: React.MouseEvent, section: string) {
    event.preventDefault();
    this[`${section}ScrollMark`].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  render() {
    return (
      <div className={styles.homeContainer}>
        <header className={styles.appHeader}>
          <HeaderComponent scrollTo={this.scrollTo.bind(this)}></HeaderComponent>
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
          <div ref={this.aboutScrollMark} className={styles.projectsScrollMark}></div>
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

        <section
          id="projects"
          className={styles.projectsContainer}
        >
          <div ref={this.projectsScrollMark} className={styles.projectsScrollMark}></div>
          <div className={styles.sectionHeaderContainer}>
            <TextComponent color={'$background'} content={'Projects'}></TextComponent>
          </div>
          <SliderComponent></SliderComponent>
        </section>

        <section className={styles.skillsContainer}>
          <div className={styles.sectionHeaderContainer}>
            <TextComponent color={'$primary'} content={'Skills'}></TextComponent>
          </div>
          <div className={styles.toolImagesContainer}>
            {toolImages}
          </div>
        </section>

        <section className={styles.getInTouchContainer}>
          <CtaComponent title={'Get in touch!'} body={'I am always on the lookout for new projects, fresh challenges and kind folks to collaborate with. If you have an idea, an open position or just want to talk code, please get in touch.'} buttonText={'Contact Kacy'}></CtaComponent>
        </section>

        <section className={styles.footerContainer}>
          <FooterComponent></FooterComponent>
        </section>
      </div>
    );
  }
}

export default Home;

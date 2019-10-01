import LookLeft from 'app/assets/images/look_left.jpg';
import Face from 'app/assets/images/mkacysommers_logo.png';
import { CtaComponent } from 'app/lib/components/cta/cta.component';
import { SkillLogoComponent } from 'app/lib/components/skill-logo/skill-logo.component';
import { SliderComponent } from 'app/lib/components/slider/slider.component';
import { TextComponent } from 'app/lib/components/text/text.component';
import { Colors } from 'app/lib/core/Colors.enum';
import { ScrollMark } from 'app/lib/core/ScrollMark.enum';
import { skillsLogos } from 'app/lib/core/skillsIcons';
import React from 'react';
import styles from './Home.module.scss';

const skillsIcons = skillsLogos.map(skill => <SkillLogoComponent key={skill} imageName={skill} />);

type HomeProps = {
  scrollMark: ScrollMark;
  showContact: (event: React.MouseEvent) => void;
}

export class Home extends React.Component<HomeProps, {}> {
  private projectsScrollMark: React.RefObject<HTMLDivElement>;
  private aboutScrollMark: React.RefObject<HTMLDivElement>;
  constructor(props: HomeProps) {
    super(props);
    this.projectsScrollMark = React.createRef();
    this.aboutScrollMark = React.createRef();
  }
  componentDidMount() {
    this.scrollTo(this.props.scrollMark)
  }
  componentDidUpdate(prevProps: HomeProps) {
    this.scrollTo(this.props.scrollMark);
  }

  public scrollTo(scrollMark: ScrollMark) {
    if (scrollMark && this[scrollMark]) {
      this[scrollMark].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  render() {
    return (
      <div className={styles.homeContainer}>
        <section className={styles.landingContainer}>
          <div className={styles.faceContainer}>
            <img src={Face} alt="M Kacy Sommers Face" />
          </div>
          <div className={styles.ctaContainer}>
            <CtaComponent action={this.scrollTo.bind(this, ScrollMark.PROJECTS)} color={'$offwhite'} size={'large'} title={'M Kacy Sommers'} body={'Full Stack Web Developer'} buttonText={'See Projects'}></CtaComponent>
          </div>
        </section>

        <section className={styles.aboutContainer}>
          <div ref={this.aboutScrollMark} className={styles.projectsScrollMark}></div>
          <div className={styles.aboutPhotoContainer}>
            <img className={styles.aboutPhoto} src={LookLeft} alt="Kacy Looking Left" />
          </div>
          <div className={styles.aboutBioContainer}>
            <TextComponent size={'3rem'} color={Colors.$background} content={'Hi, I\'m Kacy'}></TextComponent>
            <TextComponent size={'1.5rem'} color={Colors.$background} content={'I\'m a Seattle based developer who loves to create full stack, fully responsive web applications that focus strongly on user experience.'}></TextComponent>
            <div className={styles.bioSection}>
              <TextComponent size={'1.1rem'} color={Colors.$background} content={'With a diverse background in education, leadership roles, creative work and customer service I have cultivated the logical and creative skills necessary to bring ideas to life online. Using technologies such as Node, React, Django, Postgres and MongoDB, I have written a variety of unique and helpful applications. I keep a curious and an open mind, and I\'m learning more every day.'}></TextComponent>
            </div>
            <div className={styles.bioSection}>
              <TextComponent size={'1.1rem'} color={Colors.$background} content={'When I\'m not coding, I\'m usually walking my dog Joni and thinking about coding.'}></TextComponent>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={styles.projectsContainer}
        >
          <div ref={this.projectsScrollMark} className={styles.projectsScrollMark}></div>
          <div className={styles.sectionHeaderContainer}>
            <TextComponent size={'1.5rem'} color={'$background'} content={'Projects'}></TextComponent>
          </div>
          <SliderComponent></SliderComponent>
        </section>

        <section className={styles.skillsContainer}>
          <div className={styles.sectionHeaderContainer}>
            <TextComponent size={'1.5rem'} color={'$background'} content={'Skills'}></TextComponent>
          </div>
          <div className={styles.skillsIconsContainer}>
            {skillsIcons}
          </div>
        </section>

        <section className={styles.getInTouchContainer}>
          <div className={styles.getInTouchCtaContainer}>
            <CtaComponent action={this.props.showContact.bind(this)} color={'$offwhite'} size={'medium'} title={'Get in touch!'} body={'I am always on the lookout for new projects, fresh challenges and kind folks to collaborate with. If you have an idea, an open position or just want to talk code, please get in touch.'} buttonText={'Contact Kacy'}></CtaComponent>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

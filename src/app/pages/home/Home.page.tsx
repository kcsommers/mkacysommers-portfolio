import React from 'react';
import styles from './Home.module.scss';
import { TextComponent } from 'app/lib/components/text/text.component';
import { CtaComponent } from 'app/lib/components/cta/cta.component';
import Face from 'app/assets/images/mkacysommers_logo.png';
import LookLeft from 'app/assets/images/look_left.jpg';
import { SliderComponent } from 'app/lib/components/slider/slider.component';
import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { FooterComponent } from 'app/lib/components/footer/footer.component';
import { HeaderComponent } from 'app/lib/components/header/header.component';
import { toolIcons } from 'app/lib/core/toolIcons';
import { Colors } from 'app/lib/core/Colors.enum';
import { ContactComponent } from 'app/lib/components/contact/contact.component';

type HomeState = {
  contactVisible: boolean;
}

const toolImages = toolIcons.map((tool: string) => (
  <div key={Math.floor(Math.random() * 10000)} className={styles.toolIconContainer}>
    <div className={styles.toolImageWrapper}>
      <LazyLoadedImage
        folder={'tools'}
        imageName={tool}
      ></LazyLoadedImage>
    </div>
  </div>
));

export class Home extends React.Component<{}, HomeState> {
  private projectsScrollMark: React.RefObject<HTMLDivElement>;
  private aboutScrollMark: React.RefObject<HTMLDivElement>;
  constructor(props: {}) {
    super(props);
    this.state = { contactVisible: false };
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
  public showContact(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ contactVisible: true });
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = 'hidden';
    }
  }
  public hideContact() {
    console.log('Hiding contanct')
    this.setState({ contactVisible: false });
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = 'auto';
    }
  }
  render() {
    return (
      <div className={styles.homeContainer}>
        <header className={styles.appHeader}>
          <HeaderComponent scrollTo={this.scrollTo.bind(this)} showContact={this.showContact.bind(this)}></HeaderComponent>
        </header>

        <section className={styles.landingContainer}>
          <div className={styles.faceContainer}>
            <img src={Face} alt="M Kacy Sommers Face" />
          </div>
          <div className={styles.ctaContainer}>
            <CtaComponent color={'$offwhite'} size={'large'} title={'M Kacy Sommers'} body={'Full Stack Web Developer'} buttonText={'See Projects'}></CtaComponent>
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
          <div className={styles.toolImagesContainer}>
            {toolImages}
          </div>
        </section>

        <section className={styles.getInTouchContainer}>
          <div className={styles.getInTouchCtaContainer}>
            <CtaComponent color={'$offwhite'} size={'medium'} title={'Get in touch!'} body={'I am always on the lookout for new projects, fresh challenges and kind folks to collaborate with. If you have an idea, an open position or just want to talk code, please get in touch.'} buttonText={'Contact Kacy'}></CtaComponent>
          </div>
        </section>

        <section onClick={this.hideContact.bind(this)} className={[styles.contactToggle, this.state.contactVisible && styles.visible].join(' ')}></section>
        <ContactComponent visible={this.state.contactVisible}></ContactComponent>

        <section className={styles.footerContainer}>
          <FooterComponent></FooterComponent>
        </section>
      </div>
    );
  }
}

export default Home;

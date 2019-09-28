import { ContactComponent } from 'app/lib/components/contact/contact.component';
import { FooterComponent } from 'app/lib/components/footer/footer.component';
import { HeaderComponent } from 'app/lib/components/header/header.component';
import { Pages } from 'app/lib/core/Pages.enum';
import { Routes } from 'app/lib/core/Routes';
import { ScrollMark } from 'app/lib/core/ScrollMark.enum';
import Home from 'app/pages/home/Home.page';
import { ProjectsPage } from 'app/pages/projects/projects.page';
import { ResumePage } from 'app/pages/resume/Resume.page';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import styles from './App.module.scss';

type AppState = {
  scrollMark: ScrollMark
  contactVisible: boolean;
  currentPage: Pages;
}

export default class App extends React.Component<RouteComponentProps, AppState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      scrollMark: ScrollMark.TOP,
      contactVisible: false,
      currentPage: this.parseLocation()
    }
  }
  private parseLocation(): Pages {
    const { location } = this.props;
    if (/\/projects/.test(location.pathname)) {
      return Pages.PROJECTS;
    }
    if (/\/resume/.test(location.pathname)) {
      return Pages.RESUME;
    }
    return Pages.HOME
  }
  public showContact(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ contactVisible: true, scrollMark: ScrollMark.CONTACT });
  }
  public hideContact() {
    this.setState({ contactVisible: false });
  }
  public updateScrollMark(scrollMark: ScrollMark) {
    this.setState({ scrollMark })
  }
  public navigate(event: React.MouseEvent, scrollMark: ScrollMark) {
    event.preventDefault();
    const { history } = this.props;
    this.updateScrollMark(scrollMark);
    let currentPage = this.state.currentPage;
    if (scrollMark === ScrollMark.TOP) {
      history.push('/');
      currentPage = Pages.HOME;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (scrollMark === ScrollMark.ABOUT || scrollMark === ScrollMark.PROJECTS) {
      history.push('/');
      currentPage = Pages.HOME
    }
    if (scrollMark === ScrollMark.RESUME) {
      history.push('/resume');
      currentPage = Pages.RESUME
    }
    this.setState({ scrollMark, currentPage });
  }
  render() {
    const { scrollMark, currentPage } = this.state;
    const { location } = this.props;
    return !Routes.noHeader.includes(location.pathname) ? (
      <div className="appContainer">
        <header className={styles.appHeaderContainer}>
          <HeaderComponent currentPage={currentPage} navigate={this.navigate.bind(this)} showContact={this.showContact.bind(this)}></HeaderComponent>
        </header>

        <section onClick={this.hideContact.bind(this)} className={[styles.contactToggle, this.state.contactVisible && styles.visible].join(' ')}></section>
        <ContactComponent visible={this.state.contactVisible}></ContactComponent>

        <Route path="/" exact render={(props) => <Home {...props} scrollMark={scrollMark} showContact={this.showContact.bind(this)} />} />
        <Route path="/projects/:name" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
        <footer className={styles.appFooterContainer}>
          <FooterComponent></FooterComponent>
        </footer>
      </div>
    ) :
      (
        <div className={styles.appNoHeaderContainer}></div>
      )
  }
}


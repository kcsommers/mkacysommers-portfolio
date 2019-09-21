import { ContactComponent } from 'app/lib/components/contact/contact.component';
import { HeaderComponent } from 'app/lib/components/header/header.component';
import { ScrollMark } from 'app/lib/core/ScrollMark.enum';
import Home from 'app/pages/home/Home.page';
import { ProjectsPage } from 'app/pages/projects/projects.page';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import styles from './App.module.scss';
import { Routes } from 'app/lib/core/Routes';

type AppState = {
  scrollMark: ScrollMark
  contactVisible: boolean;
}

export default class App extends React.Component<RouteComponentProps, AppState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      scrollMark: ScrollMark.TOP,
      contactVisible: false
    }
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
    this.setState({ contactVisible: false });
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = 'auto';
    }
  }
  public updateScrollMark(event: React.MouseEvent, scrollMark: ScrollMark) {
    event.preventDefault();
    this.setState({ scrollMark })
  }
  render() {
    const { scrollMark } = this.state;
    const { location } = this.props;
    return !Routes.noHeader.includes(location.pathname) ? (
      <div className="appContainer">
        <header className={styles.appHeaderContainer}>
          <HeaderComponent scrollTo={this.updateScrollMark.bind(this)} showContact={this.showContact.bind(this)}></HeaderComponent>
        </header>

        <section onClick={this.hideContact.bind(this)} className={[styles.contactToggle, this.state.contactVisible && styles.visible].join(' ')}></section>
        <ContactComponent visible={this.state.contactVisible}></ContactComponent>

        <Route path="/" exact render={(props) => <Home {...props} scrollMark={scrollMark} />} />
        <Route path="/projects/:name" component={ProjectsPage} />
      </div>
    ) :
      (
        <div className={styles.appNoHeaderContainer}></div>
      )
  }
}


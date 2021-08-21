import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  ResumePage,
} from '@pages';
import { Navigator } from '@components';
import { Route, Switch, useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  return (
    <main
      style={{
        padding: '0.5rem',
      }}
    >
      <Router>
        <Navigator />
        <AnimatePresence>
          <Switch location={location}>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route
              exact
              path="/about"
              render={(props) => <AboutPage {...props} />}
            />
            <Route
              exact
              path="/projects"
              render={(props) => <ProjectsPage {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <ContactPage {...props} />}
            />
            <Route
              exact
              path="/resume"
              render={(props) => <ResumePage {...props} />}
            />
          </Switch>
        </AnimatePresence>
      </Router>
    </main>
  );
};

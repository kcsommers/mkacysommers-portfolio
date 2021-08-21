import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  ResumePage,
} from '@pages';
import { Navigator } from '@components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

export const AppRouter = () => {
  const location = useLocation();

  return (
    <Router>
      <Navigator />
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
    </Router>
  );
};

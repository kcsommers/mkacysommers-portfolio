import { AboutPage, HomePage } from '@pages';
import { Navigator } from '@components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/about"
          render={(props) => <AboutPage {...props} />}
        />
      </Switch>
    </Router>
  );
};

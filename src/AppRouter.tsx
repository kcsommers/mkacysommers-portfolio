import { HomePage } from '@pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
      </Switch>
    </Router>
  );
};

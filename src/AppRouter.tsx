import App from 'App';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const AppRouter: React.FC = (props) => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
}
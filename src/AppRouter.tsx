import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'app/pages/home/Home.page';
import App from 'App';

export const AppRouter: React.FC = (props) => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
}
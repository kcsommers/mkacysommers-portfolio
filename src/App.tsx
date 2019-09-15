import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'app/pages/home/Home.page';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;

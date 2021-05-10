import React from 'react';

import './App.css';
import Article from './components/Article';
import User from './components/User';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Article />
        <User />
      </div>
    </div>
  );
};

export default App;

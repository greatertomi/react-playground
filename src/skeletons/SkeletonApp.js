import React from 'react';

import './app.css';
import SkeletonArticle from './SkeletonArticle';
import SkeletonProfile from './SkeletonProfile';


const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <SkeletonArticle />
        <SkeletonProfile />
      </div>
    </div>
  );
};

export default App;

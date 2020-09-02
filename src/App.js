import React from 'react';
import './App.scss';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;

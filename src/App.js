import React from 'react';
import './App.scss';

import LanguageState from './context/LanguageState';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    // starting anew
    <LanguageState>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </div>
    </LanguageState>
  );
}

export default App;

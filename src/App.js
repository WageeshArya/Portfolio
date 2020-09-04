import React from 'react';
import './App.scss';

import LanguageState from './context/LanguageState';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageState>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageState>
  );
}

export default App;

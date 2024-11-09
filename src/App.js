import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Skills />

    </div>
  );
}

export default App;

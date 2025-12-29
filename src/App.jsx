import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;

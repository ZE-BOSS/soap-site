
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ingredients from './components/Ingredients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <About />
        <Ingredients />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}

export default App;

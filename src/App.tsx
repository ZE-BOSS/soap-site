
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Ingredients />
      <div className="grid grid-cols-2 mt-6">
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

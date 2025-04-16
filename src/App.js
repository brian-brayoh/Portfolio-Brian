import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper delay={0.1}><Skills /></SectionWrapper>
      <SectionWrapper delay={0.2}><Projects /></SectionWrapper>
      <SectionWrapper delay={0.3}><Testimonials /></SectionWrapper>
      <SectionWrapper delay={0.4}><Experience /></SectionWrapper>
      <SectionWrapper delay={0.5}><Contact /></SectionWrapper>
      <Footer />
    </div>
  );
}

export default App;

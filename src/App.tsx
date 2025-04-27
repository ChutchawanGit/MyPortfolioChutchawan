import React from 'react';
import Header from './interface/components/layout/Header';
import Footer from './interface/components/layout/Footer';
import Hero from './interface/components/sections/Hero';
import About from './interface/components/sections/About';
import Experience from './interface/components/sections/Experience';
import Projects from './interface/components/sections/Projects';
import Contact from './interface/components/sections/Contact';
import { ProjectProvider } from './interface/context/ProjectContext';

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ProjectProvider>
  );
};

export default App;
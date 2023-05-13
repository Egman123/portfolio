import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';


const App = () => {
  return (
   <>
    <Sidebar />
    <main className='main'>   
      <Home />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
    </main>
   </>
  )
}

export default App
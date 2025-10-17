import React from 'react';
import Navigation from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Footer  from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;

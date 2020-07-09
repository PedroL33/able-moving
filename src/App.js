import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar';
import About from './components/about/about';
import Contact from './components/contact';
import Services from './components/services/services';
import Footer from './components/footer';

function App() {

  const nav = useSelector(state => state.nav);

  return (
    <div className="App" style={{maxWidth: "2000px", margin: "auto"}}>
      <Navbar />
      {nav==="about" ? <About />:
      nav==="contact" ? <Contact />:
      <Services />
      }
      <Footer />
    </div>
  );
}

export default App;

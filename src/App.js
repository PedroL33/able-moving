import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <div className="App" style={{maxWidth: "2000px", margin: "auto"}}>
      <Navbar />
      <About />
    </div>
  );
}

export default App;

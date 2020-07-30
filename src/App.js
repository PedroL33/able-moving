import React, { useRef, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import Footer from './components/footer';
import { setSticky, removeSticky } from './actions';

function App() {

  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav);
  const appRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return function() {
      window.removeEventListener('resize', handleResize())
    }
  })

  function handleResize() {
    if(appRef.current.offsetTop > 0) {
      dispatch(removeSticky())
    }else {
      dispatch(setSticky())
    }
  }

  return (
    <div ref={appRef} className="App" style={{maxWidth: "2000px", width: "100%"}}>
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

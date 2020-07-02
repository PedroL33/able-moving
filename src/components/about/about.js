import React from 'react';
import Fade from 'react-reveal/Fade';
import AboutHeader from './aboutHeader';
import AboutIntro from './aboutIntro';
import AboutFamily from './aboutFamily';

function About() {
  return (
    <div>
      <AboutHeader />
      <AboutIntro />
      <AboutFamily />
    </div>
  )
}

export default About;
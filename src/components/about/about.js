import React from 'react';
import AboutHeader from './aboutHeader';
import AboutIntro from './aboutIntro';
import AboutFamily from './aboutFamily';
import AboutServices from './aboutServices';

function About() {
  return (
    <div>
      <AboutHeader />
      <AboutIntro />
      <AboutServices />
      <AboutFamily />
    </div>
  )
}

export default About;
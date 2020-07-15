import React from 'react';
import AboutHeader from './serviceHeader';
import ServicesIntro from './serviceIntro';
import MovingRates from './movingRates';
import StorageRates from './storageRates';
import ServiceStatement from './serviceStatement';

function Services() {
  return (
    <div>
      <AboutHeader />
      <ServicesIntro />
      <MovingRates />
      <StorageRates />
      <ServiceStatement />
    </div>
  )
}

export default Services;
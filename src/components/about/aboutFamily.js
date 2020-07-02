import React from 'react';
import Fade from 'react-reveal/Fade';
import headerStyle from '../../styles/aboutHeader.module.css';
import familyStyle from '../../styles/aboutFamily.module.css';


function AboutFamily() {
  return (
    <Fade>
      <div className={familyStyle.container} style={{backgroundImage: `url(${window.location.origin}/images/aboutOwners.JPG)`}}>
        <div className={headerStyle.overlay}>
          <div className={familyStyle.title}>MORE LIKE FAMILY</div>
          <div className={familyStyle.text}>We are a small company with two moving trucks. Our crew is made up of hand-picked, professionals that are trained by 
            us to value teamwork and customer satisfaction. Our goal is to give you a pleasant experience with your move, you'll notice it the minute
              you meet our team, we promise.
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default AboutFamily;
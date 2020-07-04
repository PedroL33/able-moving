import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/aboutClients.module.css';

function AboutClients() {
  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          Check out what our clients think about about us.
        </div>
      </div>
      <div className={styles.right}>
        <Carousel 
          indicators={false} 
          prevIcon={<i className="fas fa-arrow-left"></i>	}
          nextIcon={<i className="fas fa-arrow-right"></i>}>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>REGINA</div>
              <div className={styles.location}>from Olympia, WA</div>
              <div className={styles.text}>
                "Brandon and Crew:  I wanted to let you all know how thankful I am for all that you did to get us moved.  
                You definitely went above and beyond and if it were up to me, I would have paid you more.  
                You certainly deserve it!"
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>BETTY H. </div>
              <div className={styles.location}>from Federal Way, WA</div>
              <div className={styles.text}>
                "Angela, Thank you so much for all of your help with our move on Saturday.  We got everything removed from
                 the house before the deadline and that was a huge accomplishment.  We will certainly call you again when 
                 we need moving services. Thanks"
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>NORINE M. </div>
              <div className={styles.location}>from Tumwater, WA</div>
              <div className={styles.text}>
                "This is way overdue since my move was on 12/5 - but your guys did a fantastic job - swift, considerate, 
                careful.  I greatly appreciate their help."
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>GAIL N. </div>
              <div className={styles.location}>from Lacey, WA</div>
              <div className={styles.text}>
                "The guys were great.  They were professional yet friendly, had a great sense of humor, and did not stop 
                working until the job was done - quite impressive nowadays, for sure."
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>HAL S. </div>
              <div className={styles.location}>from Shelton, WA</div>
              <div className={styles.text}>
                "Curtis and Ryan did a great job.  Very professional and skilled, plus they have a sense of humor.  I'll 
                always recommend Able.  Thank you!"
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.comment}>
              <div className={styles.name}>LAURA L. </div>
              <div className={styles.location}>from Seattle, WA</div>
              <div className={styles.text}>
                "Thank you for making our move as painless as possible.  The team was awesome."
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default AboutClients;
import React from 'react';
import styles from '../../styles/serviceStatement.module.css';

function ServiceStatement() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={`${window.location.origin}/images/services/help.png`} className={styles.image} />
      </div>
      <div className={styles.right}>
      "Seeing as we help people and families every day, it is only natural that our family owned company 
      operate more like a big family than just a group of employees. Our crew is made up of hand-picked, 
      professionals that are trained by us to value teamwork and customer satisfaction.  We just want you
      to be happy!"
      </div>
    </div>
  )
}

export default ServiceStatement;
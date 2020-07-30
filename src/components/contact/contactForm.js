import React, { useState } from 'react';
import styles from '../../styles/contactForm.module.css';

function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Questions? Concerns? Compliments? We want to hear from you.
      </div>
      <div className={styles.formContainer}>
        <div className={styles.left}>
          <div className={styles.text}>
            Email us at ablemovinginc@yahoo.com or call us at 360-455-9557 with any questions.  
            We also offer packing services and estimates are free.
          </div>
        </div>
        <div className={styles.right}>
          <div className="shadow bg-white m-auto text-center" style={{padding: "7%", width: "90%", borderRadius: "30px"}}>
            <div className={styles.formTitle}>CONTACT US</div>
            <input className={styles.name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <input className={styles.email} type="text" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
            <textarea className={styles.message} placeholder="Whats on your mind..." onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button disabled={name && email && message ? false : true} className={styles.submitButton}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
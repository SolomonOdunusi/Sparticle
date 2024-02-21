import React from 'react'
import styles from './contact.module.css'

export default function page() {
  return (
    // Assuming you're using JSX syntax
<div className={styles.container}>
  <section className={`${styles.contact} ${styles.contact__section}`} id="contact">
    <div className={`${styles.section__container} ${styles.contact__container}`}>
      <h2 className={styles.section__header}>Contact Us</h2>
      <form className={styles.contact__form}>
        <label htmlFor="name" className={styles.form__label}>Your Name:</label>
        <input type="text" id="name" name="name" placeholder="John Doe" className={styles.form__input} required />

        <label htmlFor="email" className={styles.form__label}>Your Email:</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" className={styles.form__input} required />

        <label htmlFor="message" className={styles.form__label}>Your Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here..." className={styles.form__textarea} required></textarea>

        <button type="submit" className={styles.form__button}>Send Message</button>
      </form>
    </div>
  </section>
</div>

  )
}

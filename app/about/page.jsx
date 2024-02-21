import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={styles.container}>
      <section className={styles.about} id="about">
      <div className={`${styles.section__container} ${styles.about__container}`}>
        <div className={styles.about__content}>
          <h2 className={styles.section__header}>About us</h2>
          <p className={styles.section__subheader}>
            Welcome to Sparticle, where education transcends boundaries, and knowledge becomes an exhilarating journey. Sparticle is not just an app; it's a universe of learning waiting to be explored. Our mission is to empower learners of all ages, providing a dynamic platform that sparks curiosity, fosters growth, and transforms information into inspiration.
            At Sparticle, we believe that education is the catalyst for personal and societal progress. In a world where information is abundant, Sparticle stands out as the guiding star, helping you navigate the vast cosmos of knowledge with ease. Whether you're a student, a professional, or an eager mind, Sparticle offers a diverse range of educational content curated to inspire, inform, and captivate.
          </p>

        </div>
        <div className={styles.about__image}>
          <Image src="/book-2.jpg" alt="about" height={250} width={150} />
        </div>
      </div>
    </section>
    </div>
  )
}

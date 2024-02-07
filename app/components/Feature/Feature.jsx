import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image'

function Feature() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome, scholars of Sparticle!</b> - the place where curiosity meets wisdom.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/Children_tech.jpeg" alt='Children holding tablets' className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>IOT for children: How technology impacts children</h1>
          <p className={styles.postDesc}>In an era dominated by digital innovation, it's crucial to understand the profound influence of technology on our youngest generation. The Internet of Things (IoT) has emerged not just as a technological marvel but as a transformative force shaping the way children grow, learn, and interact with the world.</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Feature
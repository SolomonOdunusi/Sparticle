import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src='/drug.jpg' fill className={styles.image} alt='Cure research by students'/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>2/5/2024 | </span>
                <span className={styles.category}>Medicine</span>
            </div>
            <Link href="/">
                <h1>The Medical Students of University of Lagos research on Cancer</h1>
            </Link>
            <p className={styles.body}>The students of the university of lagos have come up with a viable possibilty of solving the issue of cancer that has ravaged the health of many. They are many research cases done to try to solve it.</p>
            <Link className={styles.button} href="/">Read more...</Link>
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import styles from './menupost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link className={styles.item} href="/">
      {withImage && <div className={styles.imgContainer}>
        <Image src="/break 1.png" fill alt='img' sizes="(max-width: 768px) 100vw, 50vw" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.education}`}>Education</span>
        <h3 className={styles.postTitle}>Pedagogical Innovations: Adapting Teaching Methods to 21st Century Learning</h3>
        <div className={styles.details}>
          <span className={styles.name}>Solomon Odunusi</span>
          <span className={styles.date}> | 1/12/24</span>
        </div>
      </div>
    </Link>

    <Link className={styles.item} href="/">
    {withImage && <div className={styles.imgContainer}>
        <Image src="/break 1.png" fill alt='img' sizes="(max-width: 768px) 100vw, 50vw" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.science}`}>Science</span>
        <h3 className={styles.postTitle}>Bioluminescence Studies and Their Contributions to Scientific Understanding</h3>
        <div className={styles.details}>
          <span className={styles.name}>Mary Oladunjoye</span>
          <span className={styles.date}> | 12/23/23</span>
        </div>
      </div>
    </Link>
    <Link className={styles.item} href="/">
    {withImage && <div className={styles.imgContainer}>
        <Image src="/break 1.png" fill alt='img' sizes="(max-width: 768px) 100vw, 50vw" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.engineering}`}>Engineering</span>
        <h3 className={styles.postTitle}>Sustainable Engineering Initiatives on Campus: Student-Led Projects for a Greener University Environment</h3>
        <div className={styles.details}>
          <span className={styles.name}>Colin Goodman</span>
          <span className={styles.date}> | 1/20/24</span>
        </div>
      </div>
    </Link>
    <Link className={styles.item} href="/">
    {withImage && <div className={styles.imgContainer}>
        <Image src="/break 1.png" fill alt='img' sizes="(max-width: 768px) 100vw, 50vw" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.medicine}`}>Medicine</span>
        <h3 className={styles.postTitle}>The Impact of Telemedicine on Healthcare Accessibility</h3>
        <div className={styles.details}>
          <span className={styles.name}>Virginia Augustus</span>
          <span className={styles.date}> | 1/2/24</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuPost
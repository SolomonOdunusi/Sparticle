import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../MenuPost/MenuPost'
import MenuCategory from '../MenuCat/MenuCategory'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Popular Posts</h1>
      <MenuPost withImage={true}/>

      {/* Categories */}
      <h2 className={styles.subtitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategory />
    {/* End */}

      {/* Editor's Pick */}
      <h2 className={styles.subtitle}>Editor-Approved Must-Reads</h2>
      <h1 className={styles.title}>Editors's Pick</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/">
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.philosophy}`}>Philosophy</span>
            <h3 className={styles.postTitle}>Conceptualization on reality</h3>
            <div className={styles.details}>
              <span className={styles.name}>Keshinro Ayodeji</span>
              <span className={styles.date}> | 1/12/24</span>
            </div>
          </div>
        </Link>

        <Link className={styles.item} href="/">
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
    </div>
  )
}

export default Menu
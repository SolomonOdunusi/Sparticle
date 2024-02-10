import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'

function CategoryList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top Categories</h2>
      <div className={styles.categories}>
          <Link href={`/blog`} className={`${styles.category} ${styles.education}`}>
            <Image src="/children-tag.svg" className={styles.icon} height={32} width={32}/>
            Education
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.tech}`}>
            <Image src="/tech-tag.svg" alt='img' className={styles.icon} height={32} width={32}/>
            Tech
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.medicine}`}>
            <Image src="/hospital-solid.svg" alt='img' className={styles.icon} height={32} width={32}/>
            Medicine
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.engineering}`}>
            <Image src="/engineer-tag.svg" alt='img' className={styles.icon} height={32} width={32}/>
            Engineering
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.Literature}`}>
            <Image src="/literature-tag.svg" alt='img' className={styles.icon} height={32} width={32}/>
            Literature
          </Link>
          <Link href={`/blog`} className={`${styles.category} ${styles.Literature}`}>
            <Image src="/science-tag.svg" alt='img' className={styles.icon} height={32} width={32}/>
            Science
          </Link>
      </div>
    </div>
  )
}

export default CategoryList
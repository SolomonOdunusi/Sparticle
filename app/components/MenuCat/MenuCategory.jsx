import Link from 'next/link'
import React from 'react'
import styles from './menucategory.module.css'

function MenuCategory() {
  return (
    <div className={styles.categoryList}>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.education}`}>
      Education
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.tech}`}>
      Tech
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.medicine}`}>
      Medicine
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.philosophy}`}>
      Philosophy
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.literature}`}>
      Literature
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.engineering}`}>
      Engineering
    </Link>
    <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.science}`}>
      Science
    </Link>
  </div>
  )
}

export default MenuCategory
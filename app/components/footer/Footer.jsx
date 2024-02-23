import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/favicon.ico"  alt='logo' className={styles.image} width={50} height={50} />
          <h1 className={styles.logoText}>Sparticle</h1>
        </div>
        <p className={styles.logoDesc}>Sparticle is a blog app that focuses primarily on educational content, article and the likes. It has been created by Solomon Odunusi and Paulina Udeh. Scholars get to gain more knowledge and pass some of theirs to others. Thank you!

        </p>
        <div className={styles.icons}>
          <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
          <Image src="/square-x-twitter.svg" alt="Twitter" width={20} height={20} />
          <Image src="/linkedin.svg" alt="Twitter" width={20} height={20} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listLinks}>Links</span>
          <Link href='/' >Home</Link>
          <Link href='/blog' >Blog</Link>
          <Link href='/' >Contact</Link>
          <Link href='/' >About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listLinks}>Main Tags</span>
          <Link href="/blog?cat=education" >Education</Link>
          <Link href="/blog?cat=literature" >Literature</Link>
          <Link href="/blog?cat=science" >Science</Link>
          <Link href="/blog?cat=medicine" >Medicine</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listLinks}>Media</span>
          <Link href='/' >Solomon&apos;s Github</Link>
          <Link href='/' >Paulina&apos;s Github</Link>
          <Link href='/' >Solomon&apos;s LinkedIn</Link>
          <Link href='/' >Paulina&apos;s LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
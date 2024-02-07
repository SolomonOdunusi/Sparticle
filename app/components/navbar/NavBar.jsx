import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Theme from '../Theme/Theme'
import Auth from '../Auth/Auth'


function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sparticle</div>
      <div className={styles.links}>
        <Theme />
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
        <Auth />
      </div>
      <div className={styles.media}>
        <Image src="/instagram.svg" alt="Instagram" width={20} height={20} className={styles.insta}/>
        <Image src="/square-x-twitter.svg" alt="Twitter" width={20} height={20} />
        <Image src="/linkedin.svg" alt="Twitter" width={20} height={20} />
      </div>
    </div>
  )
}

export default NavBar

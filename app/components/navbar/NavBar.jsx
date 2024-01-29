import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Theme from '../Theme/Theme'
import Auth from '../Auth/Auth'


function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
        <Image src="/square-x-twitter.svg" alt="Twitter" width={30} height={30} />
        <Image src="/linkedin.svg" alt="Twitter" width={30} height={30} />
      </div>
      <div className={styles.Logo}>Sparticle</div>
      <div className={styles.links}>
        <Theme />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Auth />
      </div>
    </div>
  )
}

export default NavBar

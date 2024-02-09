"use client"

import React, { useState } from 'react'
import styles from './auth.module.css'
import Link from 'next/link'

const Auth = () => {

  const [open, setOpen] = useState(false)
  const status = "authenticated"
  return (
    <>
    {status === 'notauthenticated' ? (
      <>
      <Link className={styles.link} href="/login">Login</Link>
      </>
    ) : (
      <>
      <Link className={styles.link} href="/write">Write</Link>
      <span className={styles.link}>Log out</span>
      </>
    )}
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.respmenu}>
        <Link className={styles.rlink} href="/">Home</Link>
        <Link className={styles.rlink} href="/about">About</Link>
        <Link className={styles.rlink} href="/contact">Contact</Link>
        {status === 'notauthenticated' ? (
      <>
      <Link className={styles.rlink} href="/login">Login</Link>
      </>
    ) : (
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>Log out</span>
      </>
    )}
      </div>
    )}
    </>
  )
}

export default Auth
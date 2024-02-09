"use client"

import React from 'react'
import styles from './loginpg.module.css'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

const LoginPage = () => {

    const {data, status} = useSession()
    console.log(data, status)
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.signbtn} onClick={()=> signIn("google")} >
                <div className={styles.icon}>
                    <Image className={styles.img} src="/google.svg" width={25} height={25} />
                </div>
                <p>Sign in with Google</p>
            </div>
            <div className={styles.signbtn}>
                <div className={styles.icon}>
                    <Image className={styles.img} src="/facebook-f.svg" width={25} height={25} />
                </div>
                <p>Sign in with Facebook</p>
            </div>
            <div className={styles.signbtn}>
                <div className={styles.icon}>
                    <Image className={styles.img} src="/github.svg" width={25} height={25} />
                </div>
                <p>Sign in with Github</p>
            </div>
        </div>

    </div>
  )
}

export default LoginPage
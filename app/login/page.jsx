"use client"

import React from 'react'
import styles from './loginpg.module.css'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

    const {data, status} = useSession()
    console.log(data, status)
    const router = useRouter();


    if (status === 'loading') {
        return <div className={styles.loader}>
            <div className={styles.loading}>
                <div className={`${styles.inner} ${styles.innerone}`}></div>
                <div className={`${styles.inner} ${styles.innertwo}`}></div>
                <div className={`${styles.inner} ${styles.innerthree}`}></div>
            </div>
        </div>
    }
    if (status === 'authenticated') {
        router.push("/")
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.signbtn} onClick={()=> signIn("google")} >
                <div className={styles.icon}>
                    <Image className={styles.img} alt='img' src="/google.svg" width={25} height={25} />
                </div>
                <p>Sign in with Google</p>
            </div>
            <div className={styles.signbtn}>
                <div className={styles.icon}>
                    <Image className={styles.img} alt='img' src="/facebook-f.svg" width={25} height={25} />
                </div>
                <p>Sign in with Facebook</p>
            </div>
            <div className={styles.signbtn}>
                <div className={styles.icon}>
                    <Image className={styles.img} alt='img' src="/github.svg" width={25} height={25} />
                </div>
                <p>Sign in with Github</p>
            </div>
        </div>

    </div>
  )
}

export default LoginPage
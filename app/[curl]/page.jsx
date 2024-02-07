import React from 'react'
import styles from './singlepg.module.css'
import Image from 'next/image'
import Menu from '../components/Menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1></h1>
                <div className={styles.user}>
                    <div className={styles.userImg}>
                        <Image src="/model1.jpg" fill alt="" />
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.user}>Victoria Odunusi</span>
                        <span className={styles.date}> | 2/7/2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/model1.jpg" fill alt="" />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}></div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage
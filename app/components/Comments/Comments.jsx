import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

    const comments = "authenticated"
  return (
    <div className={styles.conatainer}>
        <h1 className={styles.title}>Comments</h1>
        {comments === "authenticated" ? (
            <div className={styles.formContainer}>
                    <textarea className={styles.input} placeholder="Write your comment here..."></textarea>
                    <button className={styles.btn} type="submit">Post Comment</button>
            </div>
        ) : ( 
            <Link className={styles.text}>Please log in to leave a comment.</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/profile-pic.jpg" height={50} width={50} alt="" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Solomon Odunusi</span>
                        <span className={styles.date}>2/4/2024</span>
                    </div>
                </div>
                <p className={styles.body}>Great tips! Mastering composition and experimenting with lighting have made a huge difference in my photography. Thanks for sharing these valuable insights!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/avatar-pic.jpg" height={50} width={50} alt="" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Cassius Bellona</span>
                        <span className={styles.date}>2/4/2024</span>
                    </div>
                </div>
                <p className={styles.body}>Great tips! Mastering composition and experimenting with lighting have made a huge difference in my photography. Thanks for sharing these valuable insights!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/profile-pic.jpg" height={50} width={50} alt="" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Darrow Rising</span>
                        <span className={styles.date}>2/4/2024</span>
                    </div>
                </div>
                <p className={styles.body}>Great tips! Mastering composition and experimenting with lighting have made a huge difference in my photography. Thanks for sharing these valuable insights!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/avatar-pic.jpg" height={50} width={50} alt="" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Victra Julli</span>
                        <span className={styles.date}>2/4/2024</span>
                    </div>
                </div>
                <p className={styles.body}>Great tips! Mastering composition and experimenting with lighting have made a huge difference in my photography. Thanks for sharing these valuable insights!</p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/profile-pic.jpg" height={50} width={50} alt="" className={styles.avatar} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Captain Jack</span>
                        <span className={styles.date}>2/4/2024</span>
                    </div>
                </div>
                <p className={styles.body}>Great tips! Mastering composition and experimenting with lighting have made a huge difference in my photography. Thanks for sharing these valuable insights!</p>
            </div>
        </div>
    </div>
  )
}

export default Comments
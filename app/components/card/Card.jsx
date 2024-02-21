import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key,item}) => {
  return (
    <div className={styles.container} key={key}>
        {item.img && <div className={styles.imgContainer}>
            <Image src={item.img} fill className={styles.image} alt='Cure research by students'/>
        </div>}
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.toISOString().substring(0, 10)} | </span>
                <span className={styles.category}>{item.catCurl}</span>
            </div>
            <Link href={`/posts/${item.curl}`}>
                <h1>{item.title}</h1>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 50) }} className={styles.body}></p>
            <Link className={styles.button} href={`/posts/${item.curl}`}>Read more...</Link>
        </div>
    </div>
  )
}

export default Card
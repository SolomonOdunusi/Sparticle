import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/utils/connect';

async function Feature() {
  // Fetch the most viewed post
  const mostViewedPost = await prisma.post.findFirst({
    orderBy: {
      views: 'desc',
    },
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome, scholars of Sparticle!</b> - the place where curiosity meets wisdom.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={mostViewedPost.img} alt='img' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{mostViewedPost.title}</h1>
          <p
            className={styles.postDesc}
            dangerouslySetInnerHTML={{
              __html: `${mostViewedPost.desc.substring(0, 300)}${
                mostViewedPost.desc.length > 50 ? '...' : ''
              }`,
            }}
          />

          <Link href={`/posts/${mostViewedPost.curl}`} ><button className={styles.button}>Read more</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Feature
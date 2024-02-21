import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache',
  })
  if(!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

const CategoryList = async ({searchParams}) => {

  const data = await getData()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top Categories</h2>
      <div className={styles.categories}>
          {data?.map((item) =>(
            <Link href={`/blog?cat=${item.curl}`} className={`${styles.category} ${styles.education}`} key={item._id}>
            { item.img && (<Image src={item.img} className={styles.icon} height={32} width={32}/>)}
            {item.title}
          </Link>))}
      </div>
    </div>
  )
}

export default CategoryList
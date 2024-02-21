import Link from 'next/link'
import React from 'react'
import styles from './menucategory.module.css'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache',
  })
  if(!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

async function MenuCategory() {

  const data = await getData()
  return (
    <div className={styles.categoryList}>
    {data?.map((item) =>(
    <Link href={`/blog?cat=${item.curl}`} className={`${styles.categoryItem} 
    ${styles[item.curl]}`}>
      {item.title}
    </Link>))}
  </div>
  )
}

export default MenuCategory
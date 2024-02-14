import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: 'no-cache',
  })
  if(!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

async function CardList({ page, cat }) {
  const {posts, count} = await getData(page, cat)
// LEARN MORE ON THESE FOR PAGINATION
  const POST_PER_PAGE = 2
  const prev = POST_PER_PAGE * (page - 1) > 0;
  const next = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Latest Posts</h1></div>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}

      </div>
      <Pagination page={page} prev={prev} next={next} />
    </div>
  )
}

export default CardList
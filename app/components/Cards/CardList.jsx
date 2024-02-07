import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

function CardList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Latest Posts</h1></div>
        <div className={styles.posts}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      <Pagination />
      </div>
  )
}

export default CardList
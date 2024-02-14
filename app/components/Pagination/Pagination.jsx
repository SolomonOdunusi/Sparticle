"use client"

import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation'


function Pagination({page, prev, next}) {

  const router = useRouter()
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!prev} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
      <button className={styles.button} disabled={!next} onClick={() => router.push(`?page=${page + 1}`)} >Next</button>
    </div>
  )
}

export default Pagination
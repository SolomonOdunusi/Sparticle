import React from 'react'
import styles from './blogpg.module.css'
import CardList from '../components/Cards/CardList'
import Menu from '../components/Menu/Menu'

const page = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Education</h1>
        <div className={styles.content}>
            <Menu />
            <CardList />
        </div>
    </div>
  )
}

export default page
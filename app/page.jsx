import React from 'react'
import Link from 'next/link'
import Feature from './components/Feature/Feature'
import CategoryList from './components/Category/CategoryList'
import CardList from './components/Cards/CardList'
import Menu from './components/Menu/Menu'
import styles from './page.module.css'

export default function page({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Feature />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}

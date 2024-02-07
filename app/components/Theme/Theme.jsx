"use client"

import React, { useContext } from 'react'
import styles from './theme.module.css'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'

function Theme() {

  const {toggle, theme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {backgroundColor: "white"} : {backgroundColor: "black"}}>
      <Image src="/moon-solid.svg" width={14} height={14} />
      <div className={styles.mode} style={theme === "dark" ? {right: 1, backgroundColor: "black"} : {left: 1, backgroundColor: "white"}}></div>
      <Image src="/sun-solid.svg" width={14} height={14} />
    </div>
  )
}

export default Theme


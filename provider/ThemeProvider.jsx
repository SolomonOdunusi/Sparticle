"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

export const ThemeProvider = ({ children }) => {

    const {theme} = useContext(ThemeContext)
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])
    if(mount){
        return (
          <div className={theme}>{children}</div>
        )

    }
}

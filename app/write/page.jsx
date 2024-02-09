"use client"

import React, { useState } from 'react'
import styles from './writepg.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Title'/>
        <div className={styles.editor}>
            <button className={styles.btn}>
                <Image className={styles.img} src='/plus.svg' height={16} width={16} />
            </button>
            {open && (
                <div>
                    <button className={styles.btn}>
                        <Image src='/image.svg' height={16} width={16} />
                    </button>
                    <button className={styles.btn}>
                        <Image src='/video.svg' height={16} width={16} />
                    </button>
                    <button className={styles.btn}>
                        <Image src='/upload.svg' height={16} width={16} />
                    </button>
                </div>
            )}
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Start writing Scholar' />
        </div>
    </div>
  )
}

export default WritePage
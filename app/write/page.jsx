"use client"

import React, { useState } from 'react'
import styles from './writepg.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const WritePage = () => {

    const { status } = useSession()

    const router = useRouter();
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    if (status === 'loading') {
        return <div className={styles.loader}>
            <div className={styles.loading}>
                <div className={`${styles.inner} ${styles.innerone}`}></div>
                <div className={`${styles.inner} ${styles.innertwo}`}></div>
                <div className={`${styles.inner} ${styles.innerthree}`}></div>
            </div>
        </div>
    }
    if (status === 'authenticated') {
        router.push("/write")
    }

  return (
    <div className={styles.container}>
        <input className={styles.title} type="text" placeholder='Title'/>
        <div className={styles.editor}>
            <button className={styles.btn} onClick={() => setOpen(!open)}>
                <Image className={styles.img} src='/plus.svg' height={16} width={16} />
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addbtn}>
                        <Image src='/image.svg' height={16} width={16} />
                    </button>
                    <button className={styles.addbtn}>
                        <Image src='/video.svg' height={16} width={16} />
                    </button>
                    <button className={styles.addbtn}>
                        <Image src='/upload.svg' height={16} width={16} />
                    </button>
                </div>
            )}
            <ReactQuill className={styles.input} theme='bubble' value={value} onChange={setValue} placeholder='Unleash your knowledge...' />
        </div>
        <button className={styles.post}>Post</button>
    </div>
  )
}

export default WritePage
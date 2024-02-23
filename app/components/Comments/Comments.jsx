"use client"

import React, { useState } from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '../Menu/Menu'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'



const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok){
        const error = new Error(data.message)
        throw error
    }
    return data
}

const Comments = ({postCurl}) => {
    const {status} = useSession()

    const {data, mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postCurl=${postCurl}`, fetcher)

    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        console.log("Button clicked!");
        console.log("Description:", desc);
        console.log("Post Curl:", postCurl);

        await fetch("/api/comments", {
                method: "POST",
                body: JSON.stringify({ desc, postCurl }),
        });
        mutate();
        console.log("Mutated", mutate());
    };
    
    

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.formContainer}>
                    <textarea className={styles.input}
                    placeholder="Write your comment here..." 
                    onChange={(e) => setDesc(e.target.value)} />
                    <button className={styles.btn} onClick={handleSubmit} >Post Comment</button>
            </div>
        ) : ( 
            <Link href="/login" className={styles.text}>Please log in to leave a comment.</Link>
        )}
        <div className={styles.comm}>
        <div className={styles.comments}>
            {isLoading ? "Loading..." : data?.map((item) => (
                <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                    {item?.user?.image && <Image src={item.user.image} height={50} width={50} alt="" className={styles.avatar} />}
                    <div className={styles.userInfo}>
                        <span className={styles.username}>{item.user.name}</span>
                        <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
                <p className={styles.body}>{item.desc}</p>
            </div>
                ))}
        </div>
        <Menu className={styles.menu} />
        </div>
    </div>
  )
}

export default Comments
"use client"

import React, { useEffect, useState } from 'react'
import styles from './writepg.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase'

const storage = getStorage(app);

const WritePage = () => {

    const { status } = useSession()

    const router = useRouter();
    
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catCurl, setCatCurl] = useState("education");

    useEffect(() => {
        const uploadFile = async () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setMedia(downloadURL);
    });
  }
);

        }
        file && uploadFile()
    }, [file])

    if (status === 'loading') {
        return <div className={styles.loader}>
            <div className={styles.loading}>
                <div className={`${styles.inner} ${styles.innerone}`}></div>
                <div className={`${styles.inner} ${styles.innertwo}`}></div>
                <div className={`${styles.inner} ${styles.innerthree}`}></div>
            </div>
        </div>
    }
    if (status === 'unauthenticated') {
        router.push("/")
    }

    const curler = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title,
                desc: value,
                img: media,
                curl: curler(title),
                catCurl: curler(catCurl),

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.ok) {
            router.push('/')
        }
    }

  return (
    <div className={styles.container}>
        <input className={styles.title} type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        <select className={styles.select} onChange={(e) => setCatCurl(e.target.value)}>
        <option value="education">education</option>
        <option value="tech">tech</option>
        <option value="medicine">medicine</option>
        <option value="engineering">engineering</option>
        <option value="philosophy">philosophy</option>
        <option value="literature">literature</option>
        <option value="science">science</option>
      </select>
        <div className={styles.editor}>
            <button className={styles.btn} onClick={() => setOpen(!open)}>
                <Image className={styles.img} alt='' src='/plus.svg' height={16} width={16} />
            </button>
            {open && (
                <div className={styles.add}>
                    <input type="file" id='image' onChange={e=> setFile(e.target.files[0])} style={{display: 'none'}} />
                    <button className={styles.addbtn}>
                        <label htmlFor="image">
                            <Image src='/image.svg' alt='' height={16} width={16} />
                        </label>
                    </button>
                    <button className={styles.addbtn}>
                        <Image src='/video.svg' alt='' height={16} width={16} />
                    </button>
                    <button className={styles.addbtn}>
                        <Image src='/upload.svg' alt='' height={16} width={16} />
                    </button>
                </div>
            )}
            <ReactQuill className={styles.input} theme='bubble' value={value} onChange={setValue} placeholder='Unleash your knowledge...' />
        </div>
        <button className={styles.post} onClick={handleSubmit} >Post</button>
    </div>
  )
}

export default WritePage
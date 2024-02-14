'use client'

import React, { useEffect, useState } from 'react'
import styles from './singlepg.module.css'
import Image from 'next/image'
import Menu from '../../components/Menu/Menu'
import Comments from '../../components/Comments/Comments'

const getData = async (curl) => {
  const res = await fetch(`http://localhost:3000/api/posts/${curl}`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const SinglePage = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { curl } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData(curl);
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [curl]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any loading indicator.
  }

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{data?.title}</h1>
                <div className={styles.user}>
                    {data?.user?.image && <div className={styles.userImg}>
                        <Image src={data.user.image} fill alt="" className={styles.avatar} />
                    </div>}
                    {data?.user && <div className={styles.userInfo}>
                        <span className={styles.username}>{data.user.name}</span>
                        <span className={styles.date}>{data.createdAt.substring(0, 10)}</span>
                    </div>}
                </div>
            </div>
            {data?.img && <div className={styles.imgContainer}>
                <Image src={data.img} fill alt="" className={styles.image} />
            </div>}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.body} dangerouslySetInnerHTML={{__html: data?.desc}} />
                    <Comments className={styles.comments} postCurl={curl}/>
            </div>
            
        </div>
    </div>
  )
}

export default SinglePage
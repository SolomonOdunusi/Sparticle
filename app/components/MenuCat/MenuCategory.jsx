"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './menucategory.module.css';

const MenuCategory = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/categories', {
          cache: 'no-cache',
        });

        if (!res.ok) {
          throw new Error('Something went wrong');
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          key={item.curl}  // Add a unique key for each Link
          href={`/blog?cat=${item.curl}`}
          className={`${styles.categoryItem} ${styles[item.curl]}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategory;

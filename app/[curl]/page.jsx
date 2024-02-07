import React from 'react'
import styles from './singlepg.module.css'
import Image from 'next/image'
import Menu from '../components/Menu/Menu'
import Comments from '../components/Comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Tips to advance in the world of photography</h1>
                <div className={styles.user}>
                    <div className={styles.userImg}>
                        <Image src="/profile-pic.jpg" fill alt="" className={styles.avatar} />
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Pirlo Araujo</span>
                        <span className={styles.date}>2/7/2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/model1.jpg" fill alt="" className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.body}>
                    <p>Photography is not just a hobby; it's an art form that allows individuals to capture moments, tell stories, and express their creativity. Whether you're a beginner or an enthusiast looking to enhance your skills, here are some valuable tips to help you advance in the fascinating world of photography.</p>
                    <h3>1. Master Your Camera: Know Your Gear Inside Out</h3>
                    <p>Understanding your camera is fundamental to capturing stunning images. Take the time to read the manual, experiment with different settings, and learn how to control aperture, shutter speed, and ISO. Knowing your gear inside out empowers you to capture the perfect shot in any situation.</p>
                    <h3>2. Learn the Basics of Composition</h3>
                    <p>Composition is the arrangement of elements within a photograph. Learning the basics of composition, such as the rule of thirds, leading lines, and framing, will help you create visually appealing images that draw the viewer's attention to the subject.</p>
                    <h3>3. Experiment with Different Lighting</h3>
                    <p>Lighting is a crucial element in photography. Experiment with natural light, artificial light, and different lighting conditions to understand how light affects your images. Learning to work with light will help you create captivating photographs that stand out.</p>
                    <h3>4. Practice Regularly and Experiment with Different Subjects</h3>
                    <p>Practice makes perfect. Take your camera everywhere you go and practice capturing different subjects, from landscapes and portraits to street photography and still life. Experimenting with different subjects will help you develop your unique style and expand your creative horizons.</p>
                    <h3>5. Study the Work of Other Photographers</h3>
                    <p>Studying the work of other photographers can provide valuable insights and inspiration. Explore the work of renowned photographers, attend exhibitions, and engage with the photography community to learn from others and broaden your perspective.</p>
                    <h3>6. Edit Your Photos Carefully</h3>
                    <p>Editing is an essential part of the photography process. Learn how to use editing software to enhance your images while maintaining their authenticity. Carefully editing your photos can take your work to the next level and help you achieve the desired visual impact.</p>
                    <h3>7. Share Your Work and Seek Feedback</h3>
                    <p>Sharing your work with others and seeking feedback is a great way to grow as a photographer. Join photography groups, post your images on social media, and participate in photo contests to receive constructive criticism and valuable advice from fellow photographers.</p>
                    <h3>8. Stay Curious and Keep Learning</h3>
                    <p>Photography is a lifelong journey of learning and discovery. Stay curious, keep experimenting, and never stop learning. Embrace new techniques, explore different genres, and challenge yourself to push the boundaries of your creativity.</p>
                    <p>By following these tips and staying committed to your craft, you can advance in the world of photography and take your skills to new heights. Remember that photography is a deeply personal and expressive art form, so don't be afraid to let your unique vision shine through in your work.</p>
                </div>
                    <Comments className={styles.comments} />
            </div>
            
        </div>
    </div>
  )
}

export default SinglePage
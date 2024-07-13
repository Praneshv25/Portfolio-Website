import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pranesh</h1>
        <p  className='{styles.description'>
            I'm a Computer Science & Data Science student at Purdue University. Check out my projects and feel free to reach out!
        </p>
        <a href='mailto:praneshsvels@gmail.com' className={styles.contact}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/pranesh.png")} alt='Image of Me' className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
</section>
};

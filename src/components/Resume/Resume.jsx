import React from 'react'

import styles from './Resume.module.css'

export const Resume = () => {
  return (
    <section className={styles.container} id='resume'>
        <h2 className={styles.title}>Resume</h2>
        <div className={styles.content}>
            <iframe
            src= '/resume.pdf'
            className={styles.frame}>
            </iframe>
            <a 
            href="/resume.pdf" 
            download="/Pranesh_Velmurugan_resume.pdf"
            className={styles.resumeButton}
            >Download My Resume</a>
        </div>
    </section>
  )
}

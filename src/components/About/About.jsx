import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt='laptop'
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon '/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend Developer with experience in building responsive sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon'/>
                    <div className={styles.aboutItemText}> 
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimised APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have experience with UI Design</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

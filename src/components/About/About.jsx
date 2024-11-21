import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/robot.png")} 
            alt='laptop'
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/MLIcon.png")} alt='Brain Icon '/>
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning & Data Science Enthusiast</h3>
                        <p>Interested in the fields of Machine Learning and Data Science, I enjoy exploring how data can be leveraged to drive insights and decision-making. My passion lies in developing intelligent systems that can learn from data and improve over time.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/algorithm.png")} alt='Server Icon'/>
                    <div className={styles.aboutItemText}> 
                        <h3>Algorithms & Software Engineering</h3>
                        <p>With a strong interest in algorithms and software engineering, I am committed to writing efficient and maintainable code. I enjoy solving complex problems and continuously learning about new algorithms and best practices in software development.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/CursorIcon.png")} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I am a versatile full stack developer with a solid foundation in both front-end and back-end technologies. I have worked on various projects using modern frameworks like React and Vite.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

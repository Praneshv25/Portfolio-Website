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
                    <img src={getImageUrl("about/bot.png")} alt='Server Icon'/>
                    <div className={styles.aboutItemText}> 
                        <h3>Robotics & Intelligent Systems</h3>
                        <p>Driven by a passion for robotics, I focus on building intelligent, reliable systems that bridge the gap between code and the physical world. I enjoy developing motion pipelines, working with real-time control, and integrating simulation with hardware to solve complex, interdisciplinary problems.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/CursorIcon.png")} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I am a versatile full stack developer with a solid foundation in both front-end and back-end technologies. I have worked on various projects using modern frameworks like React.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

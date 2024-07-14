import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
   <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <a href="mailto:praneshsvels@gmail.com">    
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            </a>
            <a href="mailto:praneshsvels@gmail.com">praneshsvels@gmail.com</a>
        </li>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/pranesh-vels/">
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
            </a>
            <a href="https://www.linkedin.com/in/pranesh-vels/">linkedin.com/in/pranesh-vels</a>
        </li>
        <li className={styles.link}>
            <a href="https://github.com/Praneshv25">
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            </a>
            <a href="https://github.com/Praneshv25">github.com/Praneshv25</a>
        </li>
    </ul>
   </footer>
  )
}

import { useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollByWidth = (direction) => {
    const scrollDistance = window.innerWidth * 0.6; 
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.scrollButtons}>
        <button className={styles.scrollButton} onClick={() => scrollByWidth("left")}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className={styles.scrollButton} onClick={() => scrollByWidth("right")}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className={styles.projects} ref={scrollContainerRef}>
        {projects.map((project, id) => (
          <div key={id} className={styles.scrollItem}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

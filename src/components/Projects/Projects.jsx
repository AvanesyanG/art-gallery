import styles from "./styles.module.css";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect,useRef,useState} from "react";

const Projects = () => {
    const [selectedProject,setSelectedProject] = useState(0);
    const imageContainer = useRef(null);
    const projects = [
        {
            title: "Mona Lisa",
            src: "Mona_Lisa.jpg"
        },
        {
            title: "Vincent van Gogh",
            src: "Starry_Night.jpg"
        },
        {
            title: "Salvador Dalí",
            src: "7.jpg"
        },
        {
            title: "Sandro Botticelli",
            src: "The_Birth_Of_Venus.jpg"
        }
    ]
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger:imageContainer.current,
            start: "-=100px",
            end: "100%",
            pin:true,
        })
    },[])
    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="image"
                    />
                </div>
                <div className={styles.column}>
                    <p>Mona Lisa, The Starry Night, The Persistence of Memory, and The Birth of Venus each mark turning points in art history. Though from different periods, they all broke boundaries—whether through technique, emotion, symbolism, or imagination. </p>
                </div>
                <div className={styles.column}>
                    <p>Great art lasts because it speaks to something deeper than trends. These four works are iconic not just for their beauty, but for their ability to invite meaning. They blend mastery with mystery—offering new layers with every viewing.</p>
                </div>

            </div>
            <div className={styles.projectList}>
                {
                    projects.map((project,index)=> {
                        return <div onMouseOver={()=>{setSelectedProject(index)}} className={styles.projectEl} key={`p_${index}`}>
                            <p>{project.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Projects;
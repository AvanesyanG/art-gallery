"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const PROJECTS = [
    { title: "Mona Lisa",        src: "Mona_Lisa.jpg"        },
    { title: "Vincent van Gogh", src: "Starry_Night.jpg"     },
    { title: "Salvador Dalí",    src: "7.jpg"                },
    { title: "Sandro Botticelli",src: "The_Birth_Of_Venus.jpg"},
];

const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sectionRef      = useRef(null);
    const imageContainer  = useRef(null);

    useGsapContext(sectionRef, () => {
        ScrollTrigger.create({
            trigger: imageContainer.current,
            start: "-=100px",
            end: "100%",
            pin: true,
        });
    });

    return (
        <div ref={sectionRef} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${PROJECTS[selectedIndex].src}`}
                        fill
                        alt={PROJECTS[selectedIndex].title}
                    />
                </div>
                <div className={styles.column}>
                    <p>Mona Lisa, The Starry Night, The Persistence of Memory, and The Birth of Venus each mark turning points in art history. Though from different periods, they all broke boundaries—whether through technique, emotion, symbolism, or imagination.</p>
                </div>
                <div className={styles.column}>
                    <p>Great art lasts because it speaks to something deeper than trends. These four works are iconic not just for their beauty, but for their ability to invite meaning. They blend mastery with mystery—offering new layers with every viewing.</p>
                </div>
            </div>
            <div className={styles.projectList}>
                {PROJECTS.map((project, i) => (
                    <div
                        key={i}
                        className={styles.projectEl}
                        onMouseEnter={() => setSelectedIndex(i)}
                    >
                        <p>{project.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

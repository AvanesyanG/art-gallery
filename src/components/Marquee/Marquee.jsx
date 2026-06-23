"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const ITEMS = [
    "Mona Lisa", "·", "Starry Night", "·", "Birth of Venus",
    "·", "The Night Watch", "·", "Black Square", "·",
    "Persistence of Memory", "·", "Water Lilies", "·",
    "Girl with a Pearl Earring", "·", "The Scream", "·",
];

const doubled = [...ITEMS, ...ITEMS];

export default function Marquee() {
    const row1Ref    = useRef(null);
    const row2Ref    = useRef(null);
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, () => {
        gsap.to(row1Ref.current, {
            xPercent: -50,
            duration: 22,
            ease: "none",
            repeat: -1,
        });

        gsap.fromTo(
            row2Ref.current,
            { xPercent: -50 },
            { xPercent: 0, duration: 28, ease: "none", repeat: -1 }
        );
    });

    return (
        <div ref={sectionRef} className={styles.marquee}>
            <div className={styles.row}>
                <div ref={row1Ref} className={styles.track}>
                    {doubled.map((item, i) => (
                        <span key={i} className={item === "·" ? styles.dot : styles.item}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.row}>
                <div ref={row2Ref} className={styles.track}>
                    {doubled.map((item, i) => (
                        <span key={i} className={item === "·" ? styles.dot : styles.itemAlt}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

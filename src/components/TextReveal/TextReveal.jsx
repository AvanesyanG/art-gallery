"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const LINES = [
    ["Art", "is", "not"],
    ["what", "you", "see,"],
    ["but", "what", "you"],
    ["make", "others", "see."],
];

export default function TextReveal() {
    const containerRef = useRef(null);

    useGsapContext(containerRef, () => {
        gsap.from(`.${styles.word}`, {
            yPercent: 130,
            opacity: 0,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "center 25%",
                scrub: 1,
            },
        });

        gsap.from(`.${styles.attribution}`, {
            opacity: 0,
            y: 24,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "55% center",
                end: "bottom 40%",
                scrub: 0.6,
            },
        });
    });

    return (
        <div ref={containerRef} className={styles.textReveal}>
            <div className={styles.content}>
                {LINES.map((line, li) => (
                    <div key={li} className={styles.line}>
                        {line.map((word, wi) => (
                            <span key={wi} className={styles.wordWrapper}>
                                <span className={styles.word}>{word}</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            <p className={styles.attribution}>— Edgar Degas</p>
        </div>
    );
}

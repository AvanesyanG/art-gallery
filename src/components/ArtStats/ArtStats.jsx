"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const STATS = [
    { value: 500, label: "Artworks",    sub: "in our collection",   suffix: "+" },
    { value: 128, label: "Artists",     sub: "celebrated worldwide", suffix: ""  },
    { value: 42,  label: "Exhibitions", sub: "curated with care",    suffix: ""  },
    { value: 99,  label: "Years",       sub: "of art heritage",      suffix: "+" },
];

export default function ArtStats() {
    const containerRef = useRef(null);
    const numRefs      = useRef(STATS.map(() => null));

    useGsapContext(containerRef, () => {
        STATS.forEach((stat, i) => {
            const obj = { val: 0 };
            gsap.to(obj, {
                val: stat.value,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: numRefs.current[i],
                    start: "top 85%",
                    once: true,
                },
                onUpdate: () => {
                    if (numRefs.current[i]) {
                        numRefs.current[i].textContent = `${Math.round(obj.val)}${stat.suffix}`;
                    }
                },
            });
        });

        gsap.from(`.${styles.statItem}`, {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 72%",
            },
        });

        gsap.from(`.${styles.divider}`, {
            scaleY: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 72%",
            },
        });
    });

    return (
        <div ref={containerRef} className={styles.stats}>
            <p className={styles.eyebrow}>Gallery of Excellence</p>
            <div className={styles.grid}>
                {STATS.map((stat, i) => (
                    <div key={i} className={styles.statItem}>
                        {i > 0 && <div className={styles.divider} />}
                        <span
                            ref={el => { numRefs.current[i] = el; }}
                            className={styles.number}
                        >
                            0
                        </span>
                        <p className={styles.label}>{stat.label}</p>
                        <p className={styles.sub}>{stat.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

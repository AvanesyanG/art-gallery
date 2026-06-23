"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { MASTERPIECES } from "@/data/artworks";
import styles from "./styles.module.css";

const FAN = [
    { x: -430, y: 90,  rot: -32 },
    { x: -235, y: 25,  rot: -17 },
    { x:  -65, y: -12, rot:  -5 },
    { x:   65, y: -12, rot:   5 },
    { x:  235, y: 25,  rot:  17 },
    { x:  430, y: 90,  rot:  32 },
];

export default function ImageStack() {
    const sectionRef = useRef(null);
    const cardRefs   = useRef(MASTERPIECES.map(() => null));

    useGsapContext(sectionRef, () => {
        gsap.set(cardRefs.current, {
            rotation: (i) => (i - 2.5) * 1.8,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 35%",
                end: "bottom 15%",
                scrub: 2.2,
            },
        });

        cardRefs.current.forEach((card, i) => {
            tl.to(card, {
                x: FAN[i].x,
                y: FAN[i].y,
                rotation: FAN[i].rot,
                ease: "power2.inOut",
            }, 0);
        });
    });

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.heading}>
                <p className={styles.eyebrow}>The Masterpieces</p>
                <h2 className={styles.title}>Masters of<br />the Craft</h2>
            </div>
            <div className={styles.deck}>
                {MASTERPIECES.map((card, i) => (
                    <div
                        key={card.src}
                        ref={el => { cardRefs.current[i] = el; }}
                        className={styles.card}
                        style={{ zIndex: i }}
                    >
                        <Image
                            src={`/images/${card.src}`}
                            fill
                            alt={card.title}
                            style={{ objectFit: "cover" }}
                        />
                        <div className={styles.cardOverlay}>
                            <span className={styles.cardTitle}>{card.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

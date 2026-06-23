"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import { MASTERPIECES } from "@/data/artworks";
import styles from "./styles.module.css";

export default function HorizontalScroll() {
    const sectionRef = useRef(null);
    const trackRef   = useRef(null);

    useGsapContext(sectionRef, () => {
        const track = trackRef.current;

        gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${track.scrollWidth - window.innerWidth}`,
                scrub: 1.2,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });
    });

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={trackRef} className={styles.track}>
                <div className={styles.titleSlide}>
                    <p className={styles.eyebrow}>Browse the collection</p>
                    <h2 className={styles.titleMain}>The<br />Masters</h2>
                    <p className={styles.hint}>Scroll →</p>
                </div>
                {MASTERPIECES.map((art, i) => (
                    <div key={art.src} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image src={`/images/${art.src}`} fill alt={art.title} />
                        </div>
                        <div className={styles.info}>
                            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                            <h3 className={styles.artTitle}>{art.title}</h3>
                            <p className={styles.artist}>{art.artist}</p>
                            <span className={styles.year}>{art.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const LEFT_X   = [-800, -900, -400];
const RIGHT_X  = [ 800,  900,  400];
const LEFT_ROT = [-30, -20, -35];
const RIGHT_ROT = [30,  20,  35];
const Y_OFFSETS = [100, -150, -400];

const ROWS = [
    { left: "/images/img-1.jpg", right: "/images/img-2.jpg" },
    { left: "/images/img-3.jpg", right: "/images/img-4.jpg" },
    { left: "/images/img-5.jpg", right: "/images/img-6.jpg" },
];

const FinalSection = () => {
    const mainRef   = useRef(null);
    const logoRef   = useRef(null);
    const buttonRef = useRef(null);

    useGsapContext(mainRef, () => {
        const rows = gsap.utils.toArray(`.${styles.row}`);

        rows.forEach((row, rowIndex) => {
            const cardLeft  = row.querySelector(`.${styles.cardLeft}`);
            const cardRight = row.querySelector(`.${styles.cardRight}`);

            const sharedTrigger = {
                trigger: mainRef.current,
                start: "top center",
                end: "150% bottom",
                scrub: true,
            };

            gsap.to(cardLeft, {
                x: LEFT_X[rowIndex],
                y: Y_OFFSETS[rowIndex],
                rotation: LEFT_ROT[rowIndex],
                scrollTrigger: sharedTrigger,
            });

            gsap.to(cardRight, {
                x: RIGHT_X[rowIndex],
                y: Y_OFFSETS[rowIndex],
                rotation: RIGHT_ROT[rowIndex],
                scrollTrigger: sharedTrigger,
            });
        });

        const revealTrigger = {
            trigger: mainRef.current,
            start: "top 25%",
            toggleActions: "play reverse play reverse",
        };

        gsap.to(logoRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: revealTrigger,
        });

        gsap.to(`.${styles.lineText}`, {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: revealTrigger,
        });

        gsap.to(buttonRef.current, {
            y: 0,
            opacity: 1,
            delay: 0.25,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: revealTrigger,
        });
    });

    return (
        <div className={styles.finalSection}>
            <section className={`${styles.section} ${styles.hero}`}>
                <div className={styles.img}>
                    <img className={styles.logoImage} src="/images/artistic.jpg" alt="" />
                </div>
            </section>

            <section ref={mainRef} className={`${styles.section} ${styles.main}`}>
                <div className={styles.mainContent}>
                    <div ref={logoRef} className={styles.logo}>
                        <img src="/images/gall.png" alt="Gallery logo" />
                    </div>
                    <div className={styles.copy}>
                        <div className={styles.line}>
                            <p className={styles.lineText}>Dive into animated design</p>
                        </div>
                        <div className={styles.line}>
                            <p className={styles.lineText}>Take the fast lane to mastery.</p>
                        </div>
                        <div className={styles.line}>
                            <p className={styles.lineText}>Enjoy the atmosphere</p>
                        </div>
                    </div>
                    <div ref={buttonRef} className={styles.btnContainer}>
                        <button className={styles.btn}>Connect</button>
                    </div>
                </div>

                {ROWS.map(({ left, right }, i) => (
                    <div key={i} className={styles.row}>
                        <div className={`${styles.card} ${styles.cardLeft}`}>
                            <img src={left} alt="" />
                        </div>
                        <div className={`${styles.card} ${styles.cardRight}`}>
                            <img src={right} alt="" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default FinalSection;

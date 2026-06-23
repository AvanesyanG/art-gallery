"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const Intro = () => {
    const sectionRef    = useRef(null);
    const backgroundRef = useRef(null);
    const imageRef      = useRef(null);

    useGsapContext(sectionRef, () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: "+=500px",
                scrub: true,
            },
        });

        tl.from(backgroundRef.current, { clipPath: "inset(15%)" })
          .to(imageRef.current, { height: "200px" });
    });

    return (
        <div ref={sectionRef} className={styles.intro}>
            <div ref={backgroundRef} className={styles.backgroundImage}>
                <Image src="/images/bg.png" fill alt="Gallery background" />
            </div>
            <div className={styles.introContainer}>
                <div
                    ref={imageRef}
                    data-scroll
                    data-scroll-speed="0.8"
                    className={styles.introImage}
                >
                    <Image src="/images/Black_Square.jpg" fill alt="Black Square by Kazimir Malevich" />
                </div>
                <h1 data-scroll data-scroll-speed="0.4">Animated Gallery</h1>
            </div>
        </div>
    );
};

export default Intro;

"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGsapContext } from "@/hooks/useGsapContext";
import styles from "./styles.module.css";

const PHRASES = [
    "Motion design.",
    "UI animations.",
    "Scroll interactions.",
    "Creative development.",
];

export default function Description() {
    return (
        <div className={styles.description}>
            {PHRASES.map((phrase, i) => (
                <AnimatedText key={i}>{phrase}</AnimatedText>
            ))}
        </div>
    );
}

function AnimatedText({ children }) {
    const textRef = useRef(null);

    useGsapContext(textRef, () => {
        gsap.from(textRef.current, {
            x: -200,
            opacity: 0,
            scrollTrigger: {
                trigger: textRef.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
        });
    });

    return <p ref={textRef}>{children}</p>;
}

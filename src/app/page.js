"use client";
import { useEffect, useRef, useState } from "react";import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Description from "@/components/Description/Desctiption";
import Projects from "@/components/Projects/Projects";
import Gallery from "@/components/Gallery/Gallery";
import Zoom from "@/components/Zoom/Zoom";

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        let locomotiveScroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;

            locomotiveScroll = new LocomotiveScroll({
                el: containerRef.current,
                smooth: true,
                multiplier: 1.5,
                smartphone: {
                    smooth: true
                },
                tablet: {
                    smooth: true
                },

            });

        };

        initScroll();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <main
            ref={containerRef}
            className={styles.main}
        >
            <Intro/>
            <Description/>
            <Projects/>
            <Gallery/>
            <Zoom/>

        </main>
    );
}

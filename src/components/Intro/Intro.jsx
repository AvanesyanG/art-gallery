"use client";
import Image from 'next/image';
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect,useRef} from "react";


const Intro = () => {
    const backgroundImage =useRef(null);
    const introImage =useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start:0,
                end: "+=500px",
                scrub: true,
            }
        })
        timeline
            .from(backgroundImage.current, {clipPath:"inset(15%)"})
            .to(introImage.current, {height: "200px"})
    },[])



    return (
        <div  className={styles.intro}>
            <div ref={backgroundImage}  className={styles.backgroundImage}>
                <Image
                    src={'/images/bg.png'}
                    fill
                    alt="background image"
                />
            </div>
            <div className={styles.introContainer}>
                <div ref={introImage}
                     data-scroll
                    data-scroll-speed="0.8"  // Parallax strength, increase to exaggerate
                    className={styles.introImage}
                >
                    <Image
                        src={'/images/Black_Square.jpg'}
                        fill
                        alt="foreground parallax image"
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.4" >Animated Gallery</h1>
            </div>
        </div>
    );
};

export default Intro;

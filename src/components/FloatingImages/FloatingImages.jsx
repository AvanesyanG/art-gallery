'use client';
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
import useDimension from "@/hooks/useDimension";

const FLOATERS = [
  { src: "sea1.jpg",   factor: 0.35, left: "3%",  top: "6%",  w: 320, h: 240, rot: -3 },
  { src: "sea3.jpg",   factor: 0.85, left: "60%", top: "4%",  w: 280, h: 370, rot:  2 },
  { src: "sea5.jpg",   factor: 0.55, left: "30%", top: "8%",  w: 260, h: 195, rot: -1 },
  { src: "sea4.webp",  factor: 0.22, left: "72%", top: "46%", w: 240, h: 310, rot:  4 },
  { src: "sea2.webp",  factor: 1.05, left: "5%",  top: "50%", w: 220, h: 285, rot: -2 },
  { src: "sea6.jpeg",  factor: 0.65, left: "42%", top: "58%", w: 295, h: 215, rot:  1 },
  { src: "sea7.jpg",   factor: 1.2,  left: "18%", top: "30%", w: 198, h: 255, rot: -4 },
];

export default function FloatingImages() {
  const containerRef = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className={styles.floating}>
      <div className={styles.centerText}>
        <span className={styles.big}>Explore</span>
        <span className={styles.big}>the world</span>
        <span className={styles.big}>of art</span>
      </div>
      {FLOATERS.map((f, i) => (
        <Floater key={i} {...f} height={height} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function Floater({ src, factor, left, top, w, h, rot, height, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, height * factor]);

  return (
    <motion.div
      style={{ y, left, top, width: w, height: h, rotate: rot }}
      className={styles.floater}
    >
      <Image src={`/images/${src}`} fill alt="" style={{ objectFit: "cover" }} />
    </motion.div>
  );
}

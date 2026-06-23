"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function GsapMagnetic({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1,0.3)" });
        const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1,0.3)" });

        const onMouseMove = ({ clientX, clientY }) => {
            const { width, height, left, top } = el.getBoundingClientRect();
            xTo(clientX - (left + width / 2));
            yTo(clientY - (top + height / 2));
        };

        const onMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseleave", onMouseLeave);

        return () => {
            el.removeEventListener("mousemove", onMouseMove);
            el.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref });
}

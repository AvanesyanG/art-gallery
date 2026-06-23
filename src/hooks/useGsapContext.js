"use client";
import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Wraps gsap.context() with automatic cleanup via ctx.revert().
 * Pass a ref to scope all selector-based queries inside animationFn
 * to that DOM subtree — preventing leaks into other components.
 *
 * Usage:
 *   const sectionRef = useRef(null);
 *   useGsapContext(sectionRef, () => {
 *     gsap.from(".word", { opacity: 0, y: 40, stagger: 0.1 });
 *   });
 *   return <section ref={sectionRef}>…</section>;
 */
export function useGsapContext(scopeRef, animationFn, deps = []) {
    useLayoutEffect(() => {
        const ctx = gsap.context(animationFn, scopeRef);
        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

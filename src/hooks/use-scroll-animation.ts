"use client";

import { useEffect } from "react";
import { useAnimation, type AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type ScrollAnimationVariants = {
  hidden: object;
  visible: object;
};

export const defaultScrollVariants: ScrollAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function useScrollAnimation(
  variants: ScrollAnimationVariants = defaultScrollVariants,
  threshold: number = 0.1
) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [controls, ref] as const;
}

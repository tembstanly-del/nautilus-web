import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in animation with scroll trigger
 */
export const fadeInUp = (element: Element | null, delay: number = 0) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Stagger animation for lists/grids
 */
export const staggerFadeIn = (
  elements: Element[] | NodeListOf<Element>,
  stagger: number = 0.15
) => {
  if (!elements || elements.length === 0) return null;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Parallax effect
 */
export const parallaxY = (
  element: Element | null,
  yPercent: number = -20
) => {
  if (!element) return null;

  return gsap.to(element, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
};

/**
 * Scale in animation
 */
export const scaleIn = (element: Element | null, delay: number = 0) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Draw line animation (for SVG paths or dividers)
 */
export const drawLine = (element: Element | null, duration: number = 1) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      duration,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Rotate in animation
 */
export const rotateIn = (element: Element | null, delay: number = 0) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      rotation: -10,
      opacity: 0,
      scale: 0.9,
    },
    {
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Clean up all ScrollTriggers
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

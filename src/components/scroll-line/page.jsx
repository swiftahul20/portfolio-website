"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;

    // Animate the line height based on scroll
    gsap.to(lineRef.current, {
      height: "100%",
      scrollTrigger: {
        trigger: "main",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className="fixed top-0 left-0 ml-[calc(50%+640px)] w-0.5 origin-top bg-linear-to-b from-gray-900 to-gray-300"
      style={{ height: 0 }}
    />
  );
};

export default ScrollLine;

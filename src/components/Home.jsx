"use client";
import { gsap } from "gsap";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const underlineRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current.to(underlineRef.current, {
      width: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (isHovered) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isHovered]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-section="connect"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="border-b border-slate-300 font-semibold">
      <div className="max-w-xl space-y-6 pb-14 text-black">
        <motion.h1
          className="mb-4 text-4xl font-semibold text-slate-950"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Hello, I'm Miftahul Habib
        </motion.h1>

        <motion.span
          className="font-dm block text-2xl font-normal text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          — a front-end developer based in Yogyakarta.
        </motion.span>

        <motion.div
          className="flex w-fit items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <button
              onClick={scrollToContact}
              className="mb-1 block cursor-pointer leading-none text-gray-600 transition-colors hover:text-blue-500"
            >
              Get in touch
            </button>

            <div
              ref={underlineRef}
              className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
              style={{ width: 0 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

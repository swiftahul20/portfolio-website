"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const lineFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* fine dot grid — faster, foreground */}
      {/* <motion.div
        style={{ y: dotY }}
        className="absolute inset-x-0 -top-1/4 h-[150%] bg-[radial-gradient(circle,_#4F46E5_1px,_transparent_1px)] bg-[length:28px_28px] opacity-[0.08]"
      /> */}

      {/* wider line grid — slower, background */}
      <motion.div
        style={{ y: lineY }}
        className="absolute inset-x-0 -top-1/4 h-[150%] bg-[linear-gradient(to_right,_#4F46E5_1px,_transparent_1px),linear-gradient(to_bottom,_#4F46E5_1px,_transparent_1px)] bg-[length:64px_64px] opacity-[0.09]"
      />
      <div className="absolute inset-y-0 left-8 hidden w-px bg-blue-300/10 md:block" />
      <motion.div
        style={{ height: lineFill }}
        className="absolute top-0 left-8 hidden w-[2px] bg-blue-400/50 md:block"
      />
    </div>
  );
};

export default ParallaxBackground;

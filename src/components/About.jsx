"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-2xl font-bold"
      >
        About
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg/relaxed font-normal text-balance text-slate-600"
      >
        Hi! I&rsquo;ve been building for the web as a front-end developer for
        over five years. My main focus is working with JavaScript frameworks to
        bring designs to life—creating clean, easy-to-use web applications that
        run smoothly and are built to last :D
      </motion.p>
    </div>
  );
};

export default About;

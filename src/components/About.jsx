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
        Hi! I build fullstack web apps with a heavy focus on high-performance frontends. For over five years, I’ve been combining UI frameworks like React and Vue with Golang and Express on the backend to deliver seamless, end-to-end web experiences.
      </motion.p>
    </div>
  );
};

export default About;

"use client";
import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    // <section className="border-b border-slate-300 font-semibold">
    //   <div className="max-w-xl space-y-6 pb-14 text-black">
    //     <h1 className="mb-4 text-4xl font-semibold text-slate-950">
    //       Hello, I'm Miftahul Habib
    //     </h1>
    //     <span className="font-dm block text-2xl font-normal text-slate-500">
    //       — a remote front-end developer based in Yogyakarta.
    //     </span>
    //     <button className="text-gray-900 underline transition-colors hover:text-gray-600">
    //       Get in touch
    //     </button>
    //   </div>
    // </section>
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
          — a remote front-end developer based in Yogyakarta.
        </motion.span>

        <motion.button
          className="text-gray-900 underline transition-colors hover:text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get in touch
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

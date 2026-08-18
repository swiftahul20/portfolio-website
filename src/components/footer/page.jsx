"use client";

import { motion } from "framer-motion";
import { CircleArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-blue-50">
      <div className="mx-auto max-w-2xl px-4 py-6 text-xs md:px-0 md:py-20">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2 text-gray-500 md:max-w-[30%]">
            <div>© {new Date().getFullYear()} Miftahul Habib</div>
            <p className="text-xs text-gray-400">
              Built with Next.js, Tailwind CSS, and Framer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="my-auto mb-auto cursor-pointer text-gray-600 underline decoration-gray-300 transition-colors hover:text-gray-900 hover:decoration-gray-900"
          >
            <CircleArrowUp
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

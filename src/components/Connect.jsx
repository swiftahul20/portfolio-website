"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    id: "email",
    name: "Email",
    href: "mailto:miftahul.habib1992@gmail.com",
    icon: MailIcon,
    display: "miftahul.habib1992@gmail.com",
    showArrow: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/miftahul-habib-4b4bb4194",
    icon: LinkedinIcon,
    display: "in/miftahul-habib-4b4bb4194/",
    showArrow: true,
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/swiftahul20",
    icon: GithubIcon,
    display: "git/swiftahul20",
    showArrow: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/swiftah_/",
    icon: InstagramIcon,
    display: "@swiftah_",
    showArrow: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SocialCard = ({ link }) => {
  const Icon = link.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      variants={item}
      href={link.href}
      target={link.id !== "email" ? "_blank" : undefined}
      rel={link.id !== "email" ? "noopener noreferrer" : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex cursor-pointer flex-col rounded-lg px-3 py-3 transition-colors hover:bg-blue-50"
      aria-label={`Contact via ${link.name}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex-1">
          <motion.div
            animate={{
              rotate: isHovered ? -8 : 0,
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? "#62a6fc" : "#111827",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-block"
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </motion.div>
          <span className="mt-2 block text-base text-slate-700">
            {link.display}
          </span>
        </div>
        {link.showArrow && (
          <motion.div
            animate={{
              x: isHovered ? 0 : -6,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="ml-2 shrink-0"
          >
            <ArrowRight className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </motion.div>
        )}
      </div>
    </motion.a>
  );
};

const Connect = () => {
  return (
    <section
      id="connect"
      className="grid gap-4 border-t border-gray-200 pt-8 md:gap-8 md:pt-14"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold"
      >
        Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-gray-700"
      >
        I'm always open to freelance projects. Feel free to contact me using the
        email or social links below.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"
      >
        {socialLinks.map((link) => (
          <SocialCard key={link.id} link={link} />
        ))}
      </motion.div>
    </section>
  );
};

export default Connect;

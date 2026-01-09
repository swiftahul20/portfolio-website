import {
  CircleArrowUp,
  Github,
  GithubIcon,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import React from "react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@yourname.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/yourname",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourname",
    icon: Twitter,
  },
  {
    name: "Github",
    href: "https://twitter.com/yourname",
    icon: GithubIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-amber-50">
      <div className="mx-auto max-w-2xl py-12 text-xs">
        <div className="flex flex-row justify-between">
          {/* Social media links on the left */}
          <div className="flex max-w-[30%] flex-col gap-2 text-gray-500">
            <div>© {new Date().getFullYear()} Miftahul Habib</div>
            {/* <p className="mt-2 flex-wrap text-[10px] text-wrap">
              Designed in Figma, coded in Visual Studio Code. Built with Next.js
              and Tailwind.
            </p> */}
          </div>

          {/* Back to top in the center */}
          <button className="mb-auto cursor-pointer text-gray-600 underline decoration-gray-300 transition-colors hover:text-gray-900 hover:decoration-gray-900">
            <CircleArrowUp className="h-4 w-4" />
          </button>

          {/* Name on the right */}
          {/* <div className="flex max-w-[30%] grid-cols-4 gap-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-gray-400 transition-colors hover:text-gray-900"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

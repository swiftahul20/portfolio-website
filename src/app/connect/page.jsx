import {
  ArrowRight,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import React from "react";

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

const SocialCard = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.id !== "email" ? "_blank" : undefined}
      rel={link.id !== "email" ? "noopener noreferrer" : undefined}
      className="group flex cursor-pointer flex-col px-2 py-2 transition-colors hover:bg-blue-50"
      aria-label={`Contact via ${link.name}`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-blue-400">
            <Icon aria-hidden="true" />
          </h3>
          <span className="block py-1 text-base text-slate-700">
            {link.display}
          </span>
        </div>
        {link.showArrow && (
          <ArrowRight
            className="my-auto hidden transition-all group-hover:block group-hover:text-blue-400"
            aria-hidden="true"
          />
        )}
      </div>
    </a>
  );
};

const Connect = () => {
  return (
    <section
      id="connect"
      className="grid gap-4 border-t border-gray-200 pt-8 md:gap-8 md:pt-16"
    >
      <h2 className="text-2xl font-semibold"> Connect </h2>
      <p className="text-lg">
        I'm always open to freelance projects. Feel free to contact me using the
        email or social links below.
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        {socialLinks.map((link) => (
          <SocialCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
};

export default Connect;

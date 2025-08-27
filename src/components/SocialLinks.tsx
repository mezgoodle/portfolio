import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { SocialLink } from "@/types";

const iconMap: { [key: string]: IconType } = {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaGlobe,
};

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <section className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-teal-500 pl-4 inline-block">
        My social links
      </h2>
      <div className="flex justify-center items-center gap-6 mt-4">
        {links.map((link) => {
          const IconComponent = iconMap[link.icon_name] || iconMap.FaGlobe;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
            >
              <IconComponent size={32} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

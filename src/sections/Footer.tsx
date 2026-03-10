import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socials = [
  { icon: <FaGithub />, href: "#", label: "GitHub" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <HiMail />, href: "mailto:hello@johndoe.dev", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-xl text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

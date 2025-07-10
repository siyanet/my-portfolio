import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  "Home",
  "About",
  "Projects",
  "Certificates",
  "Experience",
  "Resume",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-8 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left - Name & Socials */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Siyanet Getahun
          </h2>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/siyanet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#12d4aa] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siyanet-getahun-5b7734287/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#12d4aa] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:siyanetgetahunw@gmail.com"
              className="hover:text-[#12d4aa] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Center - Nav Links */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium flex-wrap justify-center text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#12d4aa] transition duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Bottom - Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Siyanet Getahun. All rights reserved.
      </div>
    </footer>
  );
}

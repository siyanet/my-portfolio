

import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "About",
  "Projects",
  "Certificates",
  "Experience",
  "Resume",
  "Contact",
];

const UpperHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-gray-950 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Radial gradient background (only visible when NOT scrolled) */}
      {!scrolled && (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#3bd296_0%,_transparent_70%)]" />
      )}

      <div className="relative z-10 mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-white">
        {/* Logo / Name */}
        <div className="rounded-lg px-4 py-2">
          <p className="font-bold text-[#3bd296] text-lg animate-pulse tracking-wide">Siyanet Getahun</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-[#12d4aa] transition duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="text-white sm:hidden text-sm font-medium border border-[#12d4aa] px-3 py-1 rounded hover:bg-[#12d4aa] hover:text-black transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="sm:hidden bg-gray-900 text-white border-t border-gray-800 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-gray-300 hover:text-[#3bd296] transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default UpperHeader;

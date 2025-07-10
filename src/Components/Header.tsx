


import React from "react";

const Header: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden">
      {/* Green radial glow */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#3bd296_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center space-y-6 max-w-4xl">
        {/* Hello line with emoji */}
        <p className="text-lg md:text-xl font-medium text-white/80 tracking-wide">
          👋 Hello There, I’m
        </p>

        {/* Name */}
        <h1 className="text-5xl 
         md:text-7xl font-extrabold bg-gradient-to-r from-[#3bd296] to-[#12d4aa] bg-clip-text text-transparent drop-shadow-lg">
          Siyanet Getahun
        </h1>

        {/* Subtitle: Roles */}
        <p className="text-xl md:text-2xl animate-bounce font-semibold text-white/90">
          a Fullstack Developer & Software Engineer
        </p>

        {/* Optional description */}
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto pt-2">
          I build performant, responsive, and scalable web applications using modern technologies.
        </p>
      </div>
    </section>
  );
};

export default Header;


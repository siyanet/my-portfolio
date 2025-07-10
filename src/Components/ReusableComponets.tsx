

// components/SectionTitle.tsx
import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.875rem; /* equivalent to text-3xl */
  font-weight: 700; /* font-bold */
  color: #3bd296; /* text-gray-800 */

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    color: #12d4aa;
  }

  margin-bottom: 2.5rem; /* mb-10 */
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;




import React from "react";

interface HeaderLineProps {
  align?: "left" | "right" |"center";
  prefix?: string;
  highlight: string;
}

export const HeaderLine: React.FC<HeaderLineProps> = ({ align = "left", prefix, highlight }) => {
  return (
    <div className={`relative w-full py-4 text-${align}`}>
      {prefix && (
        <span className="font-bold text-2xl md:text-5xl">{prefix}</span>
      )}
      <span
        className={`
          block
          text-6xl sm:text-7xl md:text-7xl font-extrabold
          bg-gradient-to-r from-[#3bd296] to-[#12d4aa]
          bg-clip-text text-transparent drop-shadow-md
          ${prefix ? "ml-2 inline" : ""}
        `}
      >
        {highlight}
      </span>
    </div>
  );
};









interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`inline-block bg-[linear-gradient(to_right,_#3bd296,_#12d4aa)] hover:bg-[linear-gradient(to_right,_#2cc68a,_#0fbf98)] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;




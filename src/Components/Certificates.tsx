



import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Title } from "./ReusableComponets";

type Certificate = {
  id: string;
  src: string;
  alt?: string;
  type?: "image" | "pdf";
};

const certificates: Certificate[] = [
  { id: "c1", src: "/certificates/1.png", alt: "Certificate 1", type: "image" },
  { id: "c2", src: "/certificates/2.png", alt: "Certificate 2", type: "image" },
  { id: "c3", src: "/certificates/3.png", alt: "Certificate 3", type: "image" },
  { id: "c4", src: "/certificates/4.png", alt: "Certificate 4", type: "image" },
  { id: "c5", src: "/certificates/5.png", alt: "Certificate 5", type: "image" },
];

export default function CertificatesCarousel() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + certificates.length) % certificates.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % certificates.length);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const pos = (i: number) =>
    (i - index + certificates.length) % certificates.length === 0
      ? 0
      : (i - index + certificates.length) % certificates.length === 1 ||
        (i === certificates.length - 1 && index === 0)
      ? 1
      : -1;

  return (
    <section
      id="certificates"
      className="relative flex flex-col items-center justify-start w-full h-[44rem] bg-gray-900 overflow-hidden"
    >
      <Title>Certificates</Title>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous certificate"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-gray-950 shadow-md hover:bg-gray-100 focus-visible:outline"
      >
        <ArrowLeft className="h-6 w-6 text-emerald-400" />
      </button>
      <button
        onClick={next}
        aria-label="Next certificate"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-gray-950 shadow-md hover:bg-gray-100 focus-visible:outline"
      >
        <ArrowRight className="h-6 w-6 text-emerald-400" />
      </button>

      {/* Carousel Items */}
      <div className="relative flex w-full flex-1 items-center justify-center overflow-x-hidden">
        {certificates.map((cert, i) => {
          const position = pos(i);
          const isCenter = position === 0;

          const isPDF = cert.type === "pdf";
          const previewSrc = isPDF ? "/pdf-icon.png" : cert.src;

          return (
            <AnimatePresence key={cert.id}>
              {Math.abs(position) <= 1 && (
                <motion.div
                  key={cert.id}
                  initial={{ x: position * 300, scale: 0.75, opacity: 0 }}
                  animate={{
                    x: position * 200,
                    scale: isCenter ? 1 : 0.7,
                    opacity: isCenter ? 1 : 0.5,
                  }}
                  exit={{ x: position * -300, scale: 0.75, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className={`absolute h-[26rem] w-[90vw] max-w-[18rem] left-1/2 -translate-x-1/2 object-contain flex items-center justify-center ${
                    isCenter ? "blur-0 z-10" : "blur-sm z-0"
                  }`}
                >
                  {isPDF ? (
                    <a href={cert.src} target="_blank" rel="noopener noreferrer">
                      <img
                        src={previewSrc}
                        alt={cert.alt}
                        className="h-full w-full object-contain border border-white/20 rounded"
                      />
                    </a>
                  ) : (
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="h-full w-full object-fit border border-white/20 rounded"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { BRID_DATA } from "../data/contentData";
import { Heart } from "lucide-react";

function Landing({ onStart }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden bg-(--bg)">
      {/* Soft Ambient Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-(--accent-bg) blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
        {/* Floating Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-6 p-4 rounded-full bg-(--accent-bg) border border-(--accent-border) text-(--accent)"
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>

        {/* Main Header Reveal */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading font-bold text-4xl sm:text-6xl text-header tracking-tight leading-tight mb-4"
        >
          Happy Birthday, <br />
          <span className="text-(--accent) drop-shadow-xs">
            {BRID_DATA.herName}
          </span>{" "}
          ✨
        </motion.h1>

        {/* Subtext Reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-sans text-base sm:text-lg max-w-md text-custom-80 leading-relaxed mb-10"
        >
          A space crafted entirely from scratch, holding fragments of our
          moments, our laughter, and my promises to you.
        </motion.p>

        {/* Interactive Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="cursor-pointer group flex items-center gap-2 px-8 py-3.5 bg-(--accent) text-white font-medium rounded-full shadow-(--shadow) hover:bg-(--accent)/90 transition-all duration-300"
        >
          <span>Wander Through Our Story</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            💝
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}

export default Landing;

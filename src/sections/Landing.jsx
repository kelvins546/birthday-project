import React from "react";
import { motion } from "framer-motion";
import { BRID_DATA } from "../data/contentData";

function Landing({ onStart }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-(--bg)">
      {/* Premium Ambient Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[1000px] max-h-[1000px] rounded-full bg-linear-to-tr from-(--accent-bg) to-pink-500/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center justify-center mt-[-5vh] gap-12 sm:gap-16">
        {/* HEADING REVEAL & FLOAT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl text-header tracking-tight leading-[1.1] sm:leading-[1.1]"
          >
            Happy Birthday,
            <br />
            <span className="bg-linear-to-r from-(--accent) to-pink-400 bg-clip-text text-transparent drop-shadow-md filter mt-2 inline-block">
              {BRID_DATA.herName}
            </span>{" "}
            <span className="inline-block animate-pulse">✨</span>
          </motion.h1>
        </motion.div>

        {/* DESCRIPTION REVEAL - TAGLISH REVISION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="font-sans text-base sm:text-xl max-w-[18rem] sm:max-w-lg md:max-w-xl text-custom-80 leading-relaxed sm:leading-loose px-2 drop-shadow-xs"
        >
          i might not be good at grand gestures, pero gusto kong bigyan ka ng
          isang bagay na pwede mong balikan kahit kailan. 💜
        </motion.p>

        {/* INTERACTIVE CTA BUTTON REVEAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <button
              onClick={onStart}
              className="cursor-pointer group flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-(--accent) to-[#c084fc] text-white font-medium text-base sm:text-lg rounded-full shadow-[0_0_30px_rgba(170,59,255,0.3)] hover:shadow-[0_0_60px_rgba(170,59,255,0.6)] border border-white/10 transition-all duration-300"
            >
              <span>Continue</span>
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="text-lg"
              >
                💝
              </motion.span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;

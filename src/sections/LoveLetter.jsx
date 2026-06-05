import React, { useState } from "react";
import { motion } from "framer-motion";
import { BRID_DATA } from "../data/contentData";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

function LoveLetter() {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);

  // Funny phrases that change every time she clicks "No"
  const noPhrases = [
    "No",
    "Sure ka ba?",
    "Talaga ba??",
    "Huy grabe siya...",
    "Isip isip din...",
    "Bawal mag no!",
  ];
  const currentNoPhrase = noPhrases[Math.min(noCount, noPhrases.length - 1)];

  // Scale math: Yes gets massive, No shrinks to nothing
  const yesScale = 1 + noCount * 0.4;
  const noScale = Math.max(0, 1 - noCount * 0.2);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    // Makes the No button jump to a random position nearby
    setNoPosition({
      x: Math.random() * 160 - 80, // Random X offset between -80px and 80px
      y: Math.random() * 100 - 50, // Random Y offset between -50px and 50px
    });
  };

  // High-performance canvas confetti celebration trigger
  const triggerConfetti = () => {
    setIsAccepted(true); // Changes the buttons into a celebration text!
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#aa3bff", "#FFB7B2", "#E8A7A1", "#FFFDF9"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#aa3bff", "#FFB7B2", "#E8A7A1", "#FFFDF9"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section className="w-full py-24 px-4 bg-linear-to-b from-(--bg) to-(--code-bg) relative overflow-hidden flex flex-col items-center">
      {/* Decorative background accent elements */}
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-12 -right-12 w-64 h-64 bg-(--accent-bg) rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-(--accent) bg-(--accent-bg) px-3 py-1 rounded-full">
            The Finale
          </span>
          <div className="w-8 h-8 mx-auto mt-4 text-(--accent) animate-bounce">
            <Heart className="w-full h-full fill-current" />
          </div>
        </div>

        {/* The Letter Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-(--bg) border-2 border-dashed border-(--accent-border) rounded-3xl p-6 sm:p-12 shadow-(--shadow) text-left relative mx-2 sm:mx-0 z-20"
        >
          {/* Greeting */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-header mb-6 tracking-tight text-center sm:text-left">
            {BRID_DATA.loveLetter.greeting}
          </h2>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 font-sans text-base leading-relaxed text-custom-80 text-justify">
            {BRID_DATA.loveLetter.paragraphs.map((para, idx) => (
              <p key={idx} className="indent-4">
                {para}
              </p>
            ))}
          </div>

          {/* Closing Sign-off */}
          <div className="mt-10 pt-6 border-t border-dashed border-(--border) text-right">
            <h4 className="font-heading font-bold text-lg text-(--accent) mt-1 tracking-wide">
              {BRID_DATA.loveLetter.closing}
            </h4>
          </div>
        </motion.div>

        {/* The "Catch Me" Yes/No Game Buttons */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[120px] w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {!isAccepted ? (
            <>
              {/* THE YES BUTTON (Gets bigger on every No click) */}
              <motion.button
                onClick={triggerConfetti}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-pointer group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-(--accent) text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow z-50 whitespace-nowrap"
                style={{ transformOrigin: "center" }}
              >
                <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
                <span>Yes</span>
              </motion.button>

              {/* THE NO BUTTON (Shrinks and jumps away, disappears at 5 clicks) */}
              {noCount < 5 && (
                <motion.button
                  onClick={handleNoClick}
                  animate={{
                    scale: noScale,
                    x: noPosition.x,
                    y: noPosition.y,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="cursor-pointer px-8 py-4 bg-(--code-bg) border border-(--border) text-custom-80 font-medium rounded-full shadow-sm hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/30 transition-colors z-40 whitespace-nowrap"
                >
                  {currentNoPhrase}
                </motion.button>
              )}
            </>
          ) : (
            /* Celebration Message when she clicks YES */
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-2xl sm:text-3xl font-heading font-bold text-(--accent) animate-bounce mt-4"
            >
              YAY! Best birthday gift ever. ❤️
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default LoveLetter;

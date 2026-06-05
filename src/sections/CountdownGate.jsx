import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, Key, ArrowLeft } from "lucide-react";

function CountdownGate({ onUnlock, onBack }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReady, setIsReady] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [shake, setShake] = useState(false); // Controls the error shake animation

  // Target: June 6, 2026 at 11:00 AM (Philippine Time / UTC+8)
  const targetDate = new Date("2026-06-06T11:00:00+08:00").getTime();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsReady(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Plays a soft click/error sound when she interacts with the locked button
  const playSound = () => {
    // Make sure you place a tiny click.mp3 or error.mp3 in your public/audio folder!
    const audio = new Audio("/audio/click.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => console.log("Audio play prevented by browser"));
  };

  // SECRET DEVELOPER BYPASS
  const handleSecretTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    if (newCount >= 5) {
      playSound();
      onUnlock();
    }
  };

  // When she clicks the locked button
  const handleLockedClick = () => {
    if (!isReady) {
      playSound();
      setShake(true);
      setTimeout(() => setShake(false), 400); // Stop shaking after 400ms
    } else {
      playSound();
      onUnlock();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-(--bg) relative py-20"
    >
      {/* NEW: Back Button */}
      <button
        onClick={() => {
          playSound();
          onBack();
        }}
        className="absolute top-8 left-6 sm:left-12 flex items-center gap-2 text-custom-80 hover:text-(--accent) transition-colors cursor-pointer group z-50"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Go Back</span>
      </button>

      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        {/* The Lock Icon (HIDDEN BYPASS TRIGGER) */}
        <motion.div
          onClick={handleSecretTap}
          className="w-24 h-24 mx-auto bg-(--code-bg) border border-(--border) rounded-full flex items-center justify-center mb-10 shadow-lg cursor-default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isReady ? (
            <Unlock className="w-10 h-10 text-green-400" />
          ) : (
            <Lock className="w-10 h-10 text-(--accent)" />
          )}
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-header mb-6 tracking-tight">
          Patience, my love. ✨
        </h2>

        <p className="text-custom-80 text-base sm:text-lg leading-relaxed mb-14 px-2">
          There is one final birthday surprise waiting for you. It's carefully
          sealed right now and will only reveal itself on
          <strong className="text-header font-medium block mt-2 text-lg">
            {" "}
            June 6 at 11:00 AM.
          </strong>
        </p>

        {/* The Countdown Digits - Increased Gap and Padding */}
        {!isReady && (
          <div className="grid grid-cols-4 gap-4 sm:gap-5 w-full mb-16">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-(--code-bg) border border-(--border) rounded-2xl py-6 shadow-md transition-all hover:border-(--accent-border)"
              >
                <span className="text-3xl sm:text-4xl font-mono font-bold text-(--accent) drop-shadow-sm">
                  {block.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-custom-80 mt-2 opacity-80">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* The Interactive Unlock Button - Shakes if locked! */}
        <motion.button
          onClick={handleLockedClick}
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          whileHover={isReady ? { scale: 1.05 } : {}}
          whileTap={isReady ? { scale: 0.95 } : {}}
          className={`flex items-center justify-center gap-3 px-12 py-5 rounded-full font-medium text-lg transition-all duration-300 w-full sm:w-auto ${
            isReady
              ? "bg-linear-to-r from-(--accent) to-pink-500 text-white shadow-[0_0_30px_rgba(170,59,255,0.4)] cursor-pointer animate-pulse"
              : "bg-(--code-bg) border border-(--border) text-custom-80 opacity-60 cursor-not-allowed hover:bg-rose-500/5 hover:text-rose-400 hover:border-rose-500/30"
          }`}
        >
          <Key className="w-5 h-5" />
          <span>{isReady ? "Unlock the Surprise" : "Sealed Until June 6"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default CountdownGate;

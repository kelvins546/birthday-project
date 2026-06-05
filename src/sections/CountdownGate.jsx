import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, Key } from "lucide-react";

function CountdownGate({ onUnlock }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReady, setIsReady] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  // Target: June 6, 2026 at 11:00 AM (Philippine Time / UTC+8)
  const targetDate = new Date("2026-06-06T11:00:00+08:00").getTime();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsReady(true);
        // The automatic redirect has been removed.
        // She must manually click the button below when ready!
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

  // SECRET DEVELOPER BYPASS: Tap the lock icon 5 times to force unlock and trigger music
  const handleSecretTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    if (newCount >= 5) {
      onUnlock();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-(--bg) relative"
    >
      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        {/* The Lock Icon (HIDDEN BYPASS TRIGGER) */}
        <motion.div
          onClick={handleSecretTap}
          className="w-20 h-20 mx-auto bg-(--code-bg) border border-(--border) rounded-full flex items-center justify-center mb-8 shadow-lg cursor-default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isReady ? (
            <Unlock className="w-8 h-8 text-green-400" />
          ) : (
            <Lock className="w-8 h-8 text-(--accent)" />
          )}
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-header mb-4 tracking-tight">
          Patience, my love. ✨
        </h2>

        {/* More mysterious text that doesn't mention the timeline or story */}
        <p className="text-custom-80 text-sm sm:text-base leading-relaxed mb-10">
          There is one final birthday surprise waiting for you. It's carefully
          sealed right now and will only reveal itself on
          <strong className="text-header font-medium">
            {" "}
            June 6 at 11:00 AM.
          </strong>
        </p>

        {/* The Countdown Digits - Only displays if NOT ready */}
        {!isReady && (
          <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-(--code-bg) border border-(--border) rounded-xl py-4 shadow-xs"
              >
                <span className="text-2xl sm:text-3xl font-mono font-bold text-(--accent)">
                  {block.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-mono text-custom-80 mt-1">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* The Interactive Unlock Button */}
        <motion.button
          disabled={!isReady}
          onClick={onUnlock}
          whileHover={isReady ? { scale: 1.05 } : {}}
          whileTap={isReady ? { scale: 0.95 } : {}}
          className={`flex items-center justify-center gap-3 px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 ${
            isReady
              ? "bg-linear-to-r from-(--accent) to-pink-500 text-white shadow-[0_0_30px_rgba(170,59,255,0.4)] cursor-pointer animate-pulse"
              : "bg-(--code-bg) border border-(--border) text-custom-80 opacity-50 cursor-not-allowed"
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

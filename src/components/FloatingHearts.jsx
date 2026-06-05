import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate 15 random hearts to float in the background
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      // Random starting horizontal position
      left: Math.random() * 100,
      // Random animation duration between 15 and 25 seconds (very slow and gentle)
      animationDuration: Math.random() * 10 + 15,
      // Random start delay so they don't all clump together
      delay: Math.random() * 10,
      // Random sizes
      size: Math.random() * 12 + 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0, x: `${heart.left}vw` }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.4, 0], // Fades in at the middle, fades out at the top
            x: [
              `${heart.left}vw`,
              `${heart.left + (Math.random() * 10 - 5)}vw`,
            ], // Gentle horizontal swaying
          }}
          transition={{
            duration: heart.animationDuration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-pink-300 dark:text-pink-900/40"
        >
          <Heart
            style={{ width: heart.size, height: heart.size }}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingHearts;

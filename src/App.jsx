import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./sections/Landing";
import BirthdayIntro from "./sections/BirthdayIntro";
import CountdownGate from "./sections/CountdownGate";
import Timeline from "./sections/Timeline";
import Gallery from "./sections/Gallery";
import Interactive from "./sections/Interactive";
import LoveLetter from "./sections/LoveLetter";
import AudioPlayer from "./components/AudioPlayer";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  const [view, setView] = useState("landing");
  const [musicStarted, setMusicStarted] = useState(false);

  // Triggered on the very first click on the homepage (Landing -> Intro)
  const handleInitialStart = () => {
    // Music is no longer started here. It waits for the gate!
    setView("intro");
  };

  // Triggered when she clicks "Unlock the Surprise" OR when you use the 5-tap bypass
  const handleGateUnlock = () => {
    setMusicStarted(true); // Fades in the Ben&Ben song!
    setView("main"); // Reveals the story timeline
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-(--bg) transition-colors duration-500 selection:bg-(--accent-bg) selection:text-(--accent) relative overflow-x-hidden">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.div
            key="landing"
            exit={{ opacity: 0 }}
            className="w-full relative z-10"
          >
            <Landing onStart={handleInitialStart} />
          </motion.div>
        )}

        {view === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full relative z-10"
          >
            <BirthdayIntro onNext={() => setView("gate")} />
          </motion.div>
        )}

        {view === "gate" && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full relative z-10"
          >
            <CountdownGate onUnlock={handleGateUnlock} />
          </motion.div>
        )}

        {view === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col relative z-10"
          >
            <header className="py-4 px-6 border-b border-(--border) sticky top-0 bg-(--bg)/80 backdrop-blur-md z-50 flex justify-between items-center shadow-(--shadow)">
              <span className="font-heading font-medium tracking-wide text-header flex items-center gap-1.5 text-sm">
                Our Memory Sandbox <span className="animate-pulse">✨</span>
              </span>
              <div className="text-xs font-mono text-(--accent) bg-(--accent-bg) px-2.5 py-1 rounded-sm border border-(--accent-border)">
                06.15.2026
              </div>
            </header>

            <main className="flex-1 w-full">
              <Timeline />
              <Gallery />
              <Interactive />
              <LoveLetter />
            </main>

            <footer className="py-10 text-center text-xs font-mono text-custom-80 border-t border-(--border) bg-(--bg)">
              <div>Made with love, completely from scratch. 🛠️</div>
              <div className="mt-1 opacity-60">
                Happy Birthday to the most brilliant human in my universe.
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND MUSIC PLAYER */}
      <AudioPlayer playTrigger={musicStarted} />
    </div>
  );
}

export default App;

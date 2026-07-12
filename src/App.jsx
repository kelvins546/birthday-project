import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./sections/Landing";
import BirthdayIntro from "./sections/BirthdayIntro";
import CountdownGate from "./sections/CountdownGate";
import Timeline from "./sections/Timeline";
import Gallery from "./sections/Gallery";
import Interactive from "./sections/Interactive";
import LoveLetter from "./sections/LoveLetter";
import KeychainLetter from "./sections/KeychainLetter";
import AudioPlayer from "./components/AudioPlayer";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  const [view, setView] = useState(() => {
    // This is now bulletproof. It will catch "/keychain", "/keychain/", or any QR code tracking tags!
    if (window.location.pathname.includes("keychain")) {
      return "keychain";
    }
    return "landing";
  });

  const [musicStarted, setMusicStarted] = useState(false);

  const handleInitialStart = () => {
    setView("intro");
  };

  const handleGateUnlock = () => {
    setMusicStarted(true);
    setView("main");
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
            <CountdownGate
              onUnlock={handleGateUnlock}
              onBack={() => setView("intro")}
            />
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
                06.06.2026
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

        {view === "keychain" && (
          <motion.div
            key="keychain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full flex flex-col relative z-10 min-h-screen"
          >
            {/* FIXED BACK BUTTON SPACING */}
            <div className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50">
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="flex items-center gap-2 text-sm font-mono text-custom-80 hover:text-(--accent) transition-colors bg-(--bg)/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-(--border) shadow-sm cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>

            <KeychainLetter onOpen={() => setMusicStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AudioPlayer playTrigger={musicStarted} />
    </div>
  );
}

export default App;

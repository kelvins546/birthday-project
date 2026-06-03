import React, { useState } from "react";
import Landing from "./sections/Landing";
import Timeline from "./sections/Timeline";

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-(--bg) transition-colors duration-500">
      {!hasStarted ? (
        /* Prelude Screen Entry */
        <Landing onStart={() => setHasStarted(true)} />
      ) : (
        /* The main story scrolling layout */
        <div className="w-full flex flex-col opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          {/* Persistent Romantic Global Header */}
          <header className="py-4 px-6 border-b border-(--border) sticky top-0 bg-(--bg)/80 backdrop-blur-md z-50 flex justify-between items-center shadow-(--shadow)">
            <span className="font-heading font-medium tracking-wide text-header flex items-center gap-1.5 text-sm">
              Our Memory Sandbox <span className="animate-pulse">✨</span>
            </span>
            <div className="text-xs font-mono text-(--accent) bg-(--accent-bg) px-2.5 py-1 rounded-sm border border-(--accent-border)">
              06.15.2026
            </div>
          </header>

          {/* Sequential Section Injections */}
          <main className="flex-1 w-full">
            <Timeline />

            {/* Future placeholders */}
            <div className="py-20 text-center text-sm font-mono tracking-wider opacity-30 border-b border-(--border)">
              Chapter II: Vault Grid Loading...
            </div>
          </main>

          <footer className="py-8 text-center text-xs font-mono text-custom/40 border-t border-(--border)">
            Built from scratch for you. Base v1.0.0 ❤️
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;

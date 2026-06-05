import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

function AudioPlayer({ playTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const maxVolume = 0.55;

  // FIX 1: Robust state syncing for when mobile browsers interrupt the audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false); // Catch when the track finishes or drops

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playTrigger]); // Re-bind if the component mounts

  // FIX 2: Cinematic Fade-In
  useEffect(() => {
    if (playTrigger && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0;

      const playPromise = audio.play();

      // Better error handling for strict mobile browsers
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            let currentVolume = 0;
            const fadeInterval = setInterval(() => {
              currentVolume += 0.01;
              if (currentVolume >= maxVolume) {
                clearInterval(fadeInterval);
                audio.volume = maxVolume;
              } else {
                audio.volume = Math.min(currentVolume, maxVolume);
              }
            }, 450);
          })
          .catch((err) => {
            console.log("Audio play blocked or interrupted by browser:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [playTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      // Forcefully request play again if interrupted
      audioRef.current.play().catch((err) => console.log("Play error:", err));
    } else {
      audioRef.current.pause();
    }
  };

  // FIX 3: Completely hide the player icon from the screen until the music is triggered
  if (!playTrigger) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      {/* preload="auto" helps the browser keep the file ready after interruptions */}
      <audio
        ref={audioRef}
        loop
        src="/audio/background-music.mp3"
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="group flex items-center justify-center w-12 h-12 bg-(--bg) border border-(--border) rounded-full shadow-lg hover:border-(--accent-border) transition-all duration-300 cursor-pointer"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-(--accent)" />
        ) : (
          <div className="relative">
            <Music className="w-5 h-5 text-custom-80 group-hover:text-(--accent) transition-colors" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-(--accent) rounded-full border-2 border-(--bg)"
            />
          </div>
        )}
      </button>
    </motion.div>
  );
}

export default AudioPlayer;

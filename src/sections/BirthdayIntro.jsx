import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

function BirthdayIntro({ onNext }) {
  const introStory = [
    {
      id: 1,
      image: "/images/her-1.jpg",
      text: "happy birthday to my favorite person. ngayong araw, gusto kong i celebrate yung isa sa pinakamagandang nangyari sa buhay ko, ikaw.",
    },
    {
      id: 2,
      image: "/images/her-2.jpg",
      text: "thank you for existing. sa bawat ngiti mo, sa bawat kwentuhan natin, you always make my days so much better. kahit sa mga simpleng araw lang, you make them feel extraordinary.",
    },
    {
      id: 3,
      image: "/images/her-3.jpg",
      text: "i built this space from scratch for u love. gusto kong may balikan ka na magpapaalala kung gaano ka ka special, not just today, but every single day.",
    },
    {
      id: 4,
      image: "/images/her-4.jpg",
      text: "so take your time, enjoy your special day, smile your beautiful smile, and whenever you're ready...",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-24 px-6 bg-(--bg) relative">
      {/* 
        FIXED WARNINGS: 
        w-[100vw] -> w-screen
        max-w-[800px] -> max-w-3xl 
        Added aspect-square instead of arbitrary heights
      */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen aspect-square max-w-3xl rounded-full bg-pink-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-2xl w-full z-10 flex flex-col items-center relative">
        {/* Header Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-32 mt-10"
        >
          <h2 className="text-sm font-mono text-(--accent) uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Happy Birthday{" "}
            <Sparkles className="w-4 h-4" />
          </h2>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-header leading-tight">
            To the girl who makes <br /> everything brighter
          </h1>
        </motion.div>

        {/* Vertical Story Flow - One by One */}
        <div className="flex flex-col gap-32 w-full mb-32">
          {introStory.map((item, index) => {
            const rotationClass = index % 2 === 0 ? "-rotate-2" : "rotate-2";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center w-full"
              >
                {/* 
                  FIXED WARNINGS: 
                  max-w-[300px] -> max-w-xs
                  sm:max-w-[380px] -> sm:max-w-sm
                  aspect-[4/5] -> aspect-4/5
                */}
                <div
                  className={`w-full max-w-xs sm:max-w-sm aspect-4/5 p-3 sm:p-4 bg-[#FFFDF9] dark:bg-[#1f2028] border border-(--border) rounded-2xl shadow-2xl mb-8 relative group transition-transform hover:rotate-0 duration-500 ${rotationClass}`}
                >
                  <div className="w-full h-full overflow-hidden rounded-xl relative border border-(--border)/50">
                    <img
                      src={item.image}
                      alt={`Memory ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60";
                      }}
                    />
                  </div>
                </div>

                {/* Letter Text */}
                <p className="text-base sm:text-lg text-custom-80 leading-relaxed max-w-md px-4 font-sans drop-shadow-xs">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final Transition Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-20"
        >
          <button
            onClick={onNext}
            className="cursor-pointer group flex items-center justify-center gap-3 px-10 py-5 bg-linear-to-r from-(--accent) to-[#c084fc] text-white font-medium text-lg rounded-full shadow-[0_0_30px_rgba(170,59,255,0.4)] hover:shadow-[0_0_50px_rgba(170,59,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Continue</span>
            <Heart className="w-5 h-5 fill-current animate-pulse" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BirthdayIntro;

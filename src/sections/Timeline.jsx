import React from "react";
import { motion } from "framer-motion";
import { BRID_DATA } from "../data/contentData";
import { Calendar } from "lucide-react";

function Timeline() {
  return (
    <section className="w-full py-20 px-4 bg-(--bg) border-b border-(--border)">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-(--accent) bg-(--accent-bg) px-3 py-1 rounded-full">
            Chapter I
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-header mt-3">
            The Pages of Us
          </h2>
          {/* FIXED: Changed h-[2px] to h-0.5 (native 2px) */}
          <div className="w-12 h-0.5 bg-(--accent) mx-auto mt-4 rounded-full opacity-60" />
        </div>

        {/* The Vertical Timeline Structure */}
        {/* The Vertical Timeline Structure - Fixed mobile margin (ml-6 instead of ml-4) */}
        <div className="relative border-l border-(--border) ml-6 sm:mx-auto sm:border-l-2 sm:dashed">
          {BRID_DATA.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            const dotPlacement = isEven
              ? "absolute left-0 -translate-x-1/2"
              : "absolute left-0 -translate-x-1/2 sm:left-full";

            return (
              <div
                key={index}
                className="relative mb-16 sm:mb-24 last:mb-0 sm:w-1/2 sm:ml-auto sm:odd:mr-auto sm:odd:ml-0 sm:odd:text-right"
              >
                {/* Glowing Node Point */}
                <div
                  className={`${dotPlacement} top-1.5 w-10 h-10 rounded-full bg-(--bg) border-2 border-(--accent) flex items-center justify-center z-10 shadow-xs`}
                >
                  <Calendar className="w-4 h-4 text-(--accent)" />
                </div>

                {/* Card Container - Adjusted left padding (pl-6) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="pl-6 sm:pl-0 sm:px-8"
                >
                  <div className="bg-(--bg) p-6 rounded-2xl border border-(--border) shadow-(--shadow) hover:border-(--accent-border) transition-colors duration-300">
                    <span className="inline-block text-xs font-mono font-semibold px-2.5 py-0.5 rounded-sm bg-(--code-bg) text-header mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-header mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-custom-80 mb-4">
                      {item.description}
                    </p>

                    {/* Image Container */}
                    {/* Image Container - FIXED CROPPING */}
                    {/* Removed fixed heights (h-48) and replaced with natural scaling */}
                    <div className="w-full rounded-xl bg-(--bg) border border-(--border) relative group overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        // w-full and h-auto allows the image to fit its natural shape without cutting off text!
                        className="w-full h-auto max-h-72 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=60";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;

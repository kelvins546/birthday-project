import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRID_DATA } from "../data/contentData";
import { Camera, X, Heart } from "lucide-react";

function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  // Extract all unique categories dynamically from your contentData file
  const categories = [
    "All",
    ...new Set(BRID_DATA.gallery.map((item) => item.category)),
  ];

  // Filter images based on selected category tab
  const filteredImages =
    activeTab === "All"
      ? BRID_DATA.gallery
      : BRID_DATA.gallery.filter((img) => img.category === activeTab);

  return (
    <section className="w-full py-20 px-4 bg-(--bg) border-b border-(--border)">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-(--accent) bg-(--accent-bg) px-3 py-1 rounded-full">
            Chapter II
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-header mt-3">
            The Memory Vault
          </h2>
          <div className="w-12 h-0.5 bg-(--accent) mx-auto mt-4 rounded-full opacity-60" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-(--accent) text-white shadow-(--shadow)"
                  : "bg-(--code-bg) text-custom-80 hover:bg-(--accent-bg) hover:text-(--accent)"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Photos Grid Stream */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImg(img)}
                className="cursor-pointer group relative aspect-square overflow-hidden rounded-2xl bg-(--code-bg) border border-(--border) shadow-(--shadow)"
              >
                {/* Image asset */}
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    // Beautiful placeholder falls back safely if image routes are empty
                    e.target.src = `https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=60`;
                  }}
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 text-xs text-pink-200 mb-1 font-mono">
                      <Camera className="w-3.5 h-3.5" />
                      {img.category}
                    </div>
                    <p className="text-sm font-sans font-medium line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Pop-up Viewer Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-100 flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors cursor-pointer"
                onClick={() => setSelectedImg(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Centered Modal Photo Frame */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-3xl max-h-(80vh) rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking the image itself
              >
                <img
                  src={selectedImg.src}
                  alt={selectedImg.caption}
                  className="max-w-full max-h-(80vh) object-contain"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60`;
                  }}
                />
              </motion.div>

              {/* Caption Overlay beneath image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mt-4 max-w-xl px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-white font-medium text-base sm:text-lg">
                  {selectedImg.caption}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs font-mono text-pink-300 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                  <Heart className="w-3 h-3 fill-current" />{" "}
                  {selectedImg.category}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;

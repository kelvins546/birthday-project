import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Key, Sparkles, MailOpen } from "lucide-react";

function KeychainLetter({ onOpen }) {
  const [isRevealed, setIsRevealed] = useState(false);

  // Refined, more emotional Taglish message
  const paragraphs = [
    "i wanted to give you something you can keep with you wherever you go. this keychain carries some of my absolute favorite memories of us. every little detail in it reminds me of the times when everything felt just right. sana kapag tinitignan mo 'to, maalala mo na sa kabila ng lahat ng sakit, we shared something genuinely beautiful. hindi ko makakalimutan yung mga araw na iyon, and i hold on to them whenever things get heavy. at sana... hindi pa 'yun ang huling mga alaalang mabubuo natin. ang dami ko pang gustong maranasan at patunayan kasama ka.",
    "i know that healing takes time, and i am willing to give you all the space and time you need. hindi ko alam kung ano ang mangyayari sa mga susunod na araw. naiintindihan ko na hindi madaling ayusin yung mga nasira, kaya hindi ko rin hihilingin na maging okay agad ang lahat. i just want a chance to show you that i am truly trying. ang tanging hiling ko lang ngayon ay makita mo yung sincerity ko na bumawi at magbago. i am learning from my mistakes because losing you is my biggest fear. gusto kong patunayan sa gawa na kaya kitang mahalin nang mas tama. i want to be the peace, the comfort, and the home that you need, the way you truly deserve.",
    "you are the most precious person in my life, and i will never stop fighting for us. kasama ng keychain na ito, i am also giving you a promise ring. let this ring be a physical reminder of my unending commitment to you. it's my promise to protect your heart, to be better for you, and to never let go no matter how hard things get. mahal na mahal kita. whatever happens, my feelings for you will remain, and i would choose u every single day. loving someone isn't always perfect, but i am ready to face all the difficult parts as long as i'm facing them with you. hindi dahil madali, kundi dahil ikaw lang yung taong gusto kong piliin, piliit nang paulit ulit.",
  ];

  const handleReveal = () => {
    setIsRevealed(true);
    if (onOpen) onOpen(); // This triggers the music from App.jsx!
  };

  return (
    <section className="w-full py-24 px-4 bg-(--bg) relative overflow-hidden flex flex-col items-center min-h-screen justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-(--accent-bg) rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          /* STEP 1: THE UNLOCK SCREEN (Required to start music) */
          <motion.div
            key="sealed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-24 h-24 mb-8 bg-(--code-bg) border border-(--border) rounded-full flex items-center justify-center shadow-xl relative"
            >
              <Key className="w-10 h-10 text-(--accent)" />
              <Sparkles className="w-5 h-5 text-pink-400 absolute -top-2 -right-2 animate-pulse" />
            </motion.div>

            <h2 className="text-3xl font-heading font-bold text-header mb-4 tracking-tight">
              A gift for you.
            </h2>

            {/* Changed mb-10 to mb-16 to create a much bigger gap here */}
            <p className="text-custom-80 mb-16 text-lg max-w-sm px-4">
              I attached a little something to your keychain.
            </p>

            <button
              onClick={handleReveal}
              className="cursor-pointer group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-(--accent) to-pink-500 text-white font-medium text-lg rounded-full shadow-[0_0_30px_rgba(170,59,255,0.4)] hover:shadow-[0_0_50px_rgba(170,59,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MailOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Read the Letter</span>
            </button>
          </motion.div>
        ) : (
          /* STEP 2: THE REVEALED LETTER */
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center relative z-10 w-full"
          >
            {/* Changed to a div and added mb-8 to force a big space below it */}
            <div className="inline-flex items-center justify-center leading-none text-xs uppercase tracking-[0.25em] font-mono text-(--accent) bg-(--accent-bg) px-6 py-3 rounded-full border border-(--accent-border) mb-8">
              A Little Reminder
            </div>

            {/* Removed the mt-6 since the pill now pushes it down, kept mb-12 to push the letter box down */}
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-header mb-12 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
              The Keychain
            </h2>

            <div className="bg-(--bg)/60 backdrop-blur-xl border border-(--border) rounded-3xl p-8 sm:p-12 shadow-2xl text-left relative mx-2 sm:mx-0 group hover:border-(--accent-border)/50 transition-colors duration-500">
              {/* Staggered Paragraph Content */}
              <div className="space-y-6 font-sans text-base sm:text-lg leading-relaxed text-custom-80 text-justify">
                {paragraphs.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.2, duration: 0.8 }}
                    className="indent-6"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Highlighted Monthsary Greeting */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="mt-10 bg-linear-to-r from-(--accent-bg) to-pink-500/5 p-6 rounded-2xl border border-(--accent-border) text-center shadow-sm"
              >
                <p className="font-heading font-semibold text-lg sm:text-xl text-(--accent) tracking-wide">
                  happy belated first monthsary, love. ✨
                </p>
              </motion.div>

              {/* Closing & Sign-off */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="mt-10 pt-8 border-t border-dashed border-(--border) flex flex-col items-center sm:items-end text-center sm:text-right"
              >
                <p className="text-custom-80 text-sm sm:text-base mb-6 max-w-md italic opacity-80">
                  "salamat sa lahat ng masasayang alaala. sana hindi pa ito ang
                  huling monthsary na ipagdiriwang natin."
                </p>
                <h3 className="font-heading font-bold text-header text-lg">
                  i love you. always.
                </h3>
                <p className="font-heading text-custom-80 text-base mt-1 mb-4">
                  forever yours,
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-10 h-10 bg-(--code-bg) rounded-full flex items-center justify-center border border-(--border)"
                >
                  <Heart className="w-5 h-5 text-(--accent) fill-(--accent)" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default KeychainLetter;

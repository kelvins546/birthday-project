import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Mail,
  MailOpen,
  Heart,
  RefreshCcw,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function Interactive() {
  // --- STATE FOR "REASONS WHY" GENERATOR ---
  const [reasonIndex, setReasonIndex] = useState(0);
  const reasons = [
    "The way your mind works. I love how brilliant you are, even on the days you doubt yourself.",
    "The absolute peace I feel when I'm with you. You make the loudest, most stressful days go quiet.",
    "You never have to pretend with me. I love every version of you, especially when you feel like you aren't at your best.",
    "How incredibly driven and capable you are. I am always silently cheering you on and so proud of you.",
    "Our conversations. I can talk to you about absolutely nothing or everything, and it always feels like home.",
    "The effortless way you make me smile, even when I'm completely exhausted.",
    "Your endless patience and understanding. You always know exactly how to comfort me without even trying.",
    "The fact that you are more than enough, exactly as you are. You never have to prove anything to me.",
    "How safe I feel opening up to you. You are the easiest person to talk to in the entire world.",
    "Just the simple fact that out of everyone I could have met, I got lucky enough to find you. ✨",
  ];

  const nextReason = () => {
    setReasonIndex((prev) => (prev + 1) % reasons.length);
  };

  // --- STATE FOR TAGLISH QUIZ ---
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState("playing"); // 'playing', 'feedback', 'finished'
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);

  const quizData = [
    {
      question: "Saan tayo unang nag-date?",
      options: [
        "The cozy corner cafe",
        "The downtown park",
        "Sa fast food spot",
        "The arcade",
      ],
      correct: 0,
      correctMsg:
        "Syempre naman! Alam kong di mo makakalimutan yan hahaha. Kabado pa 'ko nun!",
      wrongMsg:
        "Hala siya, paano mo nakalimutan?! Minus points ka sa akin hahaha jk. Sa cafe tayo nun!",
    },
    {
      question: "Sino mas mabilis makatulog pag nanonood ng movie?",
      options: [
        "Ako, lagi",
        "Ikaw, walang palya",
        "Sabay tayo nakakatulog",
        "Kahit sino, basta horror",
      ],
      correct: 1,
      correctMsg:
        "Ayan, inamin din! Lalo na pag horror, tulog ka agad eh hahaha.",
      wrongMsg: "Weh? Sure ka ba? Ikaw kaya laging unang nakakatulog hahaha!",
    },
    {
      question: "Ano yung unang message ko sayo na nag-start ng lahat?",
      options: [
        "'Hello po'",
        "'Ganda mo po so much hihi'",
        "'Kumain ka na?'",
        "Nag-send ng meme",
      ],
      correct: 1,
      correctMsg: "Best 'hihi' I ever sent. Best risk I ever took. ❤️",
      wrongMsg:
        "Hala, nakalimutan yung iconic moment ko! 'Ganda mo po so much hihi' kaya yun!",
    },
  ];

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === quizData[currentQ].correct;
    setLastAnswerCorrect(isCorrect);
    if (isCorrect) setScore(score + 1);
    setQuizState("feedback");
  };

  const nextQuestion = () => {
    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1);
      setQuizState("playing");
    } else {
      setQuizState("finished");
    }
  };

  // --- STATE FOR OPEN WHEN LETTERS (Expanded to 9 Cards) ---
  const [openedLetters, setOpenedLetters] = useState([]);

  const letters = [
    {
      id: 1,
      title: "When You Miss Me",
      content:
        "kung namimiss mo ko love, gusto kong tandaan mo na hindi nasusukat ng distansya o oras kung gaano kita kamahal. Kahit gaano ako kabusy, ikaw pa rin yung gusto kong balikan sa dulo ng araw. chat me, call me, or kahit basahin mo lang ito love. i just wanna remind u that i'm always here, and i promise na hindi ka kailanman magiging magisa habang nandito ako.",
    },
    {
      id: 2,
      title: "When You're Having a Bad Day",
      content:
        "hi lovee, pahinga muna. alam kong minsan parang ang bigat bigat ng lahat, pero please don't be too hard on yourself. hindi mo kailangan maging strong palagi. Ppwede kang mapagod, umiyak, o magpahinga. and kapag feeling mo wala kang kakampi, tandaan mo na meron kang ako. i'll always be on your side, palagi.",
    },

    {
      id: 4,
      title: "When You Can't Sleep",
      content:
        "nag ooverthink ba ikaw? alam mo love, hindi mo kailangang dalhin lahat ng problema ng mag isa. kung nandyan lang sana ako, yayakapin lang kita hanggang makatulog ka. Ppero for now, isipin mo na lang na may isang taong mahal na mahal ka at naniniwalang magiging okay din ang lahat. close your eyes, breathe, and rest. because tomorrow is another chance.",
    },
    {
      id: 5,
      title: "When You Feel Like You're Not Enough",
      content:
        "please, don't ever believe that. alam kong minsan kinukwestyon mo sarili mo, pero kung makikita mo lang yung nakikita ko sayo, maiiyak ka sa sobrang ganda mo bilang tao. hindi mo kailangang maging perfect para mahalin. hindi mo kailangang patunayan yung worth mo. enough ka. more than enough, actually. and i hope one day makita mo rin yung nakikita ko. iloveyou",
    },
    {
      id: 6,
      title: "When You're Mad at Me",
      content:
        "for sure may nagawa na naman akong katangahan love. sorry na agadddd. hindi man laging tama yung mga nagagawa ko, isang bagay ang sigurado, hindi kita gustong saktan. sana pag usapan natin nang maayos at malinaw. Kasi hindi ko kayang matulog na alam kong may tampo ka sakin.",
    },
    {
      id: 7,
      title: "When You're Feeling Stressed",
      content:
        "i know you're trying your best, and sobrang proud ako sayo. pero wag mong kalimutan na tao ka lang din at hindi mo kailangang pasanin lahat, love. hindi ka failure dahil napagod ka. you're simply human. and whatever happens, i'll still be proud of you.",
    },

    {
      id: 9,
      title: "When You're Happy",
      content:
        "kung ano man yung dahilan ng smile mo ngayon, sana hindi yan mawala. gustong gusto kong nakikita kang masaya. and kahit maliit lang na achievement yan o malaking panalo sa buhay, proud na proud ako sayo. i hope life gives you more reasons to smile, and i hope i can be one of them.",
    },
  ];

  const toggleLetter = (id) => {
    if (openedLetters.includes(id)) {
      setOpenedLetters(openedLetters.filter((l) => l !== id));
    } else {
      setOpenedLetters([...openedLetters, id]);
    }
  };

  return (
    <section className="w-full py-24 px-6 bg-(--bg) border-b border-(--border)">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        {/* SECTION 1: REASONS WHY GENERATOR */}
        <div className="text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-mono text-(--accent) bg-(--accent-bg) px-3 py-1 rounded-full mb-4">
            Just A Reminder
          </span>
          <h2 className="text-3xl font-heading font-bold text-header mb-8">
            Why is it always you?
          </h2>

          <motion.div
            key={reasonIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-24 flex items-center justify-center px-4 max-w-2xl"
          >
            <p className="text-xl sm:text-2xl font-sans text-(--accent) font-medium italic text-center drop-shadow-sm">
              "{reasons[reasonIndex]}"
            </p>
          </motion.div>

          <button
            onClick={nextReason}
            className="mt-6 flex items-center gap-2 px-6 py-3 bg-(--code-bg) border border-(--border) rounded-full hover:border-(--accent) transition-colors text-custom-80 hover:text-(--accent) cursor-pointer group"
          >
            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-medium">Isa pa!</span>
          </button>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-(--border) to-transparent" />

        {/* SECTION 2: THE CONVERSATIONAL QUIZ */}
        <div className="max-w-3xl mx-auto w-full bg-(--code-bg) border border-(--border) rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Sparkles className="w-24 h-24 text-(--accent)" />
          </div>

          <h2 className="text-2xl font-heading font-bold text-header mb-2 relative z-10">
            How Well Do You Know Us? 🧠
          </h2>
          <p className="text-custom-80 mb-8 relative z-10">
            Tignan natin kung gaano mo natatandaan yung mga details natin. No
            cheating!
          </p>

          <AnimatePresence mode="wait">
            {quizState === "playing" && (
              <motion.div
                key="playing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="font-medium text-lg text-header mb-4">
                  {currentQ + 1}. {quizData[currentQ].question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizData[currentQ].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="text-left px-5 py-4 rounded-xl border border-(--border) bg-(--bg) hover:border-(--accent) hover:bg-(--accent-bg) transition-all cursor-pointer text-custom-80 font-medium"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {quizState === "feedback" && (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6"
              >
                {lastAnswerCorrect ? (
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                ) : (
                  <XCircle className="w-16 h-16 text-rose-500 mb-4" />
                )}
                <p className="text-xl font-medium text-header mb-6">
                  {lastAnswerCorrect
                    ? quizData[currentQ].correctMsg
                    : quizData[currentQ].wrongMsg}
                </p>
                <button
                  onClick={nextQuestion}
                  className="px-8 py-3 bg-(--accent) text-white rounded-full font-medium hover:scale-105 transition-transform cursor-pointer"
                >
                  Next Question
                </button>
              </motion.div>
            )}

            {quizState === "finished" && (
              <motion.div
                key="finished"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <h3 className="text-3xl font-heading font-bold text-(--accent) mb-4">
                  Score mo: {score} / {quizData.length}
                </h3>
                {score === quizData.length ? (
                  <div className="bg-(--accent-bg) p-6 rounded-2xl border border-(--accent-border) mt-4">
                    <p className="font-bold text-header mb-2">
                      🎉 Perfect Score Reward Unlocked! 🎉
                    </p>
                    <p className="text-custom-80 text-sm">
                      Kabisado mo talaga tayo ha! Dahil dyan, promise ko lilibre
                      kita ng paborito mong pagkain sa next date natin.
                      Screenshot mo 'to as proof!
                    </p>
                  </div>
                ) : (
                  <p className="text-custom-80">
                    Okay lang yan, bawi ka next time! At least alam kong love mo
                    pa rin ako hahaha.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-(--border) to-transparent" />

        {/* SECTION 3: OPEN WHEN LETTERS (3x3 Grid) */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-header mb-3">
              Open When... 💌
            </h2>
            <p className="text-custom-80">
              Promise mo muna na bubuksan mo lang 'to pag kailangan mo talaga?{" "}
              <br className="hidden sm:block" /> (I mean, pwede mo rin dayain,
              pero promise muna!)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {letters.map((letter) => {
              const isOpen = openedLetters.includes(letter.id);

              return (
                <div
                  key={letter.id}
                  className="relative perspective-1000 h-full"
                >
                  <motion.div
                    onClick={() => toggleLetter(letter.id)}
                    className={`cursor-pointer w-full p-6 rounded-2xl border transition-all duration-500 h-full min-h-[180px] flex flex-col items-center justify-center text-center ${
                      isOpen
                        ? "bg-(--bg) border-(--accent) shadow-md"
                        : "bg-(--code-bg) border-(--border) hover:border-(--accent-border) hover:shadow-lg"
                    }`}
                  >
                    {!isOpen ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <Mail className="w-10 h-10 text-(--accent) mb-4 opacity-80" />
                        <h3 className="font-medium text-header">
                          {letter.title}
                        </h3>
                        <span className="text-xs text-custom-80 mt-4 uppercase tracking-widest font-mono">
                          Tap to Open
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center h-full justify-center"
                      >
                        <MailOpen className="w-6 h-6 text-pink-400 mb-3" />
                        <h3 className="font-medium text-header text-sm mb-3 border-b border-(--border) pb-2 w-full">
                          {letter.title}
                        </h3>
                        <p className="text-custom-80 text-sm leading-relaxed italic">
                          "{letter.content}"
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interactive;

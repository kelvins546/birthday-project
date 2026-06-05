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
        "The giligans",
      ],
      correct: 3,
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

  // --- STATE FOR OPEN WHEN LETTERS ---
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

  // Calculate progress bar percentage
  const progressPercentage =
    ((currentQ + (quizState === "feedback" ? 1 : 0)) / quizData.length) * 100;

  return (
    <section className="w-full py-32 px-6 bg-(--bg) border-b border-(--border)">
      <div className="max-w-4xl mx-auto flex flex-col gap-32">
        {/* SECTION 1: REASONS WHY GENERATOR */}
        <div className="text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-mono text-(--accent) bg-(--accent-bg) px-4 py-1.5 rounded-full mb-6">
            Just A Reminder
          </span>
          <h2 className="text-4xl font-heading font-bold text-header mb-10 tracking-tight">
            Why is it always you?
          </h2>

          <motion.div
            key={reasonIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="min-h-[120px] flex items-center justify-center px-4 max-w-2xl"
          >
            <p className="text-xl sm:text-2xl font-sans text-custom-80 font-medium italic text-center leading-relaxed">
              "{reasons[reasonIndex]}"
            </p>
          </motion.div>

          <button
            onClick={nextReason}
            className="mt-8 flex items-center gap-3 px-8 py-4 bg-(--code-bg) border border-(--border) rounded-full hover:border-(--accent) hover:shadow-md transition-all duration-300 text-custom-80 hover:text-(--accent) cursor-pointer group"
          >
            <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-medium text-lg">Tell me another</span>
          </button>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-(--border) to-transparent" />

        {/* SECTION 2: THE CONVERSATIONAL QUIZ */}
        <div className="max-w-3xl mx-auto w-full bg-(--code-bg) border border-(--border) rounded-[2rem] p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col min-h-[450px]">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Sparkles className="w-32 h-32 text-(--accent)" />
          </div>

          <div className="relative z-10 mb-10 text-center">
            <h2 className="text-3xl font-heading font-bold text-header mb-4">
              How Well Do You Know Us?
            </h2>
            <p className="text-custom-80 text-lg">
              Tignan natin kung gaano mo natatandaan yung mga details natin. No
              cheating!
            </p>
          </div>

          {/* Progress Bar Container */}
          {quizState !== "finished" && (
            <div className="w-full h-2 bg-(--bg) rounded-full mb-10 overflow-hidden border border-(--border)">
              <motion.div
                className="h-full bg-linear-to-r from-(--accent) to-[#c084fc]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}

          <div className="flex-1 flex flex-col justify-center relative z-10">
            <AnimatePresence mode="wait">
              {quizState === "playing" && (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <p className="font-medium text-xl text-header mb-8 text-center px-4">
                    <span className="text-(--accent) mr-2">
                      Q{currentQ + 1}.
                    </span>
                    {quizData[currentQ].question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quizData[currentQ].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="text-left px-6 py-5 rounded-2xl border border-(--border) bg-(--bg) hover:border-(--accent) hover:bg-(--accent-bg) hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-custom-80 font-medium text-lg shadow-sm"
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  {lastAnswerCorrect ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <CheckCircle2 className="w-24 h-24 text-green-500 mb-8 drop-shadow-md" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <XCircle className="w-24 h-24 text-rose-500 mb-8 drop-shadow-md" />
                    </motion.div>
                  )}

                  <p className="text-2xl font-medium text-header mb-12 leading-relaxed px-4 max-w-xl">
                    {lastAnswerCorrect
                      ? quizData[currentQ].correctMsg
                      : quizData[currentQ].wrongMsg}
                  </p>

                  <button
                    onClick={nextQuestion}
                    className="px-10 py-4 bg-linear-to-r from-(--accent) to-[#c084fc] text-white rounded-full font-medium text-lg hover:shadow-[0_0_20px_rgba(170,59,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                  className="text-center py-8"
                >
                  <h3 className="text-4xl font-heading font-bold text-header mb-6">
                    Quiz Complete!
                  </h3>
                  <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-(--bg) border border-(--border) rounded-full mb-8">
                    <span className="text-custom-80 text-lg">Final Score:</span>
                    <span className="text-2xl font-bold text-(--accent)">
                      {score} / {quizData.length}
                    </span>
                  </div>

                  {score === quizData.length ? (
                    <div className="bg-(--accent-bg) p-8 rounded-3xl border border-(--accent-border) max-w-lg mx-auto shadow-sm">
                      <p className="font-bold text-2xl text-header mb-4 flex items-center justify-center gap-2">
                        🎉 Perfect Score! 🎉
                      </p>
                      <p className="text-custom-80 text-base leading-relaxed">
                        Kabisado mo talaga tayo ha! Dahil dyan, promise ko
                        lilibre kita ng paborito mong pagkain sa next date
                        natin. Screenshot mo 'to as proof!
                      </p>
                    </div>
                  ) : (
                    <p className="text-custom-80 text-lg max-w-md mx-auto">
                      Okay lang yan, bawi ka next time! At least alam kong love
                      mo pa rin ako hahaha.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-(--border) to-transparent" />

        {/* SECTION 3: OPEN WHEN LETTERS */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-header mb-4">
              Open When... 💌
            </h2>
            <p className="text-custom-80 text-lg max-w-xl mx-auto">
              Promise mo muna na bubuksan mo lang 'to pag kailangan mo talaga
              ha. (I mean, pwede mo rin dayain, pero promise muna!)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {letters.map((letter) => {
              const isOpen = openedLetters.includes(letter.id);

              return (
                <div
                  key={letter.id}
                  className="relative perspective-1000 h-full"
                >
                  <motion.div
                    onClick={() => toggleLetter(letter.id)}
                    className={`cursor-pointer w-full p-8 rounded-3xl border transition-all duration-500 h-full min-h-[220px] flex flex-col items-center justify-center text-center ${
                      isOpen
                        ? "bg-(--bg) border-(--accent) shadow-lg"
                        : "bg-(--code-bg) border-(--border) hover:border-(--accent-border) hover:shadow-xl hover:-translate-y-1"
                    }`}
                  >
                    {!isOpen ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center w-full"
                      >
                        <Mail className="w-12 h-12 text-(--accent) mb-6 opacity-80" />
                        <h3 className="font-medium text-lg text-header px-2">
                          {letter.title}
                        </h3>
                        <span className="text-xs text-custom-80 mt-6 uppercase tracking-widest font-mono bg-(--bg) px-3 py-1 rounded-full border border-(--border)">
                          Tap to Open
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center h-full justify-start w-full"
                      >
                        <MailOpen className="w-8 h-8 text-pink-400 mb-4 shrink-0" />
                        <h3 className="font-semibold text-header text-base mb-4 border-b border-(--border) pb-3 w-full shrink-0">
                          {letter.title}
                        </h3>
                        <div className="overflow-y-auto max-h-[200px] w-full px-1 custom-scrollbar">
                          <p className="text-custom-80 text-sm leading-loose italic text-justify">
                            "{letter.content}"
                          </p>
                        </div>
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

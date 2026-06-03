export const BRID_DATA = {
  // Personal Details
  herName: "My Love", // Put her name here!
  birthdayDate: "2026-06-15", // Used for a countdown if you want one

  // Chapter 1: The Relationship Timeline
  timeline: [
    {
      date: "October 12, 2024",
      title: "The First Hello",
      description:
        "When our paths crossed for the very first time. I didn't know it yet, but my life was about to change completely.",
      image: "/images/first-meet.jpg", // Place actual images in public/images/
    },
    {
      date: "December 25, 2024",
      title: "First Date Magic",
      description:
        "Spilling coffee, nervous laughs, and realizing that hours felt like minutes when I was with you.",
      image: "/images/first-date.jpg",
    },
    {
      date: "April 14, 2025",
      title: "Making it Official",
      description:
        "The moment you made me the happiest person alive by agreeing to walk this journey by my side.",
      image: "/images/official.jpg",
    },
  ],

  // Chapter 2: The Photo Gallery Categorized
  gallery: [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      category: "Adventures",
      caption: "Chasing sunsets with you.",
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      category: "Date Nights",
      caption: "Dressed up but only looking at you.",
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      category: "Silly Moments",
      caption: "Your laugh is my absolute favorite sound.",
    },
    {
      id: 4,
      src: "/images/gallery-4.jpg",
      category: "Adventures",
      caption: "Every road trip is better in the passenger seat next to you.",
    },
  ],

  // Chapter 3: The Relationship Quiz
  quiz: [
    {
      question: "Where did we have our absolute first date?",
      options: [
        "The cozy corner cafe",
        "The downtown park",
        "The fast food spot down the street",
        "The arcade",
      ],
      correctAnswer: 0,
      insideJoke: "Remember how nervous I was? I almost dropped my mug!",
    },
    {
      question: "Who is more likely to fall asleep 5 minutes into a movie?",
      options: [
        "Me",
        "You, without fail",
        "Both of us simultaneously",
        "Neither, we stay locked in",
      ],
      correctAnswer: 1,
      insideJoke: "Every single time we put on a horror film...",
    },
  ],

  // Chapter 4: Digital "Open When" Letters
  openWhenLetters: [
    {
      title: "When you miss me",
      emoji: "❤️",
      message:
        "Just close your eyes and remember I'm only a text or a heartbeat away. No matter the distance or how busy the day gets, you're always the main thought running through my head.",
    },
    {
      title: "When you have a bad day",
      emoji: "☕",
      message:
        "Take a deep breath. You are incredibly strong, resilient, and brilliant. Go grab a sweet treat, put your favorite show on, and remember that I am always on your team to hold you up.",
    },
    {
      title: "When you need a laugh",
      emoji: "🤡",
      message:
        "Remember that time we tried to take a serious photo and a bird completely ruined the shot? Yeah, I'm always ready to act completely ridiculous just to see you smile.",
    },
  ],

  // Final Chapter: The Main Birthday Message & Promises
  loveLetter: {
    greeting: "Happy Birthday, Beautiful.",
    paragraphs: [
      "Today is entirely about celebrating the incredible human being you are. You bring an unmatched warmth into my world, turning ordinary moments into core memories.",
      "Thank you for your infinite patience, your brilliant mind, and the simple beauty of your smile. Growing alongside you has been the greatest highlight of my life.",
      "On your special day, I promise to always stand by your side, listen when things get heavy, and celebrate every win with you—no matter how small.",
    ],
    closing: "Forever & Always, Yours.",
  },
};

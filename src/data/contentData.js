export const BRID_DATA = {
  // Personal Details
  herName: "My Love", // Put her name here!
  birthdayDate: "2026-06-06", // Used for a countdown if you want one

  // Chapter 1: The Relationship Timeline
  timeline: [
    {
      date: "March 31, 2022",
      title: "Where It All Began",
      description:
        "looking back at this 9:40 PM message... wala akong idea na isang simpleng 'hihi' lang would lead to the best thing that ever happened to me. best decision ever.",
      image: "/images/first-meet.jpg", // Place actual images in public/images/
    },
    {
      date: "April 3, 2022",
      title: "Our First Picture Together",
      description:
        "our very first pic sa kapilya! kahit nakamask tayo at kalahati lang ng mukha natin ang kita, i still remember how incredibly happy i was na makasama ka that day",
      image: "/images/first-date.jpg",
    },
    {
      date: "May 9, 2026", // Adjust this date!
      title: "Nature Trips & Deep Talks",
      description:
        "after four years, ito yung unang pagkakataon na nag usap at nagkasama tayo ulit. hindi ko alam kung bakit, pero parang walang nag bago. kahit simpleng pagkain lang at kwentuhan, pakiramdam ko kompleto na yung araw ko. looking back, i realized it wasn't the place or what we did that made it special, it was simply because i was with you.",
      image: "/images/first-gala.jpg", // Add this image to public/images/
    },
    {
      date: "May 25, 2026", // Adjust this date!
      title: "Late Night Rides",
      description:
        "napapangiti na lang ako kasi kahit may tampuhan at pagod, ang ending, gusto pa rin nating ayusin at umuwi nang magkasama. isa 'yon sa mga gabing pinatunayan sakin na kahit hindi tayo perfect, ikaw pa rin yung gusto kong makasama.",
      image: "/images/late-night.jpg", // Add this image to public/images/
    },
    {
      date: "May 16, 2026", // Adjust this date!
      title: "Simple Moments",
      description:
        "kahit walang special occasion, just spending a normal day with you is already a core memory for me. i love how comfortable and safe everything feels pag andyan ka.",
      image: "/images/simple-moments.jpg", // Add this image to public/images/
    },
    {
      date: "May 30, 2026", // Adjust this date!
      title: "My Favorite Rest",
      description:
        "through all the stress sa work and life, ikaw yung naging pahinga ko. just seeing your messages or talking to you makes all the heavy days feel so much lighter.",
      image: "/images/my-peace.jpg", // Add this image to public/images/
    },

    {
      date: "june 1, 2026", // Adjust this date!
      title: "Always Choosing You",
      description:
        "looking back sa dami ng napag-usapan at pinagdaanan natin from 2022 until now, mas lalo lang lumalim yung pagtingin ko sayo. every single day, i'm just so glad you are in my life.",
      image: "/images/always-you.jpg", // Add this image to public/images/
    },
    {
      date: "Someday... ⏳",
      title: "To Be Unlocked 🔒",
      description:
        "wala pa man tayong label ngayon, i want you to know na i'm always willing to wait. no pressure at all. i'm just really looking forward to the day na ma-unlock natin 'tong next chapter together. 💛",
      image:
        "https://images.unsplash.com/photo-1614031679227-0136ea5eb2b9?w=600&auto=format&fit=crop&q=60",
    },
  ],

  // Chapter 2: The Photo Gallery Categorized
  // Chapter 2: The Photo Gallery Categorized
  gallery: [
    {
      id: 1,
      src: "/images/jollibee.jpg", // Replace with your actual image filename
      category: "Food Trips",
      caption: "ang paborito nating go-to!",
    },
    {
      id: 2,
      src: "/images/mixue.jpg", // Replace with your actual image filename
      category: "Food Trips",
      caption: "sweet cravings satisfied",
    },
    {
      id: 3,
      src: "/images/inasal.jpg", // Replace with your actual image filename
      category: "Food Trips",
      caption: "inasal dates",
    },
    {
      id: 4,
      src: "/images/angels-burger.jpg", // Replace with your actual image filename
      category: "Food Trips",
      caption: "late-night cravings!",
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
        "Remember that time we tried to take a serious photo and a bird cofletely ruined the shot? Yeah, I'm always ready to act completely ridiculous just to see you smile.",
    },
  ],

  // Final Chapter: The Main Birthday Message & Promises
  // Final Chapter: The Main Birthday Message & The Big Question
  loveLetter: {
    greeting: "Happy Birthday, Beautiful.",
    paragraphs: [
      "Today is all about celebrating you. Ever since you came into my life, everything just got brighter. Yung mga simpleng araw, nagiging special core memories just because you're there.",
      "I built this space from scratch because I wanted to show you how much I value every moment we've shared. Pero higit pa doon, I wanted a special way to be completely honest about how I feel.",
      "You are so incredibly important to me. Kaya sa special day mong 'to, I want to take a step forward. Gusto kitang ligawan. Gusto kong patunayan sa'yo araw-araw na seryoso ako, and I want to do this right. Sabi ko nga dun sa timeline natin, I am always willing to wait, pero gusto ko lang malaman mo na ikaw na talaga yung gusto ko.",
    ],
    closing: "Can I officially court you?",
  },
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";

const diaryEntries = [
  {
    title: "The Day We Met",
    date: "A day I'll never forget",
    text: "I didn't know it then, but that moment changed everything. Your smile was the first thing I noticed, and I knew something magical was about to begin.",
  },
  {
    title: "Our First Date",
    date: "Butterflies everywhere",
    text: "I was so nervous, but being with you felt like the most natural thing in the world. Time stopped, and all I could see was you.",
  },
  {
    title: "When I Knew",
    date: "The moment it all clicked",
    text: "It wasn't a grand gesture. It was a quiet moment — you laughed at something small, and I thought, 'This is the person I want forever.'",
  },
  {
    title: "Today & Always",
    date: "Happy Valentine's Day",
    text: "Every chapter with you is my favorite. I can't wait to write a thousand more pages together. You are my love story. 💕",
  },
];

const DiaryPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const entry = diaryEntries[page];

  return (
    <div className="page-container">
      <FloatingHearts count={6} />

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center gap-8">
        <motion.h1
          className="romantic-title text-5xl md:text-7xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Love Diary
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="diary-page w-full"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm text-muted-foreground italic mb-1">
              {entry.date}
            </p>
            <h2 className="romantic-title text-3xl md:text-4xl mb-4">
              {entry.title}
            </h2>
            <p className="text-secondary-foreground leading-relaxed text-base">
              {entry.text}
            </p>
            <p className="text-xs text-muted-foreground mt-6 text-right">
              Page {page + 1} of {diaryEntries.length}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4">
          {page > 0 && (
            <motion.button
              className="btn-no"
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage((p) => p - 1)}
            >
              ← Back
            </motion.button>
          )}

          {page < diaryEntries.length - 1 ? (
            <motion.button
              className="btn-yes"
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage((p) => p + 1)}
            >
              Next →
            </motion.button>
          ) : (
            <motion.button
              className="btn-yes"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/finale")}
            >
              Final Message →
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;

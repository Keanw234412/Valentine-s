import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GiftBox from "@/components/GiftBox";
import FloatingHearts from "@/components/FloatingHearts";

const gifts = [
  { icon: "🎁", message: "Something sweet for someone sweeter 💕" },
  { icon: "💐", message: "A bouquet of all my feelings for you 🌸" },
  { icon: "🍫", message: "Life is sweeter with you in it 🤎" },
  { icon: "💌", message: "Every word I write is about you 💗" },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());
  const [showQuestion, setShowQuestion] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleGiftOpen = useCallback(
    (index: number) => {
      const newSet = new Set(openedGifts);
      newSet.add(index);
      setOpenedGifts(newSet);
      if (newSet.size === gifts.length) {
        setTimeout(() => setShowQuestion(true), 800);
      }
    },
    [openedGifts]
  );

  const moveNoButton = () => {
    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 300;
    setNoPosition({ x, y });
  };

  const handleYes = () => {
    navigate("/celebration");
  };

  return (
    <div className="page-container">
      <FloatingHearts count={10} />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!showQuestion ? (
            <motion.div
              key="gifts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.h1
                className="romantic-title text-5xl md:text-7xl text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                I have something for you...
              </motion.h1>
              <p className="text-muted-foreground text-center text-lg">
                Open each gift to discover a surprise 💝
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-2xl">
                {gifts.map((gift, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    <GiftBox
                      icon={gift.icon}
                      message={gift.message}
                      isOpened={openedGifts.has(i)}
                      onOpen={() => handleGiftOpen(i)}
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                {openedGifts.size}/{gifts.length} gifts opened
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="flex flex-col items-center gap-10"
            >
              <motion.h1
                className="romantic-title text-5xl md:text-8xl text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                Will you be my Valentine?
              </motion.h1>

              <div className="flex gap-6 items-center relative min-h-[120px] min-w-[300px] justify-center">
                <motion.button
                  className="btn-yes animate-pulse-glow"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                >
                  Yes 💖
                </motion.button>

                <motion.button
                  className="btn-no"
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ duration: 0 }}
                  onClick={moveNoButton}
                >
                  No 🙃
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
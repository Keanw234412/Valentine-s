import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GiftBoxProps {
  icon: string;
  message: string;
  onOpen: () => void;
  isOpened: boolean;
}

const GiftBox = ({ icon, message, onOpen, isOpened }: GiftBoxProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (!isOpened) {
      setShowMessage(true);
      onOpen();
    }
  };

  return (
    <motion.div
      className="gift-box flex flex-col items-center gap-3 min-w-[140px] min-h-[160px] justify-center"
      whileHover={{ scale: isOpened ? 1 : 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      layout
    >
      <AnimatePresence mode="wait">
        {!showMessage ? (
          <motion.div
            key="icon"
            className="text-5xl"
            initial={{ scale: 1 }}
            exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        ) : (
          <motion.div
            key="message"
            className="text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <p className="text-sm font-medium text-secondary-foreground leading-relaxed">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {!showMessage && (
        <p className="text-xs text-muted-foreground">Tap to open</p>
      )}
    </motion.div>
  );
};

export default GiftBox;

import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";

// Import foto-foto kecil untuk animasi
import heart1 from "@/assets/photos/photo1.jpeg";
import heart2 from "@/assets/photos/photo2.jpeg";
import heart3 from "@/assets/photos/photo3.jpeg";
import heart4 from "@/assets/photos/photo4.jpeg";
import heart5 from "@/assets/photos/photo5.jpeg";

const FinalPage = () => {
  // Array foto untuk animasi
  const heartPhotos = [heart1, heart2, heart3, heart4, heart5];

  return (
    <div className="page-container">
      <FloatingHearts count={30} />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 max-w-lg text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-7xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ❤️
        </motion.div>

        <motion.h1
          className="romantic-title text-5xl md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Forever Yours
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-secondary-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          No matter where I am, my heart stays with you.
        </motion.p>

        <motion.p
          className="text-2xl md:text-3xl romantic-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Happy Valentine's Day ❤️
        </motion.p>

        {/* Ganti emoji dengan foto */}
        <motion.div
          className="flex gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {heartPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-pink-300"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            >
              <img 
                src={photo} 
                alt={`Heart ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Made with all my love, just for you 🤍
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FinalPage;
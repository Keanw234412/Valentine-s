import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CelebrationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 max-w-lg text-center px-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 15 }}
      >
        {/* Tambahkan background wrapper */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl mx-auto"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="src/assets/bubu.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.h1
            className="romantic-title text-5xl md:text-7xl mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Yay!
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You just made me the happiest person 💕
          </motion.p>

          <motion.p
            className="text-gray-600 text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I knew you'd say yes ☺️
          </motion.p>

          <motion.button
            className="btn-yes mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/memories")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Continue →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CelebrationPage;
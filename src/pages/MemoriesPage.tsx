import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import semua foto
import photo1 from "@/assets/photos/photo1.jpeg";
import photo2 from "@/assets/photos/photo2.jpeg";
import photo3 from "@/assets/photos/photo3.jpeg";
import photo4 from "@/assets/photos/photo4.jpeg";
import photo5 from "@/assets/photos/photo5.jpeg";
import photo6 from "@/assets/photos/photo6.jpeg";

const photos = [
  { id: 1, caption: "The day our story began 🤍", url: photo1 },
  { id: 2, caption: "The moment I gathered the courage to ask you 🥹💓", url: photo2 },
  { id: 3, caption: "The moment you said yes and we became us 🥰", url: photo3 },
  { id: 4, caption: "Where it all began ✨", url: photo4 },
  { id: 5, caption: "Forever grateful for this day 💖", url: photo5 },
  { id: 6, caption: "You make everything beautiful 🌸", url: photo6 },
];

const MemoriesPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10 w-full px-4"
      >
        <h1 className="romantic-title text-5xl md:text-7xl text-center mb-4">
          Our Memories
        </h1>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Click on a photo to see it closer 💝
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
              onClick={() => setSelected(photo.id)}
            >
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 text-center font-medium">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal untuk melihat foto lebih besar */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-2xl p-6 max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={photos.find((p) => p.id === selected)?.url}
                  alt={photos.find((p) => p.id === selected)?.caption}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-4"
                />
                <p className="text-gray-700 text-center text-lg font-medium mb-4">
                  {photos.find((p) => p.id === selected)?.caption}
                </p>
                <button
                  className="w-full btn-yes"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-yes mt-12 mx-auto block"
          onClick={() => navigate("/diary")}
        >
          Next →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MemoriesPage;

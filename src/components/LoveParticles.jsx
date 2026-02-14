import { motion } from "framer-motion";

const LoveParticles = () => {
  // Reduced particles untuk performa
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ['💕', '💗', '💖', '💝', '💘', '✨'][Math.floor(Math.random() * 6)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 20 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.left,
            bottom: '-50px',
            fontSize: `${particle.size}px`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(particle.id) * 100],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default LoveParticles;
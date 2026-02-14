import LoveParticles from "./LoveParticles";
import FloatingHearts from "./FloatingHearts";

const AnimatedBackground = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 animated-gradient-bg -z-10" />
      
      {/* Interactive love particles */}
      <LoveParticles />
      
      {/* Floating hearts */}
      <FloatingHearts count={30} />

      {/* Floating orbs */}
      <div 
        className="fixed top-20 left-20 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl floating-orb" 
        style={{ animationDelay: '0s' }} 
      />
      <div 
        className="fixed bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl floating-orb" 
        style={{ animationDelay: '5s' }} 
      />
      <div 
        className="fixed top-1/2 left-1/2 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl floating-orb" 
        style={{ animationDelay: '10s' }} 
      />

      {/* Content */}
      {children}
    </div>
  );
};

export default AnimatedBackground;
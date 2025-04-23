import { motion } from "framer-motion";

export default function PetalOverlay() {
  const petals = Array.from({ length: 25 });
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((_, i) => {
        const size = 6 + Math.random() * 4;
        const left = `${Math.random() * 100}vw`;
        const delay = i * 0.3;
        const duration = 12 + Math.random() * 10;
        const wiggleAmplitude = 20 + Math.random() * 10;
        return (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: "100vh",
              opacity: [0.3, 0.8, 0],
              x: [0, wiggleAmplitude, -wiggleAmplitude, 0]
            }}
            transition={{
              delay,
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="absolute top-0 bg-pink-200 rotate-45"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left,
              opacity: 0.6,
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(255,192,203,0.9)",
              filter: "blur(1px)"
            }}
          />
        );
      })}
    </div>
  );
}

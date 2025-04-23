import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundPetals() {
  const [petals, setPetals] = useState([]);
  
  useEffect(() => {
    // Initialize petals
    setPetals(Array.from({ length: 60 }).map(() => ({
      id: Math.random(),
      size: 6 + Math.random() * 8,
      left: `${Math.random() * 100}vw`,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      wiggle: 20 + Math.random() * 30
    })));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: "100vh",
              x: [0, petal.wiggle, -petal.wiggle, 0],
              rotate: [0, 180, 360],
              opacity: [0.7, 0.9, 0.3],
            }}
            transition={{
              delay: petal.delay,
              duration: petal.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute bg-pink-400 rotate-45"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              left: petal.left,
              borderRadius: "2px",
              boxShadow: "0 0 15px rgba(255,192,203,0.8)",
              filter: "blur(0.8px)",
            }}
          />
      ))}
    </div>
  );
}

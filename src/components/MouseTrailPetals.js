import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseTrailPetals() {
  const [trailPetals, setTrailPetals] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      spawnPetal(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spawnPetal = (x, y) => {
    const id = Date.now() + Math.random();
    const size = 6 + Math.random() * 4;
    const wiggle = 20 + Math.random() * 10;
    const duration = 3 + Math.random() * 2;
    const delay = 0;

    setTrailPetals((prev) => [
      ...prev,
      { id, x, y, size, wiggle, delay, duration },
    ]);

    setTimeout(() => {
      setTrailPetals((prev) => prev.filter((p) => p.id !== id));
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {trailPetals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 1 }}
          animate={{
            y: "100vh",
            x: [p.x, p.x + p.wiggle, p.x - p.wiggle, p.x],
            rotate: [0, 360],
            opacity: [1, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute bg-pink-200 rotate-45"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(255,192,203,0.9)",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

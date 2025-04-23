import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PoemBlock({ title, text, onComplete }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            onComplete();
            return prev;
          }
          return prev + 1;
        });
      }, 1000); // Controls when the next line appears
      return () => clearInterval(interval);
    }
  }, [inView, text.length, onComplete]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto my-32 px-4 text-left"
    >
      <h2 className="text-3xl font-bold mb-12 text-white">{title}</h2>
      {text.slice(0, visibleLines).map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: i * 0.5 }}
          className="text-xl font-serif leading-relaxed text-white mb-6"
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}

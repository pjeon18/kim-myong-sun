import { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample poems or stanzas
const poems = [
  {
    id: 1,
    text: "Beneath the moonlit sky I wait,\nFor silence deep and thoughts sedate.\nThe stars arrive in slow parade,\nAnd time dissolves where dreams are made."
  },
  {
    id: 2,
    text: "The ink runs wild across the page,\nA storm of thought, a poet's rage.\nYet in the chaos, rhythm grows—\nA quiet pulse the reader knows."
  },
  {
    id: 3,
    text: "This stanza here could float or spin,\nWith light or dark depending when.\nLet motion tell the tale with grace,\nAnd poetry reshape the space."
  }
];

function PoemBlock({ text }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto my-16 px-4 text-center"
    >
      <p className="text-xl leading-relaxed whitespace-pre-line font-serif text-gray-800 dark:text-gray-100">
        {text}
      </p>
    </motion.div>
  );
}

export default function Exhibit() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-6 pt-20 relative"
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
          style={{ width: "100%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Splash intro */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center mb-20 tracking-widest"
        >
          Exhibit
        </motion.h1>

        {/* Poem blocks */}
        {poems.map((poem) => (
          <PoemBlock key={poem.id} text={poem.text} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

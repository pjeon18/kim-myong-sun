import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PoemBlock from "./PoemBlock";
import PetalOverlay from "./PetalOverlay";
import TypewriterMultiline from "./TypewriterMultiline";
import ExhibitNav from "./ExhibitNav";

const poems = [
  {
    id: 1,
    title: "Midnight Waiting",
    text: [
      "Beneath the moonlit sky I wait,",
      "For silence deep and thoughts sedate.",
      "The stars arrive in slow parade,",
      "And time dissolves where dreams are made."
    ]
  },
  // ... (remaining poems)
];

export default function Exhibit() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(-1);
  const [showNav, setShowNav] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  const nextPoem = () => {
    setShowNav(false);
    setCurrentPoemIndex((prev) => (prev + 1 < poems.length ? prev + 1 : prev));
  };

  const prevPoem = () => {
    setShowNav(false);
    setCurrentPoemIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPoemIndex}
        initial={{ opacity: 0, backgroundColor: "#000" }}
        animate={{ opacity: 1, backgroundColor: "#000" }}
        exit={{ opacity: 0, backgroundColor: "#000" }}
        transition={{ duration: 1 }}
        className="min-h-screen text-white px-6 pt-40 pb-40 relative overflow-x-hidden"
      >
        <PetalOverlay />

        {currentPoemIndex === -1 && (
          <>
            <TypewriterMultiline
              lines={["The Digital", "Kim Myung Sun", "Exhibit"]}
              className="text-5xl md:text-8xl font-extrabold tracking-widest"
              onComplete={() => setTypewriterComplete(true)}
            />
            {typewriterComplete && (
              <>
                <TypewriterMultiline
                  lines={["A Collection of Kim's Poems"]}
                  className="text-4xl md:text-6xl font-semibold tracking-wide mt-20"
                  colorClass="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]"
                />
                <div className="text-center mt-20">
                  <button
                    onClick={() => setCurrentPoemIndex(0)}
                    className="text-white underline text-lg hover:text-gray-300"
                  >
                    Begin Exhibit
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {currentPoemIndex >= 0 && (
          <PoemBlock
            title={poems[currentPoemIndex].title}
            text={poems[currentPoemIndex].text}
            onComplete={() => setShowNav(true)}
          />
        )}

        {showNav && (
          <ExhibitNav
            isVisible={true}
            onToggle={() => {}}
            onPrev={prevPoem}
            onNext={nextPoem}
            showPrev={currentPoemIndex > 0}
            showNext={currentPoemIndex < poems.length - 1}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

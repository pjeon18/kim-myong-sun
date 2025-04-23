import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PoemBlock from "./PoemBlock";
import TypewriterMultiline from "./TypewriterMultiline";
import ExhibitNav from "./ExhibitNav";


const poems = [
  {
    id: 1,
    title: "The Battle",
    text: [
      "There was an old soldier\nWho plowed a field with his weapon\nFor he was injured all over from long battles\nAnd thus hated fighting in battles.\n\n",
      "But the furrows were unyielding\nAnd the landlord was vicious,\nSo there was no harvest\nEven after sowing and weeding.\n\n",
      "So, one day, the old soldier,\nWas paralyzed in sleep like a shooting rifle,\nStifled by heavy thoughts.\n\n",
      "Oh, how strange—this soldier,\nWhile sleeping after dumping his weapon,\nDied with bruises all over his body\nAs if he fought in his dream.\n\n",
      "People turned their heads.\nThere are battles whether you are awake or asleep,\nSo being alive and dead must be the same.\nSaying so, each of them tensed both arms.\n\n",
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
      {/* Multi-stop custom gradient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{background: "linear-gradient(to bottom, #090909 0%, #181e2a 50%, #090909 100%)"}} />
      <motion.div
        className="relative z-10 min-h-screen text-white px-6 pt-40 pb-40 overflow-x-hidden"
        key={currentPoemIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >

        {currentPoemIndex === -1 && (
          <>
            <TypewriterMultiline
              lines={["The Digital", "Kim Myŏng Sun", "Exhibit"]}
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
        {/* Button to citations page after last poem */}
        {showNav && currentPoemIndex === poems.length - 1 && (
          <div className="flex flex-col items-center mt-16 mb-10">
            <button
              onClick={() => window.location.href='/citations'}
              className="px-8 py-4 text-2xl bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Citations
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import BackgroundPetals from "./BackgroundPetals";

// Author image is in public/author.jpg
export default function HomePage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY < 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative text-white overflow-x-hidden"
    >
      {/* Multi-stop custom gradient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{background: "linear-gradient(to bottom, #090909 0%, #181e2a 50%, #090909 100%)"}} />
      {/* Petals in front of background */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <BackgroundPetals />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl md:text-8xl font-extrabold leading-tight max-w-5xl mx-auto mb-8"
        >
          Kim Myŏng Sun
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-300 text-center max-w-2xl mx-auto"
        >
          Korea's First Female Published Writer
        </motion.p>
      </section>

      {/* Biography Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={process.env.PUBLIC_URL + '/author.jpg'}
              alt="Kim Myŏng Sun portrait"
              className="w-96 md:w-[32rem] aspect-square object-cover rounded-full shadow-xl border-4 border-pink-200/60 mx-auto md:mx-0 mb-8 md:mb-0 bg-black"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">The Author</h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
            >
              Kim Myŏng Sun’s first published work, <span className="italic">"A Girl of Mystery"</span>, in 1917 won third prize in a journal sponsored by Chongchun, receiving high praise from other Korean male writers. However, while her male contemporaries whose work showed inspiration from Japanese literature and style were described merely as "imitative," <span className="italic">"A Girl of Mystery"</span> was unfairly scrutinized as plagiarism.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
            >

            </motion.p>
           </motion.div>
         </div>
       </section>

      {/* Feminism Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-left items-start space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">Male critics at the time cast doubt on Kim Myŏng Sun's ability to write with such sophistication and organization, despite their claims having no factual basis. Throughout her career, Kim was repeatedly targeted with baseless accusations from journals, newspapers, and fellow writers. Even during her studies abroad in Japan, the media sensationalized and dramatized her personal and romantic life, frequently publishing accounts without credible sources.</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
          >
            These media portrayals unjustly painted Kim as scandalous and focused obsessively on her connections with men, largely overlooking her significant literary contributions to Korea. Many stories circulating at the time offered wildly conflicting accounts of her early life, causing Kim considerable mental anguish. Despite the disparities in these narratives, they consistently downplayed her literary achievements, emphasizing her personal life instead.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
          >
            Even the date of Kim's death was widely misreported; although it was generally speculated to have occurred in April 1951, closer examination of her publication history indicates that she passed away sometime between September 1954 and September 1957.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-left items-start space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">It was not until the 1960s that there would be a more balanced autographical account written about her, and not until the 1970s and 1980s that her work would be analyzed in depth.</h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
          </motion.p>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Her persistent dedication to writing despite continual backlash and accusations from peers highlights Kim Myŏng Sun's resilience as both a writer and a woman in Korea's early literary scene. Through an examination of her life and career, it becomes clear how significantly she paved the way for future generations of female writers in a society where women were routinely marginalized, harshly judged, and rarely acknowledged for their talent or innovative contributions.
          </motion.p>
        </motion.div>
      </section>

      {/*  Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-left items-start space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">Literary Legacy </h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Kim was instrumental in introducing Western literature to Korea, translating many classics, including Edgar Allan Poe's short stories and poetry. In the later stages of her career, Kim increasingly focused on writing poetry, publishing under various pen names, most notably T'ansil—a childhood name given by her parents.
          </motion.p>
          
        </motion.div>
      </section>


      {/* Call to Action */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold">Explore Her Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Step into an immersive journey through the life and works of Kim Myŏng Sun
          </p>
          <button
            onClick={() => navigate("/classic")}
            className="mt-8 px-8 py-4 text-xl bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Enter the Exhibit
          </button>
        </motion.div>
      </section>
      {/* Down Arrow - only shows when at top */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl z-40 pointer-events-none"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: showArrow ? 1 : 0,
          y: [0, 16, 0]
        }}
        transition={{
          opacity: { duration: 0.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }
        }}
        aria-hidden="true"
      >
        <span style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>↓</span>
      </motion.div>
    </main>
  );
}

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
          Pioneer of Modern Korean Literature
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
              className="w-48 h-48 md:w-64 md:h-64 shadow-xl border-4 border-pink-200/60 mx-auto md:mx-0 mb-8 md:mb-0 bg-black"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </motion.p>
            <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
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
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">Kim Myŏng-sun and Early Korean Feminism</h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </motion.p>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
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
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">About Kim Myŏng-sun</h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </motion.p>
          <h3 className="text-3xl md:text-4xl font-semibold mt-8">"Flower Dream": Themes and Significance</h3>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </motion.p>
        </motion.div>
      </section>

      {/* Legacy Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-left items-start space-y-8"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-left mb-8">Literary Legacy</h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Poetry</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prose</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section (formerly ClassicHome) */}
      <section className="max-w-4xl mx-auto px-8 pb-32 pt-32">
        {[
          {
            title: "Early Life",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
          },
          {
            title: "Literary Journey",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
          },
          {
            title: "Major Works",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
          },
          {
            title: "Legacy",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
          }
        ].map((section, index, arr) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-24 relative"
          >
            {/* Timeline connector */}
            {index < arr.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-pink-500 to-transparent" />
            )}
            {/* Content */}
            <div className="relative pl-24">
              <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{section.content}</p>
            </div>
          </motion.div>
        ))}
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
          <h2 className="text-4xl md:text-6xl font-bold">Explore Her World</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Step into an immersive journey through the life and works of Kim Myong Sun
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

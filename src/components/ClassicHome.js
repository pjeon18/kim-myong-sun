import { motion } from "framer-motion";

import Navbar from "./Navbar";

export default function ClassicHome() {
  const sections = [
    {
      title: "Early Life",
      content: "Kim Myŏng Sun was born in 1896 during a transformative period in Korean history. Her early years coincided with the end of the Joseon Dynasty and Korea's emergence into the modern era."
    },
    {
      title: "Literary Journey",
      content: "Beginning her writing career in the 1920s, she quickly established herself as a powerful voice in Korea's emerging modern literature. Her work often focused on themes of women's experiences and social transformation."
    },
    {
      title: "Major Works",
      content: "Her portfolio includes groundbreaking poetry collections and prose works that challenged conventional narratives. Each piece reflects her unique perspective on Korean society and women's roles within it."
    },
    {
      title: "Legacy",
      content: "Kim Myŏng Sun's influence extends beyond her era, inspiring generations of writers who followed. Her work continues to be studied and celebrated as a cornerstone of modern Korean literature."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white">
      {/* Archive Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-32 px-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Archive</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A chronological journey through Kim Myŏng Sun's life and works
        </p>
      </motion.div>

      {/* Timeline Sections */}
      <div className="max-w-4xl mx-auto px-8 pb-32">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-24 relative"
          >
            {/* Timeline connector */}
            {index < sections.length - 1 && (
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
      </div>
    <div className="flex flex-col items-center mt-16 mb-10">
      <button
        onClick={() => window.location.href='/exhibit'}
        className="px-8 py-4 text-2xl bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Go to Exhibit
      </button>
    </div>
      </div>
    </>
  );
}

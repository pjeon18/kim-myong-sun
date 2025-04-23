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
        <div className="flex flex-col items-center mt-16">
    <button
      onClick={() => navigate('/classic')}
      className="px-8 py-4 text-2xl bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl mb-8"
    >
      Explore the Archive
    </button>
  </div>

</section>

      {/* Biography Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={process.env.PUBLIC_URL + '/author.jpg'}
              alt="Kim Myŏng Sun portrait"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-pink-200/60 mx-auto md:mx-0 mb-8 md:mb-0"
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
              Kim Myŏng Sun (1896-1951) was one of Korea's earliest modern women writers, making her mark during a pivotal time in Korean literary history. Her work powerfully captures the spirit of early modern Korea and the emerging voice of women in literature.
            </motion.p>
            <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
              Through her poetry and prose, she explored themes of identity, independence, and the complexities of human emotion with remarkable depth and nuance.
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
            Kim Myŏng-sun emerged during the 1920s, a period known as Korea's "New Woman" era, characterized by increased education and social visibility for women, who began openly challenging traditional patriarchal norms. As one of these pioneering "New Women," Kim contributed significantly to early feminist discourse through her literature. Her writings openly depicted women's emotional lives, desires, and traumas, confronting taboos and giving voice to marginalized experiences. Despite facing criticism and public attacks, Kim persisted, making her one of Korea's earliest feminist literary voices.
          </motion.p>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            In the broader historical context, feminism in early 20th-century Korea grew from increased educational opportunities and exposure to Western feminist ideas. Women began advocating publicly for greater social rights, autonomy, and liberation from oppressive Confucian gender norms. Kim Myŏng-sun actively engaged with these feminist ideas, using her poetry and stories to subtly yet powerfully challenge entrenched patriarchal structures and cultural restrictions placed upon women. Her literary courage—especially in poems like "Flower Dream," which explored women's inner realities and suffering—laid important groundwork for later feminist literature and women's rights advocacy in Korea.
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
            Kim Myŏng-sun (1896–c.1954) was Korea's first modern female writer to publish a literary collection. Born to a kisaeng mother, Kim faced lifelong prejudice and social stigma. Despite these challenges, she emerged prominently in the 1920s as a pioneer of feminist literature, bravely confronting patriarchal norms. Her candid writings about women's inner lives, desires, and traumas sparked controversy, leading male critics to vilify and marginalize her. Ultimately, Kim’s progressive voice was silenced by poverty and obscurity, though contemporary scholarship now recognizes her importance as a groundbreaking feminist literary figure.
          </motion.p>
          <h3 className="text-3xl md:text-4xl font-semibold mt-8">"Flower Dream": Themes and Significance</h3>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl text-gray-100 leading-[2] mb-8"
>
            In her notable poem "Flower Dream" (1920), Kim Myŏng-sun uses symbolic imagery of a flower’s fleeting encounter with morning dew to represent lost innocence, betrayed trust, and transient happiness. The disappearing dew symbolizes betrayal—likely inspired by Kim’s own traumatic experiences. This poem quietly yet powerfully expresses personal anguish and societal injustice, anticipating modern feminist themes. Through allegory, Kim gave voice to women’s unspoken traumas long before public acknowledgment was possible, positioning "Flower Dream" as a significant precursor to feminist and confessional literature in Korea.
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
            Her contributions to Korean literature include groundbreaking works that challenged societal norms and gave voice to the experiences of women in early 20th century Korea. Her writing style, characterized by its lyrical quality and emotional depth, influenced generations of writers who followed.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Poetry</h3>
              <p className="text-gray-300">Innovative verses that captured the spirit of modern Korea</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prose</h3>
              <p className="text-gray-300">Powerful narratives exploring women's experiences</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-300">Lasting influence on Korean literature</p>
            </div>
          </div>
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
          <h2 className="text-4xl md:text-6xl font-bold">Explore Her World</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Step into an immersive journey through the life and works of Kim Myung Sun
          </p>
          <button
            onClick={() => navigate("/exhibit")}
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

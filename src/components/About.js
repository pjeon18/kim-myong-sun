import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function About() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.2 }
    );

    if (node) observer.observe(node);
    return () => node && observer.unobserve(node);
  }, [controls]);

  return (
    <motion.div
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="p-6"
    >
      <h2 className="text-3xl font-bold mb-2">About the Author</h2>
      <p>
        {/* author bio text here */}
        This is where you can include a short biography of the author, including their background, writing style, and notable achievements.
      </p>
    </motion.div>
  );
}

export default About;

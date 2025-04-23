import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Header() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  <nav className="space-x-4">
  <a href="#about" className="hover:underline text-white">About</a>
  <a href="#books" className="hover:underline text-white">Books</a>
  <a href="#contact" className="hover:underline text-white">Contact</a>
  </nav>


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
    <motion.header
      ref={sectionRef}
      initial={{ opacity: 0, y: -30 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="bg-red-900 text-white p-6 text-center shadow-md"
    >
      <h1 className="text-3xl font-bold">Kim Myŏng Sun: Unearthing the Story of Korea's Earliest Female Literary Figure</h1>
      <p className="text-lg">Official Website</p>
    </motion.header>
  );
}

export default Header;
